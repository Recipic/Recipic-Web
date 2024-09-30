/** 파일 변환 함수 */
export async function convertToFile(input: string | File, filename = 'image'): Promise<File | string> {
  if (input instanceof File) {
    return input;
  }

  if (typeof input === 'string') {
    // S3 URL인 경우 그대로 반환
    if (input.startsWith('https://storage.googleapis.com/recipick-image-bucket')) {
      return input;
    }

    let blob: Blob;
    let extension: string;

    if (
      input.startsWith('blob:') ||
      input.startsWith('data:') ||
      input.startsWith('http://') ||
      input.startsWith('https://')
    ) {
      const response = await fetch(input);
      blob = await response.blob();

      const mimeType = response.headers.get('content-type') || blob.type;
      extension = mimeTypeToExtension(mimeType);
    } else {
      throw new Error('Invalid input format');
    }

    const fileExtension = getFileExtension(filename) || extension;
    const newFilename = `${removeFileExtension(filename)}.${fileExtension}`;

    return new File([blob], newFilename, { type: blob.type });
  }

  throw new Error('Invalid input type');
}

/** MIME 타입을 파일 확장자로 변환 */
function mimeTypeToExtension(mimeType: string): string {
  const mimeToExt: { [key: string]: string } = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/avif': 'avif',
    'image/svg+xml': 'svg',
    'image/bmp': 'bmp',
    'image/tiff': 'tiff',
  };

  return mimeToExt[mimeType] || 'jpg';
}

/** 파일명에서 확장자 추출 */
function getFileExtension(filename: string): string | null {
  const match = filename.match(/\.([^.]+)$/);
  return match ? match[1].toLowerCase() : null;
}

/** 파일명에서 확장자 제거 */
function removeFileExtension(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '');
}
