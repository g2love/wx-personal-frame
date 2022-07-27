// app.js
App({
  onLaunch() {
    let that=this;
    wx.getStorage({
      key: 'theme',
      success: (result) => {
        if(result.data){
          that.globalData.theme=result.data.index;
          that.globalData.themeImgSrc=result.data.src;
        }
      }
    });
    wx.getSystemInfo({
      success: res => {
        let menu = wx.getMenuButtonBoundingClientRect()
        let systemBar = res.statusBarHeight//状态栏高度
        // console.log(systemBar)
        // console.log(menu)
        // let headerHeight=systemBar+menu.top+menu.height;
        let headerHeight=menu.top+menu.height+4;//和小程序右边功能菜单持平，下边界多4px
        let windowHeight=res.windowHeight;
        let height2=windowHeight-80-headerHeight-10;
        let height1=windowHeight-headerHeight;
        that.globalData.systemBar=systemBar;
        that.globalData.headerHeight=headerHeight;
        that.globalData.contentHeight1=height1;
        that.globalData.contentHeight2=height2;
      }
    })
  },
  globalData: {
    theme:0,//主题索引
    themeImgSrc:"",//背景图
    systemBar:0,
    headerHeight:0,//顶部高度
    footerHeight:80,//底部高度
    contentHeight1:0,//除去顶部内容剩余的高度
    contentHeight2:0,//除去顶部和底部剩余的高度
    themeNum:7,//默认准备的主题数
  },
  getTheme:async ()=>{
    let that =  getApp();
    return  new Promise((res,rej)=>{
      wx.getStorage({
        key: 'theme',
        success: (result) => {
          that.globalData.theme=result.data.index;
          that.globalData.themeImgSrc=result.data.src;
          res( result.data);
        },
        fail:()=>{
          that.globalData.theme=0;
          that.globalData.themeImgSrc="";
          res({index:0,src:""});//返回一个默认值
        }
      });
    })
  }
})
