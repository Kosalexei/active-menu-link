# active-menu-link

A simple library to highlight the active menu item on a single page.

## Installation

### NPM

```shell
npm install --save active-menu-link
```

## Building

```shell
git clone https://git@github.com/Kosalexei/active-menu-link.git
cd active-menu-link
npm install
npm run build #Compiled .js file go to the dist folder.
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
import activeMenuLink from "ActiveMenuLink";

// Not necessary.
let options = {
  activeClass: "active"
};

new activeMenuLink(".navbar", options);
```

## Options

**Supported Options**

| Name             |Type       | Default    | Description |
| ---------------- |-----------| ---------- | ----------- |
| itemTag          | `String`  | *li*       | The selector to which the active class will be applied |
| activeClass      | `String`  | *active*   | The active class name |
| scrollOffset     | `Number`  | *0*        | The scroll offset |
| scrollDuration   | `Number`  | *0*        | The scroll animation duration |
| headerHeight     | `Number`  | *null*     | The navbar height. If *null*, height calculate automatic |
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
import activeMenuLink from "ActiveMenuLink";

let options = {
  default: "default"
};

new activeMenuLink(".navbar", options);
```
