//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    defaults: {
      cityName: '南京',
    },
    // 城市选择弹框
    pickerInfo: {
      'state': false, 'title': '选择城市', 'value': [0, 0],
      'submits': ['取消', '确定'],
    },

    // 省列表
    provinceList: [
      {
        provinceID: 1,
        provinceName: '北京市'
      },

      {
        provinceID: 10,
        provinceName: '江苏省'
      },

      {
        provinceID: 12,
        provinceName: '安徽省'
      },
    ],

    //市列表
    cityList: [
      {
        cityID: 1,
        cityName: '北京市'
      },
      {
        cityID: 63,
        cityName: '南京市'
      },

      {
        cityID: 64,
        cityName: '无锡市'
      },

      {
        cityID: 78,
        cityName: '合肥市'
      }
    ]


  },

  onLoad: function () {

  },

  //点击变更地点信息
  updateLocationInfo: function (event) {
    var that = this
    var title = event.currentTarget.dataset.title
    var pickerInfo = that.data.pickerInfo


    // 判断是否是button
    if (title == 'state') {
      pickerInfo.state = true
      pickerInfo.value = [0, 0]
      pickerInfo.citys = []
      that.setData({
        pickerInfo: pickerInfo
      });

      //此处应该请求网络数据，为了方便我写了一些数据进行测试，获取省列表
      var provinceList = that.data.provinceList;
      pickerInfo.provinces = provinceList;

      that.setData({
        pickerInfo: pickerInfo
      });

    } else if (title == 'cancel') {
      pickerInfo.state = false
      that.setData({
        pickerInfo: pickerInfo
      })
    } else {
      // 设置选择结果
      pickerInfo.state = false;

      var defaults = that.data.defaults

      var cityNum = pickerInfo.value[1]
      var cityInfo = pickerInfo.citys[cityNum]
      defaults.cityName = cityInfo.cityName

      that.setData({
        pickerInfo: pickerInfo,
        defaults: defaults,
      });

      // that.getCountyList();此处可以继续模仿选择区域

    }

  },

  //选择城市，通过bindchange和省ID获取城市列表
  updatePicker: function (event) {
    var that = this;
    var pickerInfo = that.data.pickerInfo;
    var num = event.detail.value[0];
    var cityNum = event.detail.value[1];

    // var requestInfo = {};
    // 此处根据省ID通过网络获取城市列表，这里我用本地数据代替
    // requestInfo.provinceID = pickerInfo.provinces[num].provinceID;
    var cityList = that.data.cityList;
    pickerInfo.citys = cityList;
    pickerInfo.value = [num, cityNum];

    that.setData({
      pickerInfo: pickerInfo
    });

  },
})
