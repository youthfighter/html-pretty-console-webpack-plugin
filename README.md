# html-pretty-console-webpack-plugin
一个webpack插件，可以将打包相关的信息以较优美的方式插入html中，最终输出到浏览器的工作台。

## 使用

可以使用 `npm` 或者 `yarn` 来安装插件:

```shell
npm install --save-dev html-pretty-console-webpack-plugin

// or 
yarn add html-pretty-console-webpack-plugin --dev
```

在 `webpack.config.js` 添加如下配置:

```javascript
const HtmlPrettyConsoleWebpackPlugin = require('html-pretty-console-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlPrettyConsoleWebpackPlugin({
      output: [
        { label: '打包时间', value: new Date().toString() },
        { label: '分支信息', value: 'main' }
      ]
   })
  ]
};
```

执行 `npm run build` 指令，插件会将 `output` 中的相关信息自动插入入口 `html` 中。当运行 `html` 时，效果如下图所示

![最终效果](https://raw.githubusercontent.com/youthfighter/html-pretty-console-webpack-plugin/master/images/console.png)

## API

### filename [String, optional]

需要插入的 `html` 的名称，默认为 `index.html`。

### inject [String, optional]

`cosnole` 脚本插入的位置，目前仅支持 `head` 和 `body`，默认值为 `head`。

### output [Object, optional] 

要输出到控制台的信息。默认值为 `[{ label: '打包时间', value: new Date().toString() }]`

## LICENSE

MIT
