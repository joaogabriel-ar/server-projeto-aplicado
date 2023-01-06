import productService from '../service/product.service.js'

async function createProduct(req,res){
    try{
        let product = req.body;

        if(!product.name|| !product.price){
            throw new Error("Nome, preço e id são obrigatórios");
        }
        
        product = await productService.createProduct(product);
    
        res.send(product);

    } catch(err){
        throw err;
    }
}

async function getProduct(req,res){
    try{
        let {id} = req.params;

        if(!id){

            throw new Error("Id necessáro");
        }

        res.send(await productService.getProduct(id));

    }catch(err){
        throw err;
    }
}

async function updateProduct(req,res){
    try{
        let product = req.body;

        if(!product.name || !product.price || !product.id){
            throw new Error ("Falta informações");
        }

        res.send(await productService.updateProduct(product));

    } catch(err){
        throw err;
    }
}

async function deleteProduct(req,res){
    
    let {id} = req.params;

    if(!id){
        throw new Error ("Falta id");
    }

    res.send(await productService.deleteProduct(id));

}


export default {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};