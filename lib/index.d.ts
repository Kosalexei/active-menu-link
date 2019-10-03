interface IParameters {
  /**
   * Selector to which the active class will be applied.
   */
  itemTag: string;

  /**
   * Active class name.
   */
  activeClass: string;

  /**
   * Scroll offset.
   */
  scrollOffset: number;

  /**
   * Scroll duration in milliseconds.
   */
  scrollDuration: number;

  /**
   * Scroll animation.
   */
  ease:
    | "linear"
    | "in-quad"
    | "out-quad"
    | "in-out-quad"
    | "in-cube"
    | "out-cube"
    | "in-out-cube"
    | "in-quart"
    | "out-quart"
    | "in-out-quart"
    | "in-quint"
    | "out-quint"
    | "in-out-quint"
    | "in-sine"
    | "out-sine"
    | "in-out-sine"
    | "in-expo"
    | "out-expo"
    | "in-out-expo"
    | "in-circ"
    | "out-circ"
    | "in-out-circ"
    | "inBack"
    | "outBack"
    | "in-outBack"
    | "inBounce"
    | "outBounce"
    | "in-outBounce"
    | "in-elastic"
    | "out-elastic"
    | "in-out-elastic";

  /**
   * Navbar height. If null, height calculate automatic.
   */
  headerHeight: number;

  /**
   * If the scroll is not in one of the active sections, the default link will be active.
   */
  default: string;

  /**
   * Show hash in address bar.
   */
  showHash: boolean;
}

declare class ActiveMenuLink {
  constructor(menuSelector: string, args?: IParameters);
}
