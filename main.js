const prelude = require('./1.js');
const fs = require('fs');
const output = require('./output.js');
const { log, slow, quick, parse } = output;

let chapter = 1;
let playIdx = 0;
let playPPT = [];

let stopPrelude = false;
prelude(() => stopPrelude);

function exists(file) {
  return !!require.cache[require.resolve(file)];
}

function play() {
  var file = './'+chapter+'.js';

  if(!fs.existsSync(file)) {
    process.exit(0);
  }

  if(!exists(file)) {
    console.clear();
    playPPT = require('./'+chapter+'.js');
  }

  playIdx = parse(playPPT, playIdx);

  if(!playIdx) {
    chapter++;
  }
}

process.stdin.resume();
process.stdin.on('data', function(t) {
  if(stopPrelude === false) {
    stopPrelude = true;
    return;
  }

  play();
  //var N = t.slice(0, t.length - 1).toString();
  
});
