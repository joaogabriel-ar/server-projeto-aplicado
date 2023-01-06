import guestService from '../service/guest.service.js'

async function createGuest(req,res){
    try{
        let guest = req.body;

        if(!guest.guestName){
            throw new Error("Nome e billId são obrigatórios");
        }
        
        guest = await guestService.createGuest(guest);
    
        res.send(guest);

    } catch(err){
        throw err;
    }
}

async function getGuest(req,res){
    try{
        let { id } = req.params;

        if(!id){
            throw new Error("Id não informado");
        }

        res.send(await guestService.getGuest(id));
    } catch(err){
        throw err;
    }
}

async function updateGuest(req,res){
    try{
        let guest = req.body;

        if( !guest.id || !guest.guestName ){
            throw new Error("Nome e billId são obrigatórios");
        }

        res.send(await guestService.updateGuest(guest));
    } catch(err){
        throw err;
    }
}

async function deleteGuest(req,res){
    try{
        let { id } = req.params;

        if(!id){
            throw new Error("Id não informado");
        }

        res.send(await guestService.deleteGuest(id));
    } catch(err){
        throw err;
    }
}

export default {
    createGuest,
    getGuest,
    updateGuest,
    deleteGuest
};