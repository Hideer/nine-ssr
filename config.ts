import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
  whiteList: [/(@wanwu\/base-style|@wanwu\/base-font-wwdz)/],
  // 这里需要查看框架使用的版本 loader 的文档
  css: () => {
    const precss = require("precss");
    const postcssPresetEnv = require("postcss-preset-env");
    const postcssPx2remOptions = require("postcss-px2rem-options");
    return {
      loaderOptions: {
        // cssOptions: any // css-loader options see https://www.npmjs.com/package/css-loader/v/5.2.7
        // less?: any // less-loader options see https://www.npmjs.com/package/less-loader/v/7.3.0
        // sass?: any // sass-loader options see https://www.npmjs.com/package/sass-loader/v/10.2.0
        postcss: {
          // options: Object|Function // 推荐使用 object see https://www.npmjs.com/package/postcss-loader/v/4.3.0
          plugins: [
            precss(),
            postcssPresetEnv(),
            postcssPx2remOptions([
              { remUnit: 100, include: /web|node_modules/i },
              { remUnit: 50, include: /node_modules\/vant/i },
            ]),
          ],
        },
      },
    };
  },
  // customeHeadScript: [
  //   {
  //     content: `;(function (win, lib) {
  //         var doc = win.document;
  //         var docEl = doc.documentElement;
  //         var metaEl = doc.querySelector('meta[name="viewport"]');
  //         var flexibleEl = doc.querySelector('meta[name="flexible"]');
  //         var dpr = 0;
  //         var scale = 0;
  //         var tid;
  //         var flexible = lib.flexible || (lib.flexible = {});

  //         if (metaEl) {
  //             console.warn('将根据已有的meta标签来设置缩放比例');
  //             var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
  //             if (match) {
  //                 scale = parseFloat(match[1]);
  //                 dpr = parseInt(1 / scale);
  //             }
  //         } else if (flexibleEl) {
  //             var content = flexibleEl.getAttribute('content');
  //             if (content) {
  //                 var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
  //                 var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
  //                 if (initialDpr) {
  //                     dpr = parseFloat(initialDpr[1]);
  //                     scale = parseFloat((1 / dpr).toFixed(2));
  //                 }
  //                 if (maximumDpr) {
  //                     dpr = parseFloat(maximumDpr[1]);
  //                     scale = parseFloat((1 / dpr).toFixed(2));
  //                 }
  //             }
  //         }

  //         if (!dpr && !scale) {
  //             var isAndroid = win.navigator.appVersion.match(/android/gi);
  //             var isIPhone = win.navigator.appVersion.match(/iphone/gi);
  //             var devicePixelRatio = win.devicePixelRatio;
  //             if (isIPhone) {
  //                 // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
  //                 if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
  //                     dpr = 3;
  //                 } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
  //                     dpr = 2;
  //                 } else {
  //                     dpr = 1;
  //                 }
  //             } else {
  //                 // 其他设备下，仍旧使用1倍的方案
  //                 dpr = 1;
  //             }
  //             scale = 1 / dpr;
  //         }

  //         docEl.setAttribute('data-dpr', dpr);
  //         if (!metaEl) {
  //             metaEl = doc.createElement('meta');
  //             metaEl.setAttribute('name', 'viewport');
  //             metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  //             if (docEl.firstElementChild) {
  //                 docEl.firstElementChild.appendChild(metaEl);
  //             } else {
  //                 var wrap = doc.createElement('div');
  //                 wrap.appendChild(metaEl);
  //                 doc.write(wrap.innerHTML);
  //             }
  //         }

  //         function refreshRem() {
  //             var width = docEl.getBoundingClientRect().width;
  //             if (width / dpr > 750) {// 官方默认使用450
  //                 width = 750 * dpr;
  //             }
  //             // 这里把750px的屏幕分为7.5份，相当于1rem=100px，1px相当于0.01rem，html的font-size是100px
  //             // 100px就相当于1rem，计算非常方便
  //             var rem = width / 7.5;// 官方默认划分10份
  //             docEl.style.fontSize = rem + 'px';
  //             flexible.rem = win.rem = rem;
  //             win.remRadio = 100;
  //         }

  //         win.addEventListener('resize', function () {
  //             clearTimeout(tid);
  //             tid = setTimeout(refreshRem, 300);
  //         }, false);
  //         win.addEventListener('pageshow', function (e) {
  //             if (e.persisted) {
  //                 clearTimeout(tid);
  //                 tid = setTimeout(refreshRem, 300);
  //             }
  //         }, false);

  //         // 以将这块写在基础样式里
  //         // if (doc.readyState === 'complete') {
  //         //     doc.body.style.fontSize = 12 * dpr + 'px';
  //         // } else {
  //         //     doc.addEventListener('DOMContentLoaded', function(e) {
  //         //         doc.body.style.fontSize = 12 * dpr + 'px';
  //         //     }, false);
  //         // }


  //         refreshRem();

  //         flexible.dpr = win.dpr = dpr;
  //         flexible.refreshRem = refreshRem;
  //         flexible.rem2px = function (d) {
  //             var val = parseFloat(d) * this.rem;
  //             if (typeof d === 'string' && d.match(/rem$/)) {
  //                 val += 'px';
  //             }
  //             return val;
  //         };
  //         flexible.px2rem = function (d) {
  //             var val = parseFloat(d) / this.rem;
  //             if (typeof d === 'string' && d.match(/px$/)) {
  //                 val += 'rem';
  //             }
  //             return val;
  //         };

  //     })(window, window['BaseLib'] || (window['BaseLib'] = {}));`,
  //   },
  // ],
};

export { userConfig }
