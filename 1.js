var chalk = require('chalk');
var { print, sleep, slow, splitString } = require('./output.js');

const ppt=[
chalk
`
                   {hex('#FFFFFF').bold C 栈帧和 UNIX 进程切换}
`,
chalk
`
$ banner unix
{hex('#00FF00').bold
X    X  X    X     X    X    X          XXXXX   XXXXX    XXXX    XXXX
X    X  XX   X     X     X  X           X    X  X    X  X    X  X    X
X    X  X X  X     X      XX            X    X  X    X  X    X  X
X    X  X  X X     X      XX            XXXXX   XXXXX   X    X  X
X    X  X   XX     X     X  X           X       X   X   X    X  X    X
 XXXX   X    X     X    X    X          X       X    X   XXXX    XXXX


 XXXX            XXXX    XXXXX    XX     XXXX   X    X
X    X          X          X     X  X   X    X  X   X
X                XXXX      X    X    X  X       XXXX
X                    X     X    XXXXXX  X       X  X
X    X          X    X     X    X    X  X    X  X   X
 XXXX            XXXX      X    X    X   XXXX   X    X

}
                                                          {hex('#FFFFFF') 2018-12-17}
`
];

module.exports = async (stop = ()=>{}) => {
  while(true) {
    if(stop()) return;
    console.clear();
    print(ppt[0]);
    await slow(ppt[1], stop);
    if(stop()) return;
    await sleep(1500);
  }
}

if(require.main === module) module.exports();

//console.log(splitString(ppt[0]));
//console.log(ppt[0]);
//console.log(Buffer(ppt[1][1]), Buffer('\u001b'));