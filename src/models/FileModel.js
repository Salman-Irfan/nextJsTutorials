const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const FileModel = mongoose.models.files || mongoose.model('files', fileSchema);

module.exports = FileModel;
