"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:65628177162971409215 LICENSE.md

const {expect} = require('chai')
const PsychologyDeva = require('./index.js');

describe(PsychologyDeva.me.name, () => {
  beforeEach(() => {
    return PsychologyDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(PsychologyDeva).to.be.an('object');
    expect(PsychologyDeva).to.have.property('agent');
    expect(PsychologyDeva).to.have.property('vars');
    expect(PsychologyDeva).to.have.property('listeners');
    expect(PsychologyDeva).to.have.property('methods');
    expect(PsychologyDeva).to.have.property('modules');
  });
})
