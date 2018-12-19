const chalk = require('chalk'); 
const Table = require('cli-table3');
const { parse } = require('./output.js');

var table = new Table({
    head: ['进制', '特点']
  , colWidths: [10, 30]
});

table.push(
['二进制', '啰嗦'],
['四进制', '小'],
['五进制', '算盘适合手打'],
[chalk.cyan('八进制'), '离十进制最近'],
['十进制', '适合人类运算'],
['十六进制', '离十进制较远而不适合心算能力']
);


module.exports = [

chalk
`
                   {bold 引子：chmod 777}
`,

chalk
`quick
$ ls -l my
`,

chalk
`slow
-rwxr--r--  1 root    27264 Oct 14 03:49 my
`,

chalk
`quick
$ chmod 777 my
`,

chalk
`slow
$ ls -l my
-rwxrwxrwx  1 root    27264 Oct 14 03:50 my
`,

chalk
`quick
     {green -}{magenta -}{blue -} {green -}{magenta -}{blue -} {green -}{magenta -}{blue -}
     {green r}{magenta w}{blue x} {green r}{magenta w}{blue x} {green r}{magenta w}{blue x}
     {green 1}{magenta 1}{blue 1} {green 1}{magenta 1}{blue 1} {green 1}{magenta 1}{blue 1} 
      7   7   7
     own grp oth

  注：
   own: owner
   grp: group
   oth: other
`,

chalk
`
$ man ascii
`,

chalk
`quick
DESCRIPTION
     {yellow The octal set}:

     000 nul  001 soh  002 stx  003 etx  004 eot  005 enq  006 ack  007 bel
     010 bs   011 ht   012 nl   013 vt   014 np   015 cr   016 so   017 si
     040 sp   041  !   042  "   043  #   044  $   045  %   046  &   047  '
     100  @   {red 101  A   102  B   103  C}   104  D   105  E   106  F   107  G
`,

chalk
`
各种进制间的比较:
`,

table.toString(),

];

if(require.main === module) module.exports.forEach(x => console.log(x));

// echo "  | 1  2  3  4  5  6  7  8  9";echo "--+--------------------------";for x in 1 2 3 4 5 6 7 8 9; do echo -n "$x ";   for y in 1 2 3 4 5 6 7 8 9;   do     if [ $y -eq 1 ]; then       printf "|%2s " $((x*y));     else       printf "%2s " $((x*y));     fi;   done;echo; done
