const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;


const transactionSchema = new Schema({
    dateCreated: { 
        type: Date, 
        default: Date.now ,
        get: timestamp => moment(timestamp).format('MMM DD, YYYY')
    },
    username: {
        type: String,
        required: true
    },
    resource_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    resource_name: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    }
  });

  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  module.exports = Transaction;
  