Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videosList:[]
  },

  // 点击首页导航按钮
  activeNav(e){
    // console.log(123);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that=this;
    // 利用小程序内置发送请求的方法
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },

  /**
   * 获取视频列表
   */
  getVideosList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取首页导航数据
    this.getNavList();
    // 2 调用获取轮播图数据的函数
    this.getSwiperList();
    // 3 调用获取视频列表函数
    this.getVideosList();
  },
})