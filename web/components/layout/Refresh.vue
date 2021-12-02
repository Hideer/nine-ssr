/** *component: refresh *@Author: dabing-mac *@Date: 2020-07-16 17:36 **/
<template>
    <Refresh
        v-if="isClient"
        id="refreshWrapper"
        class="refresh-wrapper"
        v-model="isLoading"
        :loading-end="loadingEnd"
        @refresh="onRefresh"
    >
        <div class="slot__wrapper" :key="currentTimeStamp">
            <slot></slot>
        </div>
    </Refresh>
</template>

<script>
    const Refresh = __isBrowser__ ? require('@wanwu/base-vue-refresh') : {};

    export default {
        name: 'refresh',
        components: {
            Refresh: Refresh.default,
        },
        data() {
            return {
                isLoading: false,
                loadingEnd: false,
                currentTimeStamp: Date.now(),
                isClient: false
            };
        },
        mounted () {
          this.isClient = true
        },
        methods: {
            onRefresh() {
                // 解决iPhone7下拉刷新后页面不能滚动--去除以下对overflow的dom操作
                // try {
                //     document
                //         .getElementById('refreshWrapper')
                //         .querySelector('.refresh')
                //         .style.setProperty('overflow', 'hidden', 'important');
                // } catch (error) {
                //     console.error(error);
                // }
                this.currentTimeStamp = Date.now();
                setTimeout(() => {
                    this.isLoading = false;
                    this.loadingEnd = true;
                    // try {
                    //     document
                    //         .getElementById('refreshWrapper')
                    //         .querySelector('.refresh')
                    //         .style.removeProperty('overflow');
                    // } catch (error) {
                    //     console.error(error);
                    // }
                }, 1500);
            },
        },
    };
</script>

<style lang="less" scoped>
    .refresh-wrapper {
        height: 100%;
        /deep/ .refresh,
        .refresh__track {
            height: 100%;
            overflow: unset !important;
        }
        .slot__wrapper {
            height: 100%;
        }
    }
</style>
