const mongoose = require('mongoose');
const { CATEGORY_TABLE_NAME } = require('../config/constant');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    status: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    rating: {
      type: Number,
      require: true
    },
    bedsideManner: {
      type: String,
      require: true
    },
    waitTime: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    imageStatus: {
      type: String,
      require: true
    },
    startTime: {
      type: String,
      require: true
    },
    endTime: {
      type: String,
      require: true
    },
    timeslots: {
      type: Array,
      require: true
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    },
    gender: { type: String, require: true, enum: ["male", "female"] },
    illness: {
      type: Array,
      default: []
    },
    specialties: {
      type: Array,
      default: []
    },
    hospitalAffiliations: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(CATEGORY_TABLE_NAME, categorySchema);