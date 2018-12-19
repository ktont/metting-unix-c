var image = require('./image.js');

function trimString(str) {
  if(str[0] === '\n') str = str.substr(1);
  if(str[str.length-1] === '\n') str = str.substr(0, str.length-1);
  return str;
}

function splitString(str) {
  var ret = [];
  var tmp = [];
  var flag = false;
  for(var i=0; i< str.length; i++) {
    var c = str[i];
    if(c === '\u001b') {
      flag = true;
      while(tmp.length) tmp.pop();
    }

    flag ? tmp.push(c) : ret.push(c);

    if(flag && c === 'm') {
      flag = false;
      ret.push(tmp.join(''));
    }
  }
  return ret;
}

function trimList(lst) {
  //if(lst[0] === '\n') lst.shift();
  if(lst[lst.length-1] === '\n') lst.pop();
}

const log = (txt) => process.stdout.write(txt);
const sleep = (n) => new Promise( A => setTimeout(A, n));

const createFunc = (interval) => {
  return async (txt, stop) => {
    var lst = splitString(txt);
    trimList(lst);
    for(var i=0; i < lst.length; i++) {
      var c = lst[i];
      log(c);
      if(/\s/.test(c)) continue;
      if(stop && stop(i)) {
        log('\u001b[0m');
        break;
      }
      await sleep(interval);
    }
  }
}

const slow = createFunc(35);
const quick = createFunc(10);

function image(path) {

}

const print = (s) => {
  if(s.startsWith('quick\n')) return quick(s.substr(6));
  if(s.startsWith('slow\n')) return slow(s.substr(5));
  if(s.startsWith('image\n')) return image(s.substr(6));
  return log(trimString(s));
}

const parse = (ppt, idx) => {
  if(idx >= ppt.length) {
    return 0;
  }

  print(ppt[idx]);

  return ++idx;
}

module.exports = {
  log,
  slow,
  quick,
  parse,
  print,
  sleep,
  splitString,
}

