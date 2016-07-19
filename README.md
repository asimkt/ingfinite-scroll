# ingfinite-scroll
An AngularJS library for infinite scrolling. Calls user function on specific page position.

Most of the angular libraries for AngularJS infinite scrolling out there changes a fixed height container to infinite scrollable container which is, most of the cases we don't need. **ingfinite-scroll** is the best remedy to convert an already implemented content page, (Like a search page, photos page, timeline page) to infinitely scrollable. Simply install the library use it right away with adding `when-scrolled` code in html.

### Installation

- Using Bower
```sh
$ bower install ingfinite-scroll
```
- Using npm
```sh
$ npm install ingfinite-scroll
```
- Link to raw JS file (Not recommended, Will be replaced once a CDN is implemented)
```sh
<script type = "Javascript" src = "https://raw.githubusercontent.com/asimkt/ingfinite-scroll/master/lib/ingfinite-scroll.min.js"></script>

```

**NOTE: Tested with Angular 1.4 and 1.5. Other versions also will be supported. Not tested though.** 

### Usage
Add `when-scrolled = "functionToCall()"` to the section you want to make infinite-scrollable.
```sh
<ul infinite-scroll = "true" when-scrolled="functionToCall()" should-load-items = "{{!loading}}" distance-from-bottom = 400>
    <li data-ng-repeat='item in items'>
        {{item}}
    </li>
</ul>
```
## Options
### infinite-scroll
Type: `string`, `required`

Whether to enable infinite-scroll or not. Usefull for dynamically disable feature. 
###  when-scrolled
Type: `function`, `required`

Function to call for loading more items to the page at specific page position.
###  should-load-items
Type: `string`, `required`

Restrict `when-scrolled` function being called. For example, we should stop calling the API to load items until previous call is finished. (Normally the `loading` variable will go here.)

###  distance-from-bottom
Type: `string`

Tell directive when to call the `when-scrolled` function. Here, `distance-from-bottom = 400` will call the `functionToCall()` when page position is `400unit` above the end of page.

Here's a demo:
http://codepen.io/asim-coder/pen/akWXOy

> TODO: Add CDN Link

Integrate: https://developers.google.com/web/updates/2016/07/infinite-scroller

Report issues at : https://github.com/asimkt/ingfinite-scroll/issues

Connect me through twitter: @KTAsim 

