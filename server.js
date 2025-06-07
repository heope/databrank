const express = require('express');
const cors = require('cors');
const path = require('path');

// 初始化 Express 应用
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // 允许跨域请求

// 将当前文件夹下的所有文件作为静态资源提供
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
     console.log(`启动成功，服务器正在监听端口 ${PORT}`);
    console.log(`http://localhost:${PORT}/index.html`);
});
