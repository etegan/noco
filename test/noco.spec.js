var proxyquire = require('proxyquire');
var should = require('chai').should();
var fsStub = {};

describe('noco', function(){
  beforeEach()
    var noco = proxyquire('../', {"fs": fsStub}).noPreserveCache();
  }
  it('should be an object', function(){
    noco.should.be.an('object');
  });
  it('should read files from config', function(){
    fsStub.readdir = sinon.
    noco.load();
  });
});
