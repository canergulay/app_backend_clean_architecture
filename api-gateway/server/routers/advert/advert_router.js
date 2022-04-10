const getCategoriesAPI = require('./api/get_categories_api')
const advertAPI = require('../advert/api/advert_api')
const {ComplaintAPI} = require("./api/complaint_api")
const express = require('express')
const router = express.Router()

////// - MIDDLEWARES - \\\\\\
const AuthenticationMiddleVare = require('../../middlewares/authentication_middleware')

router.use(AuthenticationMiddleVare)

////// - CATEGORY ROUTES - \\\\\\
var categories = '/categories'
var advertSave = '/advert/save'
var advertGet = '/advert/get'
var advertMyGet = '/advert/get/my'
var advertDelete = "/advert/delete"
var complaint = "/complain"

router.post(categories,AuthenticationMiddleVare,getCategoriesAPI.getCategories)
router.post(advertSave,advertAPI.saveAdvertAPI)
router.post(advertGet,advertAPI.getAdvertsAPI)
router.get(advertMyGet,advertAPI.getMyAdvertsAPI)
router.post(advertDelete,advertAPI.deleteMyAdvertAPI)
router.post(complaint,ComplaintAPI)



module.exports = router