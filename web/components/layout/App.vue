<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
// 玩物九宫业务配置 START
import flexible from "@wanwu/flexible";
// import * as wanwu from '@wanwu/base-fn';
// import Location from '@wanwu/w-location';
// import locationPluginTimestamp from '@wanwu/bus-sdk-location-plugin-timestamp';
// const Location = __isBrowser__ ? require('@wanwu/w-location') : {} // true
// import lazyload from '@wanwu/base-vue-directive-lazy';


// Vue.use(lazyload, {
//     loading: 'https://cdn.wanwudezhi.com/static/web-static/image/1cfb810cf69db4ea0e0bb3d7a64b71c6_555x555.png',
//     error: 'https://cdn.wanwudezhi.com/static/web-static/image/fdaa64918a5a15e53fc1a87c9d870e61_555x555.png'
//   });
// client 环境执行
if(__isBrowser__){
  require('@wanwu/fastclick');
  flexible(window, window["BaseLib"] || (window["BaseLib"] = {}));
  // console.log(Location.default);
  // Location.default.use(locationPluginTimestamp);
}
// 玩物九宫业务配置 END

// 在这里可以进行一些全局组件的注册逻辑
export default {
  components: {
    // lazyload
  }
}
</script>
