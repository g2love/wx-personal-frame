const app=getApp();
Page({
  data: {
    contentHeight:app.globalData.contentHeight1,//内容区高度
    bgArr:[//初始化主题
      "",
      "/image/theme/theme-1.jpeg",
      "/image/theme/theme-2.jpeg",
      "/image/theme/theme-3.jpeg",
      "/image/theme/theme-4.jpeg",
      "/image/theme/theme-5.jpeg",
    ],
    addBgImgData:[],//自己添加的图片暂存区
    addBgImg:"",//自己添加的图片
    themeImgSrc:"",//背景图
    theme:0,//主题索引
    firstShow:false
  },
  headerCallback(){//设置主题页点击顶部返回时刷新上一页的顶部header
    let _page=getCurrentPages();
    let _i=_page.length-2;
    _page[_i]&&_page[_i].headerCallbak&&_page[_i].headerCallbak();
  },
  onShow(){
    let that=this;
    if(that.data.firstShow==false){
      app.getTheme().then(res=>{
        this.setData({
          themeImgSrc:res.src,//设置背景图
          theme:res.index
        })
      })
      wx.getStorage({
        key: 'bg-image-data',//所有主题存储区
        success (res) {
          let _imgArr=res.data;
          let _bgArr=that.data.bgArr;
          // console.log(_imgArr)
          that.setData({
            bgArr:[..._bgArr,..._imgArr],
            firstShow:true,
            addBgImgData:_imgArr
          })
        }
      })
    }
  },
  setTheme(e){
    let _src=e.currentTarget.dataset.src;
    let _index=e.currentTarget.dataset.index;
    app.globalData.themeImgSrc=_src;
    app.globalData.theme=_index;
    this.setData({
      themeImgSrc:_src,
      theme:_index
    })
    wx.setStorage({
      key:"theme",
      data:{index:_index,src:_src}
    })
  },
  changeTheme(){//选择自己的主题照片
    wx.chooseImage({
      count:1,
      success: chooseResult => {
        let _bg=chooseResult.tempFilePaths[0]
        this.setData({
          addBgImg:_bg
        })
      },
    })
  },
  saveTheme(e){
    let _src=e.currentTarget.dataset.src;
    let _index=e.currentTarget.dataset.index;
    let _bgArr=this.data.bgArr;
    let _addBgImgData=this.data.addBgImgData;
    _addBgImgData=[..._addBgImgData,_src];
    // console.log(_src,_index)
    // console.log(_addBgImgData)
    if(_src!=""){
      this.setData({
        themeImgSrc:_src,
        theme:_index,
        bgArr:[...this.data.bgArr,_src],
        addBgImg:"",
        addBgImgData:_addBgImgData
      })
      wx.setStorage({
        key:"bg-image-data",
        data:_addBgImgData
      })
      wx.setStorage({
        key:"theme",
        data:{index:_index,src:_src}
      })
      app.globalData.themeImgSrc=_src;
      app.globalData.theme=_index;
    }else{
      wx.showModal({
        title: '提示',
        content: '未选择图片，不能设置',
        showCancel: false,
        addBgImg:""
      });
    }
  },
  delData(){
    wx.clearStorage();
  }
})