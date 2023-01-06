import Summary from "../models/summary.model.js"

async function insertSummary(summary){
    try{
        return await Summary.create(summary);
    } catch(err){
        throw err;
    }
}

export default {
    insertSummary
}