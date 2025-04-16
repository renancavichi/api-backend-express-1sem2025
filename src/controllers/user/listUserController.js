import { list } from "../../models/userModel.js"

export default async function listUserController(req, res) {
    const result = await list()

    return res.json(result)
}