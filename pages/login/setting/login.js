const app = getApp()

// Page({
//   data: {
//     navbar: ['首页', '搜索', '我'],
//     currentTab: 0
//   },
//   navbarTap: function (e) {
//     this.setData({
//       currentTab: e.currentTarget.dataset.idx
//     })
//   }
// })

Page({
  data:{
    userInfo:{},
    // src:'img/touxiang.jpg'
    // src: "userInfo.avatarUrl"
  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log('onLoad')
  },
})
