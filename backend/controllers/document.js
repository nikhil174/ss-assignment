const Document = require("../models/document");

const uploadDocument = async (req, res) => {
    try {
        const { doc } = req.body;
        if (req.user.role !== 'roleA')
            throw new Error('Not permitted to upload');

  
        const document = await Document.create({
            approved : false,
            url : doc,
            uploaded_by: req.user.email,
        })
        res.status(201).json({
            msg: 'Uploaded',
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}

const approveDocument = () => {

}

module.exports = {
    uploadDocument,
    approveDocument
}