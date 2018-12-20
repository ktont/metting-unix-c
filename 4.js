const chalk = require('chalk'); 

module.exports = [
chalk
`
        {bold 栈帧 -- 什么是函数？}
`,

chalk
`
{hex('#0000ff') 看一个最简单的函数}
`,

chalk
`slow
{cyan int} {magenta returnA}() \{
    return {red 'A'};
\}
`,

`
$ cc -S 3.c
`,

chalk
`slow
.globl  _returnA
.text
_returnA:
~~returnA:
jsr     r5,{green csv}    {grey / 进入}
mov     $101,{green r0}   {grey / return 'A'}
jbr     L1
L1:jmp  {green cret}      {grey / 退出}
.globl
.data
`,

`

可以发现下列三点：
`,

chalk
`slow
    1. 进入时执行 {green csv} -- c 的 save 之意
`,

chalk
`slow
    2. 离开时执行 {green cret} -- c 的 return 之意
`,

chalk
`slow
    3. 返回值存放在 {green r0} 中
`,

chalk
`

接下来 
做一个例子：编写一个 {green tinyOS}，用来跑上面这个例子，包括三部分
`,

`
    1. 一个 low core，非常小的 core
`,

`slow
    . = 300^.
        mov     $1000, sp
        / clear stack
        mov     $_etext,r0

        jsr     pc,_returnA
        br      .
`,

`
    2. 一个 c runtime，非常小的 c 运行库
`,

chalk
`slow
    {magenta csv}:
            mov     r5,r0
            mov     sp,r5
            mov     r4,-(sp)
            mov     r3,-(sp)
            mov     r2,-(sp)
            jsr     pc,(r0)

    {magenta cret}:
            mov     r5,r1
            mov     -(r1),r4
            mov     -(r1),r3
            mov     -(r1),r2
            mov     r5,sp
            mov     (sp)+,r5
            rts     pc

`,

`
    3. 一个 app，上面这个例子
`,

chalk
`slow
    {cyan int} {magenta returnA}() \{
        return {red 'A'};
    \}
`,

];

if(require.main === module) module.exports.forEach(x => console.log(x));

