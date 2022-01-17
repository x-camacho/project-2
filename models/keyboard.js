const mongoose = require('mongoose');

const keyboardSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        },
    size: {
        type: String,
        required: [false, "You must provide a size type for your board"],
        },
    plateMaterial: {
        type: String,
        required: [false, "You must provide a material type for your board"],
    },
    switchType: {
        type: String,
        required: [false, "You must provide a switch type for your board"],
    },
    pcbType: {
        type: String,
        required: [false, "You must provide a type of circuit for your board"],
    },
    oilType: {
        type: String, 
        required: [false, "You must provide a type of oil for the board"],
    },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("keyboards", keyboardSchema);