
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

      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',

      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'

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
      url: "home/bannerDeatail/bannerDeatail"
    });

  

  }
})