import summaryRepository from '../repository/summary.repository.js'

async function createSummary(summary){
    return await summaryRepository.insertSummary(summary);
}

export default {
    createSummary
};