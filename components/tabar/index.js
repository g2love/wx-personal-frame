const app=getApp();
const componentOptions = {
  // 组件选项
  options: {
    pageIndex:0
  },
  behaviors: [],
  properties: {
    theme:{
      type: Number,
      value: 0
    },
    pageIndex:{
      type:Number,
      value:0
    }
  },
  // 组件数据
  data: {
    height:app.globalData.footerHeight,
    menu:[
      {text:"页面1",activeImg:"/image/icon/i1-2.png",defaultImg:"/image/icon/i1-1.png"},
      {text:"页面2",activeImg:"/image/icon/i1-2.png",defaultImg:"/image/icon/i1-1.png"},
      {text:"页面3",activeImg:"/image/icon/i1-2.png",defaultImg:"/image/icon/i1-1.png"},
      {text:"页面4",activeImg:"/image/icon/i1-2.png",defaultImg:"/image/icon/i1-1.png"},
    ],
    themeNum:app.globalData.themeNum,//获取默认主题总数
  },
  // 数据监听器
  observers: {
    "theme":function(val){
      if(val!=0){
        // console.log("tabbar主题发生改变");
      }
    }
  },
  // 组件方法
  methods: {
    changeTabbar(e){
      let _menu=this.data.menu;
      let _thisPageIndex=e.currentTarget.dataset.index;
      this.setData({
        pageIndex:_thisPageIndex
      })
      this.triggerEvent("callback",{index:_thisPageIndex})//回调给父级组件
    }
  },
  // 组件生命周期
  lifetimes: {
    attached() {
      let defaultActiveItem=this.dataset.pageIndex;
      if(defaultActiveItem!=undefined){
        this.setData({
          pageIndex:defaultActiveItem
        })
        this.triggerEvent("callback",{index:defaultActiveItem,page:this.data.menu[defaultActiveItem]["page"]})//回调给父级组件
      }
    },
  },
  // 页面生命周期
  pageLifetimes: {
    // 页面被展示
    show() {},
  },
}

Component(componentOptions)
