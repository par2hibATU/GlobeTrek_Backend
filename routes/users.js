import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utills/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("Hello user, you are logged in!!")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Hello user, you are logged in!! And you are allowed to delete your acc..")
})

router.get("/checkAdmin/:id", verifyUser, (req, res, next)=>{
    res.send("Hello admin, you are logged in!! And you are allowed to delete your acc..")
})
//update
router.put("/:id", updateUser)

//delete
router.delete("/:id", deleteUser)

//get
router.get("/:id", getUser)


//get all
router.get("/", getAllUsers)

export default router