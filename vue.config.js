const proxyObj = {};
const TimeStamp = new Date().getTime();

proxyObj["/ws"] = {
  ws: true,
  target: "ws://localhost:8081"
};
proxyObj["/"] = {
  ws: false,
  target: "http://127.0.0.1:12000",
  changeOrigin: true,
  pathRewrite: {
    "^/": ""
  }
};
proxyObj["/manage"] = {
  // 代理到的目标服务器
  target: "http://127.0.0.1:12000",
  // needed for virtual hosted sites
  changeOrigin: true,
  // proxy websockets
  ws: false,
  // 路径的重写
  pathRewrite: {
    "^/manage": "/manage"
  }
  // router: {
  // when request.headers.host == 'dev.localhost:3000',
  // override target 'http://www.example.org' to 'http://localhost:8000'
  // 'dev.localhost:3000': 'http://localhost:8000',
  // }
};

module.exports = {
  configureWebpack: {
    output: {
      // 每次构建打包时给文件名，加上时间戳
      filename: `js/[name].${TimeStamp}.js`,
      chunkFilename: `js/[name].${TimeStamp}.js`
    }
  },
  devServer: {
    // 代理到目标的服务器
    proxy: proxyObj
  }
};
