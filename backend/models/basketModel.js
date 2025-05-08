import mongoose from 'mongoose'

const basketSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    count: {type: Number, required: true}
}, {timestamps: true})

const Basket = mongoose.model('Basket', basketSchema)
export default Basket
