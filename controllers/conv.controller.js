const conversion = require('../models/conv.model')


const savedConversions = async (req, res) => {
    let saved;
    try {
        saved = await conversion.getAllSaved();
        res.status(200).json(saved); 
    } catch (error) {
        res.status(400).json({
            msg: "Error getting saved conversions"
        })
    }
}


const newConversion = async (req, res) => {
    try {
        const newConv = req.body; 
        const response = await conversion.saveOne(newConv);
        res.status(201).json({
            "items_created": response,
            data: newConv
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error saving conversion"
        })
    }
}

const deleteOneConversion = async (req, res) => {
    try {
        const deletedConv = {id: req.params.id};
        const response = await conversion.deleteOneSaved(deletedConv );
        res.status(201).json({
            "item_deleted": response,
            data: deletedConv 
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error deleting saved conversion"
        })
    }
}


module.exports={
    savedConversions,
    newConversion,
    deleteOneConversion
}