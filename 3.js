const chalk = require('chalk'); 

module.exports = [
chalk
`
        {bold 历史：PDP11/40的年代}
`,

chalk
`
{hex('#0000ff') 先认识下两位作者}
`,

`image
    _img/1.png
`,

chalk
`


{hex('#0000ff') 再看看当时的机器}
`,

`image
_img/2.png
`,

chalk
`


{hex('#0000ff') 拉近一点}
`,

`image
_img/pdp11_for.jpg
`,

chalk
`



{hex('#0000ff') 再拉近一点}
`,

`image
_img/Pdp-11-70-panel.jpg
`,

];

if(require.main === module) module.exports.forEach(x => console.log(x));

