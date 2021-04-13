let fs = require('fs');
var parse = require('s-expression');
export async function parser(path: string) {
  let x  = await readFile(path);
  // console.log(x);
  console.log(parse(x));
  // var obj1 = elparser.parse1(x);
  return {};
}

function readFile(fileName: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) {return reject(error);}

      // console.log(fileName);
      // console.log(data);

      resolve(data);
    });
  });
}
