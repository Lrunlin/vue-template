## VsCode 配置 Vue 路径别名提示：

### 安装插件（@ext:christian-kohler.path-intellisense）

### 设置中添加代码:

1. 允许插件作用于 vue 文件  
   "files.exclude": {
   "\*_/_.vue": true
   },

2. 设置路径别名不设置应该好使（在我的机器上）（因为配置了 jsconfig.json 文件）  
   "path-intellisense.mappings": {
   "@": "${workspaceRoot}/src"
   }
