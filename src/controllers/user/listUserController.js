import { list } from "../../models/userModel.js"

export default async function listUserController(req, res, next) {
    try{
        const result = await list()
        return res.json(result)
    } catch(error){
        next(error)
    }
}