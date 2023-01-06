import Product from "../models/product.model.js"

async function insertProduct(product){
    try{
        return await Product.create(product);
    } catch(err){
        throw err;
    }
}

async function getProduct(id){
    try{
        return await Product.findByPk(id);
    } catch(err){
        throw err;
    }
}

async function updateProduct(product){
   
    try{

        let productToBeUpdated = await this.getProduct(product.id);

        if(!productToBeUpdated){
            throw new Error("Produto não encontrado");
        }

        await Product.update(product, {
            where:{
                id: product.id
            }
        })

        return await getProduct(product.id);

    } catch(err){
        throw err;
    }
}

async function deleteProduct(id){
    try{
        Product.destroy({
            where:{
                id
            }
        })
    } catch(err){
        throw err;
    }
}

export default {
    insertProduct,
    getProduct,
    deleteProduct,
    updateProduct
}