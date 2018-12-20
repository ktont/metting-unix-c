const chalk = require('chalk');

module.exports = [
chalk
`
                   {bold 一个例子：修改栈帧用来模拟进程切换 }
`,

'第一步',

chalk
`quick
    {hex('#0000ff') 还用之前的 tinyOS 环境}

`,

'第二步',

chalk
`quick
    {hex('#0000ff') 使用下面的应用}
`,

chalk
`slow
    {cyan int} {magenta returnA}() \{
        {magenta returnB}();
        return {red 'A'};
    \}

    {cyan int} {magenta returnB}() \{
        {green for(;;); } {grey // 设置断点 }
        return {red 'B'};
    \}

`,

'第三步',
chalk
`
    {hex('#0000ff') 编译执行}

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

chalk
`slow
    Simulation stopped, PC: {red 000432} ({cyan BR} {bgRed 432})
`,

chalk
`quick
    sim> e sp,r5 {grey ; 检查栈帧}
`,

chalk
`slow
    SP: {bgGreen 000750}
    R5: {bgMagenta 000760}
`,

chalk
`quick
    sim> e 750-1000 {grey ; 公式 sp-1000 检查栈}
`,

chalk
`slow
    {bgGreen 750}:    000366
    752:    000002
    754:    000003
    756:    000004
    {bgMagenta 760}:    {bgBlue 000774}
    762:    000414
    {dim 764}:    000366
    766:    000002
    770:    000003
    772:    000004
    {bgBlue 774}:    000005
    776:    000350
    1000:   000000
`,

chalk
`quick
    sim> d r5 000774  {grey ; 公式 (r5)->r5 修改 r5 为上一帧}
`,

chalk
`quick
    sim> d sp 764     {grey ; 公式 r5-4  修改 sp 为下一帧栈顶}
`,

chalk
`quick
    sim> d pc 434     {grey ; 公式 pc+2  去掉断点}
`,

chalk
`quick
    sim> g            {grey ; 继续执行}
`,



'最后一步',

`quick
    sim> e r0
`,

chalk
`slow
    R0:   {cyan 000102}   {red B !!!}    {grey ; 最终目的达成}

`,

`

    现在开始动手做.......
`,
];