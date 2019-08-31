//index.js
//获取应用实例
const app = getApp()
// var API = require('../utils/api.js')
Page({
  data: {
    userInfo:{},
    show1: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    show2: false,
    index1: 0,//选择的下拉列表下标，
    index2: 0,
    position: ["西安电子科技大学", "西北工业大学", "其他"],
    hotrank: ['点击高低（前十名）', '点击高低（前百名）', '点击高低（你觉得）'],
    movies: [
      { url: 'slideimages/1.jpg' },
      { url: 'slideimages/2.jpg' },
      { url: 'slideimages/3.jpg' },
      { url: 'slideimages/4.jpg' },
    ],
    msgList: [
      { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "交了20多年的国内漫游费将取消 你能省多少话费？" },
      { url: "url", title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱" }
      ],
    // imgUrls:[
    //   'slideimages/1.jpg', 
    //   'slideimages/2.jpg',
    //   'slideimages/3.jpg',
    //   'slideimages/4.jpg'
    // ],
    news:[
      {id:'01',title:"信息",protitle:"招聘",starttime:"19.06.01 10:00",endtime:"19.06.05 23:59", resttime:"23",introduction:"这是信息招聘的简介，大概40字左右，发布任务简介设置字数上限，哈哈哈啦看似沪房地束缚后方可金黄色的上课酒店方舒卡股份速度过分康师傅给"},
      { id: '02', title: "约玩", protitle: "我组局", starttime: "19.06.01 10:00", endtime: "19.06.05 23:59", resttime: "23", introduction: "这是信息招聘的简介，大概40字左右，发布任务简介设置字数上限，哈哈哈啦啦啦流口水交话费了回复了森林防火就两极分化个" },
      { id: '03', title: "信息", protitle: "活动", starttime: "19.06.01 10:00", endtime: "19.06.05 23:59", resttime: "23", introduction: "这是信息招聘的简介，大概40字左右，发布任务简介设置字数上限，哈哈哈啦啦啦分就开始开始烦死了快递费款是大法官" },
      { id: '04', title: "信息", protitle: "竞赛", starttime: "19.06.01 10:00", endtime: "19.06.05 23:59", resttime: "23", introduction: "这是信息招聘的简介，大概40字左右，发布任务简介设置字数上限，哈哈哈啦啦啦熟练的客户方了受苦的回复是路口" }
    ],
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
  showmore() {
    
    // console.info("userInfo");
  },
  //   var that = this
  //   // 使用 Mock
  //   API.ajax('', function (res) {
  //     //这里既可以获取模拟的res
  //     console.log(res)
  //     that.setData({
  //       list: res.data
  //     })
  //   });

  //   console.log(this.data.list)
  // }
})

