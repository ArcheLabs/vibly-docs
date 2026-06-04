if (typeof window !== 'undefined') {
  const originalOnError = window.onerror;
  window.onerror = (msg, url, line, col, error) => {
    if (
      error?.stack?.includes('chrome-extension://') ||
      error?.stack?.includes('moz-extension://') ||
      String(msg).includes('KeyRing')
    ) {
      return true;
    }
    if (originalOnError) {
      return originalOnError.call(window, msg, url, line, col, error);
    }
    return false;
  };

  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason?.stack?.includes('chrome-extension://') ||
      event.reason?.stack?.includes('moz-extension://') ||
      String(event.reason).includes('KeyRing')
    ) {
      event.preventDefault();
    }
  });
}

export function onRouteDidUpdate() {
  // Route change handled
}
