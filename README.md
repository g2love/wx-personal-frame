# wx-personal-frame

1、文件结构


/components——组件，头部、主题背景、底部

/css —— 公共样式public.css/动画animate.css/微信UI库weui.css

/image —— 图片 icon底部组件/theme默认主题

/pages —— 页面

  /pages/index——框架主页
  
  /pages/page-1,/pages/page-2,/pages/page-3,/pages/page-4 —— 框架页中需要的一级页面
  
  /pages/second —— 存放二级页面
  
  2、背景引用
  
    <myBg></myBg>
    <myBg />
    
   3、头部引用
   
    <myHeader data-title="标题"></myHeader>
    
   4、底部引用（如： /pages/index/index）
   
    <myTabbar pageIndex="{{tabIndex}}" theme="{{theme}}" bind:callback="tabCallback"></myTabbar> 
    
    
