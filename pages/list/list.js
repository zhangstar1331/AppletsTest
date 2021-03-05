// pages/contain/list.js
var ReportDataSync = [
  {
    reportType: "视图容器",
    chilItem: [
      { ID: 1, Name: "view", ReportUrl: "view/view/view", Type: 1 },
      { ID: 2, Name: "scroll-view", ReportUrl: "view/scroll-view/scroll-view", Type: 1 },
      { ID: 3, Name: "swiper", ReportUrl: "view/swiper/swiper", Type: 1 },
      { ID: 4, Name: "movable-view", ReportUrl: "view/movable-view/movable-view", Type: 1 },
      { ID: 5, Name: "cover-view", ReportUrl: "view/cover-view/cover-view", Type: 1 }]
  },
  {
    reportType: "基础内容",
    chilItem: [
      { ID: 1, Name: "icon", ReportUrl: "content/icon/icon", Type: 2 },
      { ID: 2, Name: "text", ReportUrl: "content/text/text", Type: 2 },
      { ID: 3, Name: "rich-text", ReportUrl: "content/rich-text/rich-text", Type: 2 },
      { ID: 4, Name: "progress", ReportUrl: "content/progress/progress", Type: 2 }]
  },
  {
    reportType: "表单组件",
    chilItem: [
      { ID: 1, Name: "button", ReportUrl: "form/button/button", Type: 3 },
      { ID: 2, Name: "checkbox", ReportUrl: "form/checkbox/checkbox", Type: 3 },
      { ID: 3, Name: "form", ReportUrl: "form/form/form", Type: 3 },
      { ID: 4, Name: "input", ReportUrl: "form/input/input", Type: 3 },
      { ID: 5, Name: "label", ReportUrl: "form/label/label", Type: 3 },
      { ID: 6, Name: "picker", ReportUrl: "form/picker/picker", Type: 3 },
      { ID: 7, Name: "picker-view", ReportUrl: "form/picker-view/picker-view", Type: 3 },
      { ID: 8, Name: "radio", ReportUrl: "form/radio/radio", Type: 3 },
      { ID: 9, Name: "slider", ReportUrl: "form/slider/slider", Type: 3 },
      { ID: 10, Name: "switch", ReportUrl: "form/switch/switch", Type: 3 },
      { ID: 11, Name: "textarea", ReportUrl: "form/textarea/textarea", Type: 3 }]
  },
  {
    reportType: "导航",
    chilItem: [
      { ID: 1, Name: "navigator", ReportUrl: "nav/sample/sample", Type: 4 }
    ]
  },
  {
    reportType: "媒体组件",
    chilItem: [
      { ID: 1, Name: "audio", ReportUrl: "media/audio/audio", Type: 5 },
      { ID: 2, Name: "image", ReportUrl: "media/image/image", Type: 5 },
      { ID: 3, Name: "video", ReportUrl: "media/video/video", Type: 5 },
      { ID: 4, Name: "camera", ReportUrl: "media/camera/camera", Type: 5 },
      { ID: 5, Name: "live-player", ReportUrl: "media/live-player/live-player", Type: 5 },
      { ID: 6, Name: "live-pausher", ReportUrl: "media/live-pausher/live-pausher", Type: 5 }
    ]
  },
  {
    reportType: "地图",
    chilItem: [
      { ID: 1, Name: "map", ReportUrl: "map/map/map", Type: 5 }
    ]
  },
  {
    reportType: "画布",
    chilItem: [
      { ID: 1, Name: "canvas", ReportUrl: "cav/canvas/canvas", Type: 6 }
    ]
  },
  {
    reportType: "开放能力",
    chilItem: [
      { ID: 1, Name: "open-data", ReportUrl: "open/open-data/open-data", Type: 7 },
      { ID: 2, Name: "web-view", ReportUrl: "open/web-view/web-view", Type: 7 },
      { ID: 3, Name: "ad", ReportUrl: "open/ad/ad", Type: 7 }
    ]
  },
]

//定义字段 
var initSubMenuDisplay = []
var initSubMenuHighLight = []

/// 初始化DropDownMenu 
loadDropDownMenu()

/// <summary> 
/// 初始化DropDownMenu 
/// 1.一级目录 initSubMenuDisplay ：['hidden'] 
/// 2.二级目录 initSubMenuHighLight ：[['',''],['','','','']]] 
/// </summary> 
function loadDropDownMenu() {
  for (var i = 0; i < ReportDataSync.length; i++) {
    //一级目录 
    initSubMenuDisplay.push('hidden')
    //二级目录 
    var report = []
    for (var j = 0; j < ReportDataSync[i].chilItem.length; j++) {
      report.push([''])
    }
    initSubMenuHighLight.push(report)
  }
} 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  //一级菜单点击 
  tapMainMenu: function (e) {
    //获取当前一级菜单标识 
    var index = parseInt(e.currentTarget.dataset.index);
    //改变显示状态 
    for (var i = 0; i < initSubMenuDisplay.length; i++) {
      if (i == index) {
        if (this.data.subMenuDisplay[index] == "show") {
          initSubMenuDisplay[index] = 'hidden'
        } else {
          initSubMenuDisplay[index] = 'show'
        }
      } else {
        initSubMenuDisplay[i] = 'hidden'
      }
    }
    this.setData({
      subMenuDisplay: initSubMenuDisplay
    })
  },

  //二级菜单点击 
  tapSubMenu: function (e) {
    //隐藏所有一级菜单 
    //this.setData({ 
    //subMenuDisplay: initSubMenuDisplay() 
    //}); 
    // 当前二级菜单的标识 
    var indexArray = e.currentTarget.dataset.index.split('-');
    // 删除所在二级菜单样式 
    for (var i = 0; i < initSubMenuHighLight.length; i++) {
      if (indexArray[0] == i) {
        for (var j = 0; j < initSubMenuHighLight[i].length; j++) {
          initSubMenuHighLight[i][j] = '';
        }
      }
    }
    //给当前二级菜单添加样式 
    initSubMenuHighLight[indexArray[0]][indexArray[1]] = 'highlight';
    //刷新样式 
    this.setData({
      subMenuHighLight: initSubMenuHighLight
    });
  }, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      reportData: ReportDataSync,//菜单数据 
      subMenuDisplay: initSubMenuDisplay, //一级 
      subMenuHighLight: initSubMenuHighLight //二级 
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})