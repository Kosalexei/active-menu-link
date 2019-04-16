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