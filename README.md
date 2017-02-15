# Angular-scaffold

基于 Angular + Ionic + ES6 前端项目脚手架

## 技术选型

* Angular + Ionic + ES6
* Webpack + Hot-loader

## 目录结构

```
angular-scaffold/
  |-assets/
     |- fonts/
     |- images/
     |- plugins/
     |- styles/
     |- ...
  |-etc/
     |- config.js
     |- ...
  |-helpers/
     |- Header.js
     |- register.js
     |- ResourceBase.js
     |- RestBase.js
     |- ServiceBase.js
     |- Tools.js
     |- ...
  |-modules/
      |- app
        |- animations
        |- controllers
        |- directives
        |- filters
        |- index.js
        |- ...
      |- common
      	|- ...
      |- help
      	|- ...
      |- user
      	|- ...
      |- web
      	|- ...
      |- index.js
      |- ...
  |- dev.config.js
  |- index.html
  |- prod.config.js
  |- ...
```

## 使用方法

```sh
$ git clone https://github.com/skyvow/angular-scaffold.git
$ cd angular-scaffold
$ npm install
$ npm start
```