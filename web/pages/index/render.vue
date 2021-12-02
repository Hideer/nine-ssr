
<template>
  <!-- <div>
    <Search />
    <template v-if="indexData">
      <Slider :data="indexData[0].components" />
      <Rectangle :data="indexData[1].components" />
    </template>
    <template v-else>
      <img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">
    </template>
  </div> -->
  <div class="nine-h5-app-wrapper" :style="wrapperStyle">
    <AppHeader  v-if="isClient" :initShow="true" showTitle :showShare="true" :showAppHeader="true">
        <!-- <div slot="title" class="classify__search-bar" @click="$location.push('/search/index')">
            <i class="classify__search-icon WWDZ ww-icon-sousuo" />
            <span>{{ categoryName }}</span>
        </div>
        <span slot="refresh" /> -->
    </AppHeader>
    <!-- <WWButton text="主要按钮"></WWButton> -->
    <!-- <vue-simple-spinner size="medium" /> -->
    <Refresh v-if="globalRefresh">
        <div class="text">
          我是一个测试内容
        </div>
        <!-- <Wrapper
            v-for="(cc, index) in components"
            :key="index"
            :config="cc"
        ></Wrapper> -->
        <!-- <NineShare
            v-if="globalConfig"
            :globalConfig="globalConfig"
        ></NineShare>
        <Occupying v-if="isIphoneX" :height="56"></Occupying> -->
    </Refresh>
    <template v-else>
        <!-- <Wrapper
            v-for="(cc, index) in components"
            :key="index"
            :config="cc"
        ></Wrapper>
        <NineShare
            v-if="globalConfig"
            :globalConfig="globalConfig"
        ></NineShare>
        <Occupying v-if="isIphoneX" :height="56"></Occupying> -->
    </template>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Slider from '@/components/slider/index.vue'
import Rectangle from '@/components/rectangle/index.vue'
import Search from '@/components/search/index.vue'
// import { AppHeader } from '@wanwu/add-app-header';
// import WWButton from '@wanwu/base-vue-button';

const { AppHeader }  = __isBrowser__ ? require('@wanwu/add-app-header') : { AppHeader:{} };
import Refresh from '@/components/layout/Refresh.vue';
// import Wrapper from '@/components/common/Wrapper';

// import WWButton from '@wanwu/base-vue-button';
// import VueSimpleSpinner from 'vue-simple-spinner';
// import NineSingleBanner from '@/components/nineSingleBanner/dist/singlebanner.bca4858d.js'

export default {
  components: {
    Slider,
    Rectangle,
    Search,
    AppHeader,
    Refresh,
    // Wrapper
    // WWButton,
    // VueSimpleSpinner
    // NineSingleBanner
  },
  computed: {
    ...mapState({
      // indexData: state => state.indexStore?.data
    }),
    wrapperStyle() {
        const style = {};
        // if (this.isIphoneX) {
        //     style.paddingBottom = '0.56rem';
        // }
        // if (
        //     this.config.globalConfig &&
        //     this.config.globalConfig.pageBackgroundColor
        // ) {
        //     style.backgroundColor = this.config.globalConfig.pageBackgroundColor;
        // }
        return style;
    },
    globalRefresh() {
        return true;
    },
  },
  data () {
    return {
      isClient: false
    }
  },
  mounted () {
    this.isClient = true
    document.title= '玩物得志'
  }
}
</script>

<style lang="less" scope>
 .nine-h5-app-wrapper {
    width: 7.5rem !important;
    position: relative;
    min-height: 100vh;
    top: 0;
    z-index: 0;

    .text{
      font-size: 100px;
    }
}
</style>
