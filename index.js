var fs = require('fs');
var path = require('path');


exports.load = function(ownPath){
  const dir = ownPath ? ownPath : './config';
  const files = fs.readdirSync(dir).filter(function(file){
    return path.extname(file) == ".js"
  });
  var config = {}
  files.forEach(function(file){
    const key = path.basename(file, ".js");
    const value = path.resolve(dir, file);
    config[key] = value
  })
  exports.config = config;
};

exports.get = function(query){
  const env = process.env.NODE_ENV;
  var keys = query.split(":");
  const key = keys.shift();
  var result = require(exports.config[key]);
  result = Object.assign({}, result['all'], result[env]);
  while(keys.length != 0){
    if((result = result[keys.shift()]) == undefined){
      throw new Error("No property found");
    }
  }
  return result;
};

