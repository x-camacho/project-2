const mongoose = require('mongoose');

const keyboardSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, "You must provide a name for your board"],
        },
    size: {
        type: String,
        required: [true, "You must provide a size type for your board"],
        },
    plate_material: {
        type: String,
        required: [true, "You must provide a material type for your board"],
    },
    switch_type: {
        type: String,
        required: [true, "You must provide a switch type for your board"],
    },
    PCB_type: {
        type: String,
        required: [true, "You must provide a type of circuit for your board"],
    },
    oil_type: {
        type: String, 
        required: [true, "You must provide a type of oil for the board"],
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Keyboards", keyboardSchema);