import fs from 'fs'
import { readFileUsers, writeFileUsers } from "../utils/users.file.js"


let registerController = (req,res,next)=>{
    try {
        let {username, password, confirmPassword, email} = req.body
        let users = readFileUsers()
        let id = users.length + 1
        if (password !==confirmPassword) throw new Error("passwords not matched")

        let user = {
            id,
            username: username,
            password: password,
            email: email
        }
        users.push(user)
        writeFileUsers(users)

        delete user.password
        res.status(200).json({
            status: "succes",
            message: "register is working",
            data: user
        })
    } catch (error) {
        throw error
        
    }
}


let loginController = (req,res,next)=>{
    try {
        let {username,password } = req.body
        let users = readFileUsers()
        if(!(username && password)) throw new Error("username va password required")
        let exist = users.find(u => u.username === username && u.password === password)
        if(!exist) throw new Error("User topilmadi")
        delete exist.password
        res.status(201).json({
            status: "success",
            message: "user topildi",
            data: exist
    })
        
    } catch (error) {
        throw error
    }
}


let allUsersController = (req, res, next) => {
  try {
    let users = readFileUsers();
    return res.status(200).json({
      status: "Success",
      message: "Barcha userlar",
      data: users,
    });
  } catch (error) {
    throw error;
  }
};

let GetUserByUsername = (req, res, next) => {
  let user = readFileUsers().find((val) => val.username == req.params.username);
  if (!user) throw new Error("Bunaqa user mavjud emas!!");
  return res.status(200).json({
    status: "Success",
    message: "User Found",
    data: user,
  });
};

export{registerController, loginController,allUsersController, GetUserByUsername}