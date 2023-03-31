/**
 *
 *  执行终端命令相关的代码
 */

// spawn 是一个函数，可以用来创建子进程。
const { spawn } = require("node:child_process");

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    });
    childProcess.on("error", (error) => {
      reject(error);
    });
  });
};

module.exports = {
  commandSpawn,
};
