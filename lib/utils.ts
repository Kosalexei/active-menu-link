export const getAbsoluteHeight = (element: HTMLElement): number => {
  const styles = window.getComputedStyle(element);
  const margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(element.offsetHeight + margin);
};

export const getMarginTop = (element: HTMLElement): number => {
  const styles = window.getComputedStyle(element);

  return parseFloat(styles["marginTop"]);
};

export const scrollTo = (
  element: HTMLElement,
  to: number,
  duration: number
) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};
