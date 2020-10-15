import initDB from '../../helper/initDB'
import Product from '../../models/product'
initDB()

export default (req,res) =>{
    Product.find().then(product=>{
        res.status(200).json(products)
    })
} 