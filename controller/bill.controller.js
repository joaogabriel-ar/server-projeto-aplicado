import billService from '../service/bill.service.js'

async function createBill(req, res) {

    try {
        let bill = req.body;

        if (!bill.establishmentName) {
            throw new Error("Nome e preço são obrigatórios");
        }

        bill = await billService.createBill(bill);

        res.send(bill);
    } catch (err) {
        throw err;
    }
}

async function getBill(req, res) {
    try {
        let { id } = req.params;

        if (!id) {
            throw new Error("Id não encontrado");
        }

        res.send(await billService.getBill(id));

    }
    catch (err) {
        throw err;
    }
}

async function updateBill(req,res){
    try{

        let bill = req.body;
                
        if (!bill.establishmentName || !bill.id) {
            throw new Error("Não encontrado");
        }

        bill = await billService.updateBill(bill);

        res.send(bill);

    } catch(err){
        throw err;
    }
}

async function deleteBill(req,res){
    try {
        let {id} = req.params;

        if(!id){
            throw new Error("Nenhum id enviado");
        }

        res.send(await billService.deleteBill(id));

    } catch(err){
        throw err;
    }
}

export default {
    createBill,
    getBill,
    updateBill,
    deleteBill
}