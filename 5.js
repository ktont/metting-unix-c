const chalk = require('chalk');

module.exports = [
chalk`
        {bold 一个例子：编写一个 tiny 操作系统用来跑一个函数}
`,

'第一步',

chalk
`quick
    {hex('#0000ff') 三个文件，磁盘 copy 进去}
`,

'第二步',

chalk
`quick
    {hex('#0000ff') 编译}
`,

'第三步',
chalk
`
    {hex('#0000ff') 执行}

`,

`
    $ pdp11 bare.ini
`,

chalk
`slow
    PDP-11 simulator V3.9-0
    Disabling XQ
`,

chalk
`slow
    @{green /36/a.out}
`,

chalk
`quick
    {grey ctrl-E}
`,

'最后一步',

`quick
    sim> e r0
`,

chalk
`slow
    R0:   {cyan 000101}   {red A}    {grey ; 目的达成}

`,

`

    现在开始动手做.......
`,
];
