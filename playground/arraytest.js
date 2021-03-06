const fs = require('fs');

var obj = {
  table : [],
};

const getAllData = () => {
  try {
    const readfile = fs.readFileSync('mydata.json', 'utf8');
    obj = JSON.parse(readfile);
    obj.table.forEach((value)=>{
      console.log(value);
    });
  } catch (err) {
    console.log('File not found');
  }
};

const insertData = (newdata) => {
  try {
    const readfile = fs.readFileSync('mydata.json', 'utf8');
    obj = JSON.parse(readfile);
  } catch (err) {}

  obj.table.push(newdata);
  fs.writeFileSync('mydata.json',JSON.stringify(obj), 'utf8');
}

module.exports = {
  getAllData,
  insertData,
}
