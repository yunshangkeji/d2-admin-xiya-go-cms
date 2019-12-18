export default context => ({
  namespaced: true,
  actions: {
    /**
     * @description 从持久化数据加载一系列的设置
     * @param {Object} vuex context
     */
    async load ({ dispatch }) {
      // 加载用户名
      await dispatch('d2admin/user/load', null, { root: true })
      // 加载主题
      await dispatch('d2admin/theme/load', null, { root: true })
      // 加载页面过渡效果设置
      await dispatch('d2admin/transition/load', null, { root: true })
      // 加载上次退出时的多页列表
      await dispatch('d2admin/page/openedLoad', null, { root: true })
      // 加载侧边栏折叠状态
      await dispatch('d2admin/menu/asideCollapseLoad', null, { root: true })
      // 加载全局尺寸
      await dispatch('d2admin/size/load', null, { root: true })
      // 加载颜色设置
      await dispatch('d2admin/color/load', null, { root: true })
    }
  }
})
