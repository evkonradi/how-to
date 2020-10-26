const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const imageSchema = new Schema({
    fileURL:{
        type: String,
        required: false,
        trim: true
    },
    imageCaption: {
        type: String,
        required: true,
        trim: true
    }
});

const videoSchema = new Schema({
    fileURL:{
        type: String,
        required: false,
        trim: true
    },
    videoCaption: {
        type: String,
        required: true,
        trim: true
    }
});

const resourceSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    resourceBody: {
        type: String
    },
    dateCreated: { 
        type: Date, 
        default: Date.now ,
        get: timestamp => moment(timestamp).format('MMM DD, YYYY')
    },
    images: [imageSchema],
    videos: [videoSchema]
  });
  
  const Resource = mongoose.model('Resource', resourceSchema);
  
  module.exports = Resource;