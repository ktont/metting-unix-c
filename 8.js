const chalk = require(`chalk`);

module.exports = [
chalk
`
                   {bold 真实的UNIX的进程切换 }
`,

`

如果你非要知道真实的世界，那么就会有一些新概念蹦出来:`,
`    1. MMU`,
`    2. 内核模式用户模式`,
`    3. proc 数据结构`,
`    4. user 数据结构`,
`    5. 中断和陷入`,
`    6. 内核模式 ISA6 和 U 和 PPDA`,

`

新建进程流程：`,
chalk
`    1. {green newproc} 生成新进程`,
`    2. sched 开始调度`,
`    3. sleep 当前进程等待`,
chalk
`    4. {green swtch} 切换进程 {blue （此处修改了栈帧和返回值）}`,

`


普通分时逻辑`,

`    1. 1/20s 间隔发生时钟中断`,
chalk
`    2. psw 和 pc 压入{magenta 内核栈}`,
`    3. 中断处理函数 call 和 clock`,
`    4. 保存 r0 r1, {grey lions 570行 779行}`,
`    5. sched 开始调度`,
`    6. sleep 当前进程等待`,
chalk
`    7. {green swtch} 切换进程 {blue （此处修改了栈帧和返回值）}`,
`    8. 返回中断处理函数 call 和 clock`,
chalk
`    9. 恢复 r1 r0 {blue （返回值被覆盖）} {grey lions 802行 804行}`,
];