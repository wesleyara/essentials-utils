export const windowNavigateHandler = (
  targetUrl: string,
  inNewWindow: boolean,
) => {
  if (inNewWindow) {
    open(targetUrl, "_blank");
  } else {
    location.href = targetUrl;
  }
};
