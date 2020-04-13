'use strict'

import v1 from './v1'
import weibo from './weibo'

export default app => {
  app.use('/v1', v1),
  app.use('/weibo', weibo)
}
