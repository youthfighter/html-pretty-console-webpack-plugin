class HtmlPrettyConsoleWebpackPlugin {
  constructor(options = {}) {
    this.options = options
    this.options.output = options.output || [{ label: '打包时间', value: new Date().toString() }]
    this.options.inject = options.inject || 'head'
    this.options.filename = options.filename || 'index.html'
  }

  run(content) {
    const { output, inject } = this.options
    let outputConsole = '<script>'
    for (const item of output) {
      outputConsole += `console.log('%c ${item.label} %c ${item.value} %c', 'background:#35495e ; padding: 2px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#41b883 ; padding: 2px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent');`
    }
    outputConsole += '</script>'
    if (inject === 'body') {
      content = this.insertbefore(content, '</body>', outputConsole)
    } else {
      content = this.insertbefore(content, '</head>', outputConsole)
    }
    return content
  }
  insertbefore(content, flag, insertStr) {
    const idx = content.indexOf(flag)
    if (idx === -1) return content

    return content.substr(0, idx) + insertStr + content.substr(idx)
  }
  apply(compiler) {
    compiler.hooks.emit.tap('html-pretty-console-webpack-plugin', (compilation) => {
      const { filename } = this.options
      let content = compilation.assets[filename].source()
      content = this.run(content)
      compilation.assets[filename] = {
        source() { return content },
        size() { return content.length }
      }
    })
  }
}
module.exports = HtmlPrettyConsoleWebpackPlugin
