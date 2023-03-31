// promisify是一个工具函数，用于将传统的回调函数转换为返回Promise的函数，方便异步编程。
const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const path = require("path");
const fs = require('fs')

const { vueRepo } = require("../config/repo-config.js");
const { compile, writeToFile, createDirSync } = require("../utils/utils.js");

const { commandSpawn } = require("../utils/terminal.js");


const createProjectAction = async (project) => {
  console.log("开始下载模板(Start downloading templates)");

  // 1.clone项目地址
  try {
    await download(vueRepo, project, { clone: true });
  } catch (error) {
    console.log('下载错误' + error);
  }

  // 2.执行npm install
  try {
    await commandSpawn(
      process.platform === "win32" ? "npm.cmd" : "npm",
      ["install"],
      {
        cwd: `./${project}`,
      }
    );
    console.log("包已经下载完毕了(The package has been downloaded)");
    console.log("开始运行项目(Start running the project)");
    // 3.运行npm run serve
    commandSpawn(
      process.platform === "win32" ? "npm.cmd" : "npm",
      ["run", "serve"],
      {
        cwd: `./${project}`,
      }
    );
  } catch (error) {
    console.log('npm错误' + error);
  }
};

// 添加组件的action
const addCpnAction = async (name, dest) => {
  // 2.编译ejs模板 result
  const result = await compile("vue-component.ejs", {
    name: name.toUpperCase(),
    lowerName: name.toLowerCase(),
  });
  // 3.将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`);
  writeToFile(targetPath, result);
};

// 添加页面组件和路由
const addPageAndRouteAction = async (name, dest) => {
  const data = { name: name.toUpperCase(), lowerName: name.toLowerCase() };
  // 内容
  const pageResult = await compile("vue-component.ejs", data);
  const routeResult = await compile("vue-router.ejs", data);

  // 写入文件
  // 路径 targetPagePath
  // 判断
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name.toLowerCase()}.vue`);
    const targetRoutePath = path.resolve(targetDest, `router.js`);
    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult);
  }
};


// 添加store
const addStoreAction = async (name, dest) => {
  // 生成内容
  const storeResult = await compile('vue-store.ejs', {})
  const typesResult = await compile('vue-types.ejs', {})

  // 创建文件,生成路径
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `index.js`);
    const targetRoutePath = path.resolve(targetDest, `types.js`);
    writeToFile(targetPagePath, storeResult);
    writeToFile(targetRoutePath, typesResult);
  }
}

// 添加api文件
const addApiAction = async (name, dest) => {
  // 生成内容
  const data = { name: name.toLowerCase() }
  const ApiResult = await compile('vue-api.ejs', data)
  // 创建文件,生成路径
  const apiPath = path.resolve(dest) // api 路径
  const nameFile = `${name.toLowerCase()}.js` // 文件名

  // console.log(targetapiDest);
  fs.readdir(apiPath, (err, files) => {
    if (err) {
      console.log(err);
      return
    }

    // 遍历文件
    const isFile = files.some(file => file === nameFile)
    if (isFile) {
      // 表示已经有该文件了
      console.log('目录下已经有该文件了');
    } else {
      // 没有则生成
      const targetapiDest = path.resolve(dest, `${name.toLowerCase()}.js`) // 最终文件路径
      // const createapiFile = path.resolve(targetapiDest,)
      writeToFile(targetapiDest, ApiResult)
    }
  })
}


module.exports = {
  createProjectAction,
  addCpnAction,
  addPageAndRouteAction,
  addStoreAction,
  addApiAction
};
