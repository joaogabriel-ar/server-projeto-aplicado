import summaryService from '../service/summary.service.js'

async function createSummary(req, res) {
    try {
        let summary = req.body;

        if (!summary.bill_id || !summary.product_id || !summary.guest_id) {
            throw new Error("Faltam dados.");
        }

        // summary = await summaryService.createSummary(summary);

        summary = await summaryService.createSummary(summary);

        res.send(summary);
    } catch (err) {
        throw err;
    }
}

export default {
    createSummary
};