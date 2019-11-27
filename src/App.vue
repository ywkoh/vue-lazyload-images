<template>
  <div id="app">
    <div class="container_wrap">
      <h2>Image lazy load</h2>
      <section>
        <h3>Vertical scroll</h3>

        <div class="list_wrap">
          <ul id="list" v-lazyloadimage="{time: 300}">
            <li v-for="item in prd" v-bind:key="item.idx">
              <div class="img_wrap">
                <img :data-src="item.imgUrl" class="lazy">
                <!-- <div :data-bg="item.imgUrl" class="lazy img"></div> -->
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      prd: [
        {
		      idx: 1,
          imgUrl: "https://vueschool.io/media/e5d78fffdb3ae73bda04e07f18551016/the-vuejs-3-master-class.jpeg"
        },
        {
		      idx: 2,
          imgUrl: "https://vueschool.io/media/276ae535019f8df829dae9d295bd2db9/web-accessibility-fundamentals.png"
		    },
		    {
		      idx: 3,
          imgUrl: "https://vueschool.io/media/e5d78fffdb3ae73bda04e07f18551016/the-vuejs-3-master-class.jpeg"
        },
        {
		      idx: 4,
          imgUrl: "https://vueschool.io/media/276ae535019f8df829dae9d295bd2db9/web-accessibility-fundamentals.png"
		    },
		    {
		      idx: 5,
          imgUrl: "https://vueschool.io/media/e5d78fffdb3ae73bda04e07f18551016/the-vuejs-3-master-class.jpeg"
        },
        {
		      idx: 6,
          imgUrl: "https://vueschool.io/media/276ae535019f8df829dae9d295bd2db9/web-accessibility-fundamentals.png"
		    },
		    {
		      idx: 7,
          imgUrl: "https://vueschool.io/media/e5d78fffdb3ae73bda04e07f18551016/the-vuejs-3-master-class.jpeg"
        },
        {
		      idx: 8,
          imgUrl: "https://vueschool.io/media/276ae535019f8df829dae9d295bd2db9/web-accessibility-fundamentals.png"
		    },
		    {
		      idx: 9,
          imgUrl: "https://vueschool.io/media/e5d78fffdb3ae73bda04e07f18551016/the-vuejs-3-master-class.jpeg"
        },
        {
		      idx: 10,
          imgUrl: "https://vueschool.io/media/276ae535019f8df829dae9d295bd2db9/web-accessibility-fundamentals.png"
        }
      ]
    };
  }
};
</script>

<style>
@charset "UTF-8";
/* common */
* {
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
}
img {width:100%}

/* 화면 css */
.list_wrap .img_wrap {
  position: relative;
  padding-top: 49.8%;
}
.list_wrap img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
}
.list_wrap .img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
