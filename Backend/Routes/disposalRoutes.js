const express = require("express")
const router = express.Router()
const discontroller = require("../Controllers/disposalcontroller")
const upload = require("../Middleware/Multer")

router.post("/request" , upload.fields([
    {name : "item_photo" , maxCount:1}
]), discontroller.createrq)
router.get("/getlist" , discontroller.getlisted)
router.patch("/patchlist/:id" , discontroller.claimrq)
router.patch("/patchuser/:id" , discontroller.find)
module.exports =router