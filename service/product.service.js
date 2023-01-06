import billRepository from '../repository/bill.repository.js'
import productRepository from '../repository/product.repository.js'

async function createProduct(product){
    return await productRepository.insertProduct(product);
}

async function getProduct(id){
    return await productRepository.getProduct(id);
}

async function updateProduct(product){

    return await productRepository.updateProduct(product);

}

async function deleteProduct(id){

    return await productRepository.deleteProduct(id);
}

export default {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}