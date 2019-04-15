import { getAbsoluteHeight, scrollTo, getMarginTop } from "./utils";

interface IParameters {
  itemTag: string;
  activeClass: string;
  scrollOffset: number;
  scrollDuration: number;
  headerHeight: number;
  default: string;
  showHash: boolean;
}

export default class ActiveMenuLink {
  manuSelector: string;
  menu: Element;
  links: NodeList;

  activeIndex: number = -1;
  defaultLink: HTMLElement;
  nameAttribute: string = "link-name";

  params: IParameters = {
    itemTag: "li",
    activeClass: "active",
    scrollOffset: 0,
    scrollDuration: 500,
    headerHeight: null,
    default: null,
    showHash: true
  };

  constructor(menuSelector: string, args: object | null = null) {
    if (menuSelector.length < 1) return;

    this.manuSelector = menuSelector;
    this.params = {
      ...this.params,
      ...args
    };

    const menu = document.querySelectorAll(this.manuSelector)[0];

    if (typeof menu !== "undefined") {
      if (this.params.headerHeight === null)
        this.params.headerHeight = menu.clientHeight;

      this.menu = menu;
      this.links = this.getLinks();
      this.setNames(this.links);
      this.defaultLink = this.getDefaultLink();

      this.onScrollLinks(this.links);
      this.onClickLinks(this.links);
    }

    document.addEventListener("scroll", e => {
      this.onScrollLinks(this.links);
    });
  }

  private getLinks(): NodeList {
    if (typeof this.menu === undefined) return null;
    const links = this.menu.querySelectorAll(`${this.params.itemTag} a`);

    return links;
  }

  private getDefaultLink(): HTMLElement {
    if (typeof this.menu === undefined) return null;
    const links = this.getLinks();
    let defaultLink: HTMLElement = null;

    links.forEach((link: HTMLElement) => {
      let name = link.getAttribute("href");

      if (name.indexOf("#") !== 0) return;
      else name = name.replace("#", "");

      if (name === this.params.default) defaultLink = link;
    });

    return defaultLink;
  }

  private setNames(links: NodeList) {
    links.forEach((link: HTMLElement) => {
      const href = link.getAttribute("href");

      if (href.indexOf("#") === -1) return;
      const name = href.split("#")[1]

      link.setAttribute(this.nameAttribute, name);
    });
  }

  private setDefaultActive() {
    if (this.defaultLink === null) return;
    this.defaultLink.classList.add(this.params.activeClass);
  }

  private unsetDefaultActive() {
    if (this.defaultLink === null) return;
    this.defaultLink.classList.remove(this.params.activeClass);
  }

  private onScrollLinks(links: NodeList) {
    let scrollTop = window.scrollY;
    this.activeIndex = -1;

    links.forEach((link: HTMLElement, index: number) => {
      const name = link.getAttribute(this.nameAttribute);
      const target = document.getElementById(name);

      if (target === null) return;

      const targetOffsetTop = target.offsetTop - getMarginTop(target);

      link.classList.remove(this.params.activeClass);

      if (name !== this.params.default && target) {
        if (
          targetOffsetTop <= scrollTop + this.params.headerHeight &&
          targetOffsetTop + getAbsoluteHeight(target) >
            scrollTop + this.params.headerHeight
        ) {
          link.classList.add(this.params.activeClass);
          this.activeIndex = index;
          this.unsetDefaultActive();
        }
      }
    });

    if (this.activeIndex === -1) {
      // If no active links, set default link as active
      this.setDefaultActive();
    }
  }

  private onClickLinks(links: NodeList) {
    links.forEach((link: HTMLElement) => {
      const name = link.getAttribute(this.nameAttribute);
      const target = document.getElementById(name);

      link.addEventListener("click", e => {
        e.preventDefault();

        let scrollTarget: number = null;
        let offset: number = this.params.scrollOffset;

        if (name !== this.params.default && target) {
          scrollTarget =
            target.offsetTop -
            offset -
            getMarginTop(target) -
            this.params.headerHeight;
        }

        if (name === this.params.default) scrollTarget = 0;

        if (scrollTarget !== null) {
          scrollTo(
            document.documentElement,
            scrollTarget,
            this.params.scrollDuration
          );
        }

        if (this.params.showHash) {
          const hash = "#" + name;
          if (history.pushState && document.origin !== undefined) {
            history.pushState(null, null, hash);
          } else {
            location.hash = hash;
          }
        }
      });
    });
  }
}

// new ActiveMenuLink(".navbar", {
//   showHash: true,
//   scrollDuration: 300
// });
