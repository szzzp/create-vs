// 这个模块通常用于创建命令行工具和解析命令行参数。
const { program } = require("commander");

const helpoptions = () => {
  // 增加自己的options(选项)
  program
    .option("-s --vs", "a vs cli")
    .option("-d --dest <dest>", "a destination folder,例如:-d src/components")
    .parse(process.argv);

  // 监听到
  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("   vs options");
  });
};
module.exports = helpoptions;
