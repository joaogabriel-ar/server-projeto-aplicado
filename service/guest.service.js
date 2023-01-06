import billRepository from '../repository/bill.repository.js'
import guestRepository from '../repository/guest.repository.js'

async function createGuest(guest){
    return await guestRepository.insertGuest(guest);
}

async function getGuest(id){

    return await guestRepository.getGuest(id);

}

async function updateGuest(guest){
    return await guestRepository.updateGuest(guest);
}

async function deleteGuest(id){
    return await guestRepository.deleteGuest(id);
}

export default {
    createGuest,
    getGuest,
    updateGuest,
    deleteGuest
}