const chalk = require('chalk'); 

// shell 形式语法解析很弱
module.exports = [
chalk
`
        {bold 栈帧 -- 什么是函数？}
`,
chalk
`
{hex('#0000ff') 看一个最简单的函数}
`,
'$ cat 3.c',

`slow
int returnA() {
    return 'A';
}

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
jsr     r5,{green csv}
mov     $101,{green r0}
jbr     L1
L1:jmp  {green cret}
.globl
.data
`,

`

可以发现下列三点：
`,

'  1. 进入时执行 {green csv} -- c 的 save 之意',
'  2. 离开时执行 {green cret} -- c 的 return 之意',
'  3. 返回值存放在 {green r0} 中',

chalk
`

接下来 
做一个例子：编写一个 tiny 操作系统，用来跑上面这个例子，包括三部分
`,

'  1. 一个 low core，非常小的 core',
'  2. 一个 c runtime，非常小的 c 运行库',
'  3. 一个 app，上面这个例子',
];

if(require.main === module) module.exports.forEach(x => console.log(x));

