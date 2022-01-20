const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    content: String,
},{
    timestamps: true,
});

const keyboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    keyboarder: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Keyboarder',
    },
    size: String,
    plateMaterial: String,
    switchType: String,
    pcbType: String,
    oilType: String,
    notes: [noteSchema],
    },{
        timestamps: true,
    },
);

module.exports = mongoose.model("Keyboard", keyboardSchema);