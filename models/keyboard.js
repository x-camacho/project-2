const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keyboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: String,
    plateMaterial: String,
    switchType: String,
    pcbType: String,
    oilType: String, 
    },{
        timestamps: true,
    },
);

module.exports = mongoose.model("Keyboard", keyboardSchema);