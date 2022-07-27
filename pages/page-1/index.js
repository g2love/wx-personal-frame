const componentOptions = {
  // 组件数据
  data: {
    isPageHidden: false, // 页面是否处于隐藏状态
    theme:0
  },
  // 组件方法
  methods: {
    goPage(e){
      // console.log(e)
      let url=e.currentTarget.dataset.url;
      // console.log(url)
      wx.navigateTo({url: url});
    },
    
  },
}
Component(componentOptions)
