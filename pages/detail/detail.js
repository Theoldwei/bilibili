// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo:null,
    // 推荐视频
    othersList:[],
    // 评论数据
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  /**
   * 根据视频的id获取视频详情
   */
  getCurrentVideo(videoId){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+videoId,
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频
   */
  getOthersList(videoId){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id="+videoId,
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            othersList:res.data.data.othersList
          })
        }
      }
    })
  },

  /**
   * 获取评论数据
   */
  getCommentList(videoId){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
    })
  },
})