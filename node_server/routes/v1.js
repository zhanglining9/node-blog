'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
import Address from '../controller/v1/address'
import BaseComponent from '../prototype/baseComponent'
const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.post('/addimg/:type', baseHandle.uploadImg);
router.post('/users/:user_id/addresses', Address.addAddress);
router.delete('/users/:user_id/addresses/:address_id', Address.deleteAddress);

 
export default router