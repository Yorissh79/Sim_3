import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const product = await basketModel.find()
    res.json(product)
}

const postBasket = async (req, res) => {
    const { name, description, price, image } = req.body
    const product = {name, description, price, image}
    await basketModel.create(product)
    res.json(product)
}

const deleteBasket = async (req, res) => {
    const product = await basketModel.findByIdAndDelete(req.params.basketid)
    res.json(product)
}

export  {getBasket, postBasket, deleteBasket}