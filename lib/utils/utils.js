const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

// 判断是否有文件
// 判断path路径下是否有这个文件夹,如果没有测添加对应的文件夹
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName);
      return true;
    }
  }
};

// 写入内容
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

module.exports = {
  compile,
  writeToFile,
  createDirSync,
};
