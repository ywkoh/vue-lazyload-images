# vue-lazyload-images

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Installation

## npm

```bash

$ npm i vue-lazyload-images -S

```

# Usage

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VueImgLazyload from 'vue-lazyload-images'

Vue.directive('imglazyload', VueImgLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})

```

template:

```html
<ul v-imglazyload>
  <li v-for="item in list">
    <img :data-src="item.imgUrl" class="lazy">
  </li>
</ul>
```

use background-image

```html
<ul v-imglazyload>
  <li v-for="item in list">
    <div :data-bg="item.imgUrl" class="lazy"></div>
  </li>
</ul>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)