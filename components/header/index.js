const app=getApp();
Component({
  properties: {
    theme:{//主题索引
      type: Number,
      value: 0
    }
  },
  data: {
    headerHeight:0,//顶部高度
    systemBar:0,
    title:"",//标题
    left:false,//左边图标是否显示
    themeNum:0,
  },
  ready:function(){
    let pages=getCurrentPages();
    if(pages.length>1){//路由栈只有一页时不显示返回
      this.setData({
        left:true
      })
    }
  },
  observers: {
    "index":function(val){
      if(val!=0){
        // console.log("header主题发生改变");
      }
    }
  },
  lifetimes: {
    // 组件所在页面的生命周期函数
    attached: function () {
      let that=this;
      let _title=this.dataset.title?that.dataset.title:"";
      this.setData({
        theme:app.globalData.theme,//获取主题索引
        title:_title,//标题
        headerHeight:app.globalData.headerHeight,//获取顶部高度
        systemBar:app.globalData.systemBar,//获取systemBar高度
        themeNum:app.globalData.themeNum,//获取默认主题总数
      })
    },
  },
  methods: {
    goBack:function(e){
      this.triggerEvent("callback",{title:"callback",type:true,value:"backPgeOk"})//回调给父级组件
      if(getCurrentPages().length >1){
        wx.navigateBack({
          delta: 0,
        })
      }else{
        wx.showToast({
          title: '已经是最后一页',
          icon: 'success',
          duration: 2000
        })
      }
    },
    backImgError(e){
      let _num=app.globalData.themeNum-1;
      this.setData({
        themeNum:_num
      })
    }
  }


})