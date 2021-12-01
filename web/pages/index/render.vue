
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
  <div>
  <AppHeader  v-if="isClient" :initShow="true" :showTitle="false" :showShare="true" :showAppHeader="true">
      <!-- <div slot="title" class="classify__search-bar" @click="$location.push('/search/index')">
          <i class="classify__search-icon WWDZ ww-icon-sousuo" />
          <span>{{ categoryName }}</span>
      </div>
      <span slot="refresh" /> -->
  </AppHeader>
  <!-- <WWButton text="主要按钮"></WWButton> -->
  <!-- <vue-simple-spinner size="medium" /> -->

  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Slider from '@/components/slider/index.vue'
import Rectangle from '@/components/rectangle/index.vue'
import Search from '@/components/search/index.vue'
// import { AppHeader } from '@wanwu/add-app-header';
// import WWButton from '@wanwu/base-vue-button';



const { AppHeader }  = __isBrowser__ ? require('@wanwu/add-app-header') : { AppHeader:{} } // true
// import WWButton from '@wanwu/base-vue-button';
// import VueSimpleSpinner from 'vue-simple-spinner';
// import NineSingleBanner from '@/components/nineSingleBanner/dist/singlebanner.bca4858d.js'

export default {
  components: {
    Slider,
    Rectangle,
    Search,
    AppHeader
    // WWButton,
    // VueSimpleSpinner
    // NineSingleBanner
  },
  computed: {
    ...mapState({
      // indexData: state => state.indexStore?.data
    })
  },
  data () {
    return {
      isClient: false
    }
  },
  mounted () {
    this.isClient = true
  }
}
</script>

<style>
</style>
