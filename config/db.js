import mongoose from 'mongoose'

let connectDb = ()=>{
    try {
        console.log("cjksdjs")
        mongoose.connect(process.env.DB_URL).then(()=>{
            console.log("DB_connected")
        }).catch((err)=>{
            console.log(err)
            throw err
        })
    } catch (error) {
        console.log("DB_error", error)
        
    }
}

export default connectDb