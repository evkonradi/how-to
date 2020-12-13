const mongoose = require('mongoose');
const { Schema } = mongoose;

const profitSchema = new Schema({
    isCurrent:{
        type: Boolean,
        required: true,
        default: true
    },
    currentProfit:{
        type: Number,
        required: true,
        default: 0
    },
    feeRate:{
        type: Number,
        required: true,
        default: 10
    }
});

const Profit = mongoose.model('Profit', profitSchema);
module.exports = Profit;

