import billRepository from '../repository/bill.repository.js'

async function createBill(bill){

    return await billRepository.insertBill(bill);
}

async function getBill(id){
    return await billRepository.getBill(id);
}

async function updateBill(bill){
    return await billRepository.updateBill(bill);
}

async function deleteBill(id){
    return await billRepository.deleteBill(id);
}

export default {
    createBill,
    getBill,
    updateBill,
    deleteBill
}