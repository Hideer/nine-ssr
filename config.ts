import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
  whiteList: [/(@wanwu\/base-style|@wanwu\/base-font-wwdz)/],
  customeHeadScript: [
    {
      content: `var w = document.documentElement.clientWidth / 7.5;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'`,
    },
  ],
};

export { userConfig }
