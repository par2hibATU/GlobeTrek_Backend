import express from "express"

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hello, this authentication endpoints")
})

router.get("/reg", (req, res)=>{
    res.send("Hello, this register endpoints")
})

export default router