import { expect } from 'chai';

import helpers from '../src/helpers'


describe('Utils Methods', () => {
  const targetString = '/api/v1/devices/1'
  const expectedString = '/api/v1/devices'
  const toOmit = '/1'

  it('Should return expected string', () => {
    expect(helpers.utils.constructString('remove', 'end', toOmit, targetString)).to.equal(expectedString);
    expect(helpers.utils.constructString('add', 'end', toOmit, targetString)).to.equal('');
  });
});