const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    uploaded_by: {
        type: String,
        required: true
    },
});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;