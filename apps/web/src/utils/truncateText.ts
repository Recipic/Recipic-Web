type TruncateTextParams = {
  text: string;
  maxLength: number;
};

export function truncateText({ text, maxLength }: TruncateTextParams): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}
