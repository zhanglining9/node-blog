'use strict';

import express from 'express'
import Weibo from '../controller/weibo/weibo'
const router = express.Router();

router.get('/weibo', Weibo.getWeiboContent);

 
export default router