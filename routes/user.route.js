import { Router } from "express";
import { registerController, loginController,allUsersController, GetUserByUsername } from "../controllers/user.controller.js";

import checkBasicAuth from "../middlewares/basic.middleware.js";

let router = new Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get("/", checkBasicAuth, allUsersController);

router.get("/:username", checkBasicAuth, GetUserByUsername);
export default router