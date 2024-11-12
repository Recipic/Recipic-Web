/** 웹뷰 환경 감지 */
export function isWebView() {
  const userAgent = navigator.userAgent.toLowerCase();
  const standalone = 'standalone' in window.navigator && window.navigator.standalone;
  const iOSWebView = /(iphone|ipod|ipad).*applewebkit(?!.*safari)/i.test(userAgent);
  const androidWebView = /wv/.test(userAgent) || /Android.*Chrome\/[.0-9]* Mobile/.test(userAgent);

  // iOS의 경우
  if (/iphone|ipod|ipad/.test(userAgent)) {
    return iOSWebView && !standalone;
  }

  // Android의 경우
  if (/android/.test(userAgent)) {
    return androidWebView;
  }

  return false;
}

/** 모바일 앱 내 웹뷰 환경 감지 */
export function isMobileAppWebView() {
  const os = detectOS();
  return (os === 'iOS' || os === 'Android') && isWebView();
}

/** 사용자 환경 감지 */
export function detectOS() {
  const userAgent = navigator.userAgent.toLowerCase();

  // iPad 체크를 가장 먼저 수행
  if (
    /ipad/.test(userAgent) ||
    // iPad Pro와 같은 최신 기기 체크
    (/macintosh/.test(userAgent) && 'ontouchend' in document)
  ) {
    return 'iOS';
  }

  // 그 다음 iPhone, iPod 체크
  if (/iphone|ipod/.test(userAgent)) {
    return 'iOS';
  }

  // 마지막으로 Android 체크
  if (/android/.test(userAgent)) {
    return 'Android';
  }

  return 'unknown';
}

/** 사용자 환경 로깅 (디버깅용) */
export function logEnvironment() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isWebViewResult = isWebView();
  const isMobileAppWebViewResult = isMobileAppWebView();

  console.log('User Agent:', userAgent);
  console.log('Is WebView:', isWebViewResult);
  console.log('Is Mobile App WebView:', isMobileAppWebViewResult);
  console.log('Detected OS:', detectOS());
}
