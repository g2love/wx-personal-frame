const app=getApp();
Component({
  properties: {
    src:{//主题图片地址
      type: String,
      value: ""
    }
  },
  data: {},
  observers: {
    "src":function(val){
      if(val!=0){
        // console.log("bg发生改变");
      }
    }
  },
  lifetimes: {
    // 组件所在页面的生命周期函数
    attached: function () {
      this.setData({
        src:app.globalData.themeImgSrc
      })
    }
  },
  methods: {}
})