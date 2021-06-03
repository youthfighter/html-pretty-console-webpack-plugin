import HtmlPrettyConsoleWebpackPlugin from '../src/index'

test('inject:head', () => {
  let hpc = new HtmlPrettyConsoleWebpackPlugin()
  const ans = hpc.run(`<head><title>test</title></head>`)
  expect(ans.startsWith('<head><title>test</title><script>')).toBeTruthy()
  expect(ans.endsWith('</script></head>')).toBeTruthy()
});

test('inject:body', () => {
  let hpc = new HtmlPrettyConsoleWebpackPlugin({
    inject: 'body'
  })
  const ans = hpc.run(`<body><div id="app"></div></body>`)
  expect(ans.startsWith('<body><div id="app"></div><script>')).toBeTruthy()
  expect(ans.endsWith('</script></body>')).toBeTruthy()
});

test('inject:custom', () => {
  let hpc = new HtmlPrettyConsoleWebpackPlugin({
    inject: '<!-- html-pretty-console-webpack-plugin -->'
  })
  const ans = hpc.run(`<body><!-- html-pretty-console-webpack-plugin --></body>`)
  expect(ans.startsWith('<body><script>')).toBeTruthy()
  expect(ans.endsWith('</script><!-- html-pretty-console-webpack-plugin --></body>')).toBeTruthy()
});
