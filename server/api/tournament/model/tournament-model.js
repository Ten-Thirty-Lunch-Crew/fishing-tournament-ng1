"use strict";

const mongoose = require('mongoose');

const _tournamentSchema = {
    name: {type: String, required: true, trim: true},
    dates: [{startDateTime: {type: Date}, endDateTime: {type: Date}}],
    tourneyRules: {type: String, required: false, trim: true},
    measurement: {
      type: {type: String, required: false, trim: true},
      unit: {type: String, required: false, trim: true},
      minValue: {type: String, required: false, trim: true},
      maxValue: {type: String, required: false, trim: true}
    }
}

module.exports = mongoose.Schema(_tournamentSchema);
