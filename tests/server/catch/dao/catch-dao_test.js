"use strict";

const mongoose = require('mongoose');
const catchDAO = require(process.cwd() + '/server/api/catch/dao/catch-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('catchDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    catchDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
