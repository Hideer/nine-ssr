
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
  <!-- <AppHeader :initShow="true" :showTitle="false" :showShare="true" :showAppHeader="true"> -->
      <!-- <div slot="title" class="classify__search-bar" @click="$location.push('/search/index')">
          <i class="classify__search-icon WWDZ ww-icon-sousuo" />
          <span>{{ categoryName }}</span>
      </div>
      <span slot="refresh" /> -->
  <!-- </AppHeader> -->
  <WWButton text="主要按钮"></WWButton>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Slider from '@/components/slider/index.vue'
import Rectangle from '@/components/rectangle/index.vue'
import Search from '@/components/search/index.vue'
// import { AppHeader } from '@wanwu/add-app-header';
import WWButton from '@wanwu/base-vue-button';



export default {
  components: {
    Slider,
    Rectangle,
    Search,
    // AppHeader
    WWButton,
  },
  computed: {
    ...mapState({
      // indexData: state => state.indexStore?.data
    })
  }
}
</script>

<style>

</style>
