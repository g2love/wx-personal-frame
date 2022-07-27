const app=getApp();
const pageOptions = {
  // 页面数据
  data: {
    themeImgSrc:"",
    height:app.globalData.contentHeight1
  },
  // 页面载入时
  onLoad(e) {
    console.log(e)
  },
  // 页面显示时
  onShow() {
    app.getTheme().then(res=>{
      this.setData({
        themeImgSrc:res.src,//主题背景图
        theme:res.index,//主题索引
      })
    })

    

  
  },
  
}

Page(pageOptions)
