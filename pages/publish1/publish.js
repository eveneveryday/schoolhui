const app = getApp()
// const utils = require('../utils/activity_util')
Page({
  data: {
    navbar: ['首页', '搜索', '我'],
    currentTab: 0,
    show1: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    show2:false,
    selectData1: ['信息','交易','约玩', '跑腿','其他'],//下拉列表的数据
    selectData2: ['招聘', '竞赛', '组团', '官宣', '其他'],//下拉列表的数据
    index1: 0,//选择的下拉列表下标，
    index2: 0,
    isPickerRender: false,
    isPickerShow: false,
    startTime: "2019-01-01 12:32:44",
    endTime: "2019-12-01 12:32:44",
    pickerConfig: {
      endDate: true,
      column: "second",
      dateLimit: true,
      initStartTime: "2019-01-01 12:32:44",
      initEndTime: "2019-12-01 12:32:44",
      limitStartTime: "2015-05-06 12:32:44",
      limitEndTime: "2055-05-06 12:32:44"
    }
  },
  selectTap1() {
    this.setData({
      show1: !this.data.show1
    });
  },
  selectTap2() {
    this.setData({
      show2: !this.data.show2
    });
  },
  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index1: Index,
      show1: !this.data.show1
    });
  },
  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index2: Index,
      show2: !this.data.show2
    });
  },
  onLoad: function (options) { },
    pickerShow: function() {
      this.setData({
        isPickerShow: true,
        isPickerRender: true,
        chartHide: true
      });
    },
  pickerHide: function () {
    this.setData({
      isPickerShow: false,
      chartHide: false
    });
  },
  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    console.log(this.data.sensorList);

    this.getData(this.data.sensorList[e.detail.value].id);
    // let startDate = util.formatTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 7));
    // let endDate = util.formatTime(new Date());
    this.setData({
      index: e.detail.value,
      sensorId: this.data.sensorList[e.detail.value].id
      // startDate,
      // endDate
    });
  },
  setPickerTime: function (val) {
    console.log(val);
    let data = val.detail;
    this.setData({
      startTime: data.startTime,
      endTime: data.endTime
    });
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
