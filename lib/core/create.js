const program = require("commander");

const {
  createProjectAction,
  addCpnAction,
  addPageAndRouteAction,
  addStoreAction,
  addApiAction,
  createHProjectAction
} = require("./actions.js");

const createComma = () => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction);
  program
    .command("create-h <project> [others...]")
    .description("clone repository into a folder")
    .action(createHProjectAction);
  // 添加components组件指令
  program
    .command("addcpn <name>")
    .description(
      "add vue component,例如:vs addcpn HelloWorld [-d src/components]"
    )
    .action((name) => {
      addCpnAction(name, program.dest || 'src/components');
    });

  // 添加页面和路由
  program
    .command("addpage <page>")
    .description("add vue page ,例如:vs addpage Home [-d src/pages]")
    .action((page) => {
      addPageAndRouteAction(page, program.dest || "src/pages");
    });

  // 添加store
  program
    .command("addstore <store>")
    .description("add vue store ,例如:vs addstore Home [-d src/store]")
    .action((store) => {
      addStoreAction(store, program.dest || 'src/store/modules')
    });

  // 添加api文件
  program
    .command('addapi <name>')
    .description("add vue api, 例如vs addapi home")
    .action(name => {
      addApiAction(name, 'src/api')
    })
};

module.exports = {
  createComma,
};
