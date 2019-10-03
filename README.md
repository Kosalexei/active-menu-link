
# active-menu-link

[![NPM version](https://img.shields.io/npm/v/active-menu-link.svg)](https://www.npmjs.com/package/active-menu-link)
[![NPM downloads](https://img.shields.io/npm/dm/active-menu-link.svg)](https://www.npmjs.com/package/active-menu-link)

## Highlight Active Menu Based On The Scroll Position

A pure JavaScript smooth scroll & scrollspy library which highlights the active menu item based on the scroll position.

A typical use of this library is to create a sticky header navigation for your single page app that allows the user to smoothly scroll through page sections while highlighting the active menu item.

## Example
[Example](https://active-menu-link.netlify.com/)

## Installation

```shell
yarn add active-menu-link
# OR
npm install active-menu-link
```

## Usage

### HTML

```html
<nav class="navbar">
  <ul class="navbar-items">
    <li><a href="#first">First</a></li>
    <li><a href="#second">Second</a></li>
    <li><a href="#third">Third</a></li>
  </ul>
</nav>

<div class="blocks">
  <div class="block" id="first">First</div>
  <div class="block" id="second">Second</div>
  <div class="block" id="third">Third</div>
</div>
```

### JavaScript

```js
import ActiveMenuLink from "active-menu-link";

// Not necessary.
let options = {
  activeClass: "active"
};

new ActiveMenuLink(".navbar", options);
```

## Options

**Supported Options**

| Name             |Type       | Default    | Description |
| ---------------- |-----------| ---------- | ----------- |
| itemTag          | `String`  | *li*       | Selector to which the active class will be applied |
| activeClass      | `String`  | *active*   | Active class name |
| scrollOffset     | `Number`  | *0*        | Scroll offset |
| scrollDuration   | `Number`  | *500*      | Scroll duration in milliseconds |
| ease             | `String`  | *out-circ* | Scroll animation (view [ease](https://github.com/component/ease) for more)   |
| headerHeight     | `Number`  | *null*     | Navbar height. If *null*, height calculate automatic |
| default          | `String`  | *null*     | If the scroll is not in one of the active sections, the default link will be active |
| showHash         | `Boolean` | *true*     | Show hash in address bar |

***Default* option example**

### HTML

```html
<nav class="navbar">
  <ul class="navbar-items">
    <li><a href="#default">Default</a></li>
    <li><a href="#first">First</a></li>
    <li><a href="#second">Second</a></li>
    <li><a href="#third">Third</a></li>
  </ul>
</nav>

<div class="blocks">
  <div class="block" id="first">First</div>
  <div class="block" id="second">Second</div>
  <div class="block" id="third">Third</div>
</div>
```

### JavaScript

```js
import ActiveMenuLink from "active-menu-link";

let options = {
  default: "default"
};

new ActiveMenuLink(".navbar", options);
```

## Building

```shell
git clone https://git@github.com/Kosalexei/active-menu-link.git
cd active-menu-link
npm install
npm run build #Compiled .js file go to the dist folder.
```