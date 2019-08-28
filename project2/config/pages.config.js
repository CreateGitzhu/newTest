const fs = require('fs')
const path = require('path')
const direntList = fs.readdirSync(path.resolve(__dirname, '../src/views'), {
    withFileTypes: true,
})
const pages = {}

direntList.forEach(dirent => {
    if (dirent.isDirectory()) {
        const dirName = dirent.name
        pages[dirName] = {
            entry: `src/views/${dirName}/index.js`, // 页面入口
            template: 'src/views/template.html', // 页面模板
            filename: `${dirName}/index.html`, // 目标html的名称
            title: '我的项目',
            favicon: 'src/assets/icon/student.ico',
            chunks: ['vendors', 'common', `${dirName}`], // 提取处理的chunk
        }
    }
})

module.exports = pages