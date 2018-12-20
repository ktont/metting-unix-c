var child_process = require('child_process');

function splitPadding(str) {
  var ret = str.match(/^\s+/);
  if(!ret) return '';
  return ret[0];
}

function image(path) {
  var padding = splitPadding(path);
  try {
    var img = child_process.execSync('imgcat ' + path);
    if(img[img.length-1] === new Buffer('\n')[0])
      img = img.slice(0, img.length-1);
    process.stdout.write(padding);
    process.stdout.write(img);
  } catch(e) {
  }
}

module.exports = image;

//image('/Users/zhi.liang/archive/img/9150e4e5ly1fiwa711catj205i053dfm.jpg')