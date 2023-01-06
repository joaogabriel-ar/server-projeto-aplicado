import Guest from "../models/guest.model.js"

async function insertGuest(guest){
    try{
        return await Guest.create(guest);
    } catch(err){
        throw err;
    }
}

async function getGuest(id){
    try{
       
        return Guest.findByPk(id);
        
    } catch(err){
        throw err;
    }
}

async function updateGuest(guest){
    try{
        await Guest.update(guest, {
            where:{
                id: guest.id
            }
        })

        return await getGuest(guest.id);

    } catch(err){
        throw err;
    }
}

async function deleteGuest(id){
    try{
        await Guest.destroy({
            where:{
                id
            }
        })
    } catch(err){
        throw err;
    }
}

export default {
    insertGuest,
    getGuest,
    updateGuest,
    deleteGuest
}