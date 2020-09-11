# 0907
### table类型
###### 用户（user and group）
###### 权限（role and permission）
### 依赖安装
- install typeorm
### 遗留问题
- database命名规范，单表多单词和桥表命名区分。
- 没有ER图
### 配置运行环境
- yarn mysql:init

# 0908
### path转相对路径为绝对路径
- path会将相对路径转为绝对路径，但注意的是，其绝对地址计算为：项目路径 + 相对路径，而不是 当前文件路径 + 相对路径

### 遗留问题
- ts-node，配置debug环境失败

# 0909
### 配置start:dev的脚本
windows不支持NODE_ENV=development的设置方式，为了支持这个方式，安装cross-env:npm install cross-env --save-dev

### 遗留问题
- 文档不推荐多个全局模块，但是有这个需求，所以在此我保留全局模块，但注意多个全局模块之间的依赖关系。

## 0911
### "@nestjs/swagger/plugin" plugin could not be found!
- yarn global upgrade upgrade @nestjs/cli
- nest update