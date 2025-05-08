import Product from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await Product.find()
    res.json(product)
}

const postProduct = async (req, res) => {
    const { name, description, price, image } = req.body
    const product = {name, description, price, image}
    await Product.create(product)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.productId)
    res.json(product)
}

export  {getProduct, postProduct, deleteProduct}