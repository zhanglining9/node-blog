'use strict'

import weiboApi from 'nodeweibo'
import setting from '../../weiboConfig/index'

class Weibo {
  constructor() {}

  async getWeiboContent(req, res, next) {
    try {
      weiboApi.init(setting)
      // weiboApi.authorize()
      //   let jsonParas = {
      //     code: '04c434a972f298961173ac14bed2c13f',
      //     grant_type: 'authorization_code',
      //   }
      //   weiboApi.OAuth2.access_token(jsonParas, function (data) {
      //     res.send(data)
      //     console.log(data)
      //   })
      weiboApi.Statuses.public_timeline(
        {
          source: weiboApi.appKey.appKey,
          access_token: '2.00sszDPGOFYwNDb730dd47123i4vDD',
        },
        (result) => {
          let arr = []
          for (const ele of result.statuses) {
            // console.log({ user: ele.user.name, content: ele.text })
            arr.push({ user: ele.user.name, content: ele.text })
          }
          res.send(arr)
        }
      )
    } catch (err) {
      console.log('获取管理员数量失败', err)
      res.send({
        status: 0,
        type: 'ERROR_GET_ADMIN_COUNT',
        message: '获取管理员数量失败',
      })
    }
  }
}

export default new Weibo()
