import { Index } from 'index-model.js';
var index = new Index(); //实例化 首页 对象 

Page({

  data: {

    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    indicatorCo: "#ffdfdc",
    indicatoraAC: "#ff948a",
    imgUrls: [

      'http://life.southmoney.com/tuwen/UploadFiles_6871/201805/20180531142617331.jpg',

      'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/whfpf%3D425%2C260%2C50/sign=a41eb338dd33c895a62bcb3bb72e47c2/5fdf8db1cb134954a2192ccb524e9258d1094a1e.jpg',
'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/whfpf%3D425%2C260%2C50/sign=a4b3d7085dee3d6d2293d48b252b5910/0e2442a7d933c89524cd5cd4d51373f0830200ea.jpg'

    ],

  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

    })

  },

  //点击图片触发事件

  swipclick: function (e) {

    console.log(this.data.swiperCurrent);
    wx.navigateTo({
      url: "bannerDetail/bannerDetail"
    });
  },
  //商品详情
  detail: function (event) {
    // var id = event.currentTarget.dataset['id'];
    // wx.navigateTo({
    //   url: '../detail/index?id=' + id
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.id = options.id;
    this._loadData();
  },

  _loadData: function (callback) {
    //加载中
    wx.showLoading({
      title: '加载中',
    });
    var that = this; //为了避免多个this冲突
  
    /*商品分类*/
    // var is_category = wx.getStorageSync("category");
    // if (is_category) {
    //   that.setData({
    //     CategoryArr: is_category,
    //   });
    // } else {
    //   index.getCategoryData((data) => {
    //     wx.setStorageSync("category", data);
    //     that.setData({
    //       CategoryArr: data,
    //     });
    //   });
    // };

    /*获取热销商品*/
    index.getHomeData((data) => {
      wx.hideLoading(); //结束加载
      if (data != 0) {
        that.setData({
          HomePArr: data,
        });
        callback && callback();
      }
    });
  }, 
  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  }

})