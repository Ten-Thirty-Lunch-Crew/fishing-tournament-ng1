"use strict";

const mongoose = require('mongoose');

const _tournamentSchema = {
    name: {type: String, required: true, trim: true},
    dates: [{startDateTime: {type: Date}, endDateTime: {type: Date}}],
    tourneyRules: {type: String, required: false, trim: true},
    measurement: {"type": String, "unit": String}
}

module.exports = mongoose.Schema(_tournamentSchema);
