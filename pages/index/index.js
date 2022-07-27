// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    tabIndex:0,//tabbar索引
    Height:app.globalData.contentHeight2,//中间区域高度
    themeImgSrc:"",//背景图
    theme:0,//主题索引
    themeNum:app.globalData.themeNum
  },
  tabCallback(res){//切换tabbar
    let _index=res.detail.index;
    this.setData({
      tabIndex:_index
    })
  },
  onLoad(options) {
    // console.log(options)
    if(options.tab){
      this.setData({
        tabIndex:options.tab,//进入页面时设置默认tabbar所在的索引
      })
    }
  },
  onShow(){
    app.getTheme().then(res=>{
      this.setData({
        themeImgSrc:res.src,//设置背景图
        theme:res.index,//设置主题索引
      })
    })
  },
  headerCallbak(){//主题页返回回调
    let _index=app.globalData.theme;
    this.setData({
      theme:_index,
      themeImgSrc:app.globalData.themeImgSrc
    })
  }
})
