const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  lintOnSave: false //如果为false，就是取消eslint规则的检查
};
