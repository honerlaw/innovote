declare global {
  interface Window {
    newrelic?: {
      noticeError: (error: Error & { digest?: string }) => void;
    };
  }
}

export const observability = {
  noticeError: async (error: Error & { digest?: string }) => {
    // on the server
    if (typeof window === "undefined") {
      const newrelic = await import("newrelic");
      newrelic.noticeError(error);
      return;
    }

    // in the browser
    window.newrelic?.noticeError(error);
  },
};
