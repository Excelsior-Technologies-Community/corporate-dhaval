const express = require("express")
const router = express.Router()
const prdcontroller = require("../Controllers/productcontroller")

router.post("/additem" , prdcontroller.addproduct)
router.get("/getitem/:id" ,prdcontroller.getproduct )
router.put("/updateprd/:id" , prdcontroller.updateitem)
router.patch("/patchprd/:id" , prdcontroller.patchitem)
router.delete("/deleteprd/:id" , prdcontroller.deleteitem)

module.exports = router