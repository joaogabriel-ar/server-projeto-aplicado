import Bill from "../models/bill.model.js";

async function insertBill(bill){
    try{
        return await Bill.create(bill);
    } catch(err){
        throw err;
    }
}

async function getBill(id){
    try{
        return await Bill.findByPk(id);

    } catch(err){
        throw err;
    }
}

async function updateBill(bill){

    try{

        await Bill.update(bill, {
            where:{
                id: bill.id
            }
        })

        return await getBill(bill.id);

    } catch(err){
        throw err;
    }
}

// async function incrementPrice(product){
//     try {

//         let bill = await this.getBill(product.billId);

//         let newBill = {
//             id: product.billId,
//             establishmentName: bill.establishmentName,
//             price: product.price + bill.price
//         }

//         await updateBill(newBill);

//     } catch(err){
//         throw err;
//     }
// }

// async function decrementPrice(product){
//     try {

//         let bill = await this.getBill(product.billId);

//         let newBill = {
//             id: product.billId,
//             establishmentName: bill.establishmentName,
//             price:  bill.price - product.price
//         }

//         await updateBill(newBill);

//     } catch(err){
//         throw err;
//     }
// }

async function deleteBill(id){
    try{
        Bill.destroy({
            where: {
                id
            }
        })
    } catch(err){
        throw err;
    }
}

export default {
    insertBill,
    getBill,
    updateBill,
    // incrementPrice,
    // decrementPrice,
    deleteBill
}