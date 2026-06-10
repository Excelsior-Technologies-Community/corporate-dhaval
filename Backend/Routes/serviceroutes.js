const express= require("express")
const router = express.Router()
const servicecontroller = require("../Controllers/Servicecontroller")


router.post("/addservice" , servicecontroller.request)
router.get("/getservice" , servicecontroller.getServices)
router.patch("/updateservice/:id" , servicecontroller.updatestatus)
router.get("/service/:id" , servicecontroller.servicebyid)

module.exports = router