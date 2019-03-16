// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  request.post({
    url: 'http://weixin.hfbus.cn/HFRTB/likeQuery',
    form: { site: event.site }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      resolve(JSON.parse(body).data);
    }
  })
}