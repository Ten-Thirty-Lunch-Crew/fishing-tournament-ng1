"use strict";

const mongoose = require('mongoose');

const _catchSchema = {
  user_id: Schema.Types.ObjectId,
  tournament_id: Schema.Types.ObjectId,
  measurement: [Number],
  catchDateTime: {type: Date, default: Date.now},
  imageUrls: [{Url: {type: String, required: false, trim: true}}],
  catchLocation: {
    x: [Number],
    y: [Number]
  }
}

module.exports = mongoose.Schema(_catchSchema);
