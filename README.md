
# 说明文档  

#### 作用 : 免去新建项目一些基础配置和扩展功能(Vuex,Router,Axios...)以及配合终端指令自动生成文件(例如：生成页面的同时自动生成路由文件并完成路由注册...)  
#### npm：https://www.npmjs.com/package/create-vs

- ### 如何安装
  ```
  npm install -g create-vs
  ```
- ### 模板基础配置 (vue-cli基础上进行扩展)
    - #### Vuex（创建仓库实例并动态添加子模块仓库实例，封装了token相关方法）
    - #### Vue-Router（创建路由实例并动态加载对应的路由，路由守卫拦截）
    - #### Axios（实例、接口的封装并配置拦截器以及跨域代理）
    - #### 全局组件的注册和使用
    - #### 全局过滤器的注册
    - #### Element-UI
    - #### 图片打包压缩功能（webpack.config.js中配置图片编译打包自动压缩功能）
    - #### Reset.css（移除浏览器默认样式，需手动修改注释，默认不使用）
    - #### Normalize.css（确保样式在其他浏览器无差异）
    - #### Less
    - #### Js-cooklie（封装了关于对token的一些方法）
    - #### Moment.js（一个解析、验证、操作和显示日期和时间的JavaScript库,模板有示例）
    - #### Lodash（提供了很多函数式编程的工具函数）
    - ## . . . . . .

- ### 如何使用
   -  创建pc端项目 (默认基础模板)
  ```
  vs create  <FileName>
  ```
  > filename --- 文件夹名字  
  vs create 表示创建一个pc的基础项目模板
  
  - 创建移动H5项目
   ```
   vs create-h <FileName>
   ```
   > failename --- 文件夹的名字
   > create-h 表示创建一个vue2移动端的项目
   
   移动端模板详细文档 : https://juejin.cn/post/7216965516877971512

 
- ### 终端指令
    - #### 创建component组件
        ```
        vs addcpn <filname> [-d  src/components]
        ```
        >addcpn --- 创建一个component组件  
        > 【-d  src/components】--- 可选参数，默认在src/components目录下新建一个以filename的.vue文件    
        
         > 例如 ：vs addcpn user

        >![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b045a2e1dbb4b458548dd153e036155~tplv-k3u1fbpfcp-zoom-1.image)

    - #### 创建pages页面组件和路由
        ```
        vs addpage <filename> [-d src/page ]
        ```
        >addpage --- 创建一个以filename的.vue文件和router.js的路由文件 ，router.js文件会自动导入路由实例中。  
        >  【-d src/pages】--- 可选参数 默认生成的组件文件在src/pages中  
        
        >例如：vs addpage home 

        >![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59d4b7dc23fa4df5be5c9ef860b95d65~tplv-k3u1fbpfcp-zoom-1.image)

    - #### 创建store子模块仓库
        ```
        vs addstore <filename> [-d src/store]
        ```
        > addstore --- 创建一个以filename的文件夹 ，包括了index.js和types.js  
        > 生成的子模块文件将动态加载到store实例上，无需手动编写  
        >  【-d src/store】--- 可选参数，不建议更改，生成的文件将自动导入经src/store/modules文件中  

       >例如 ：vs addstore Login  

      >![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cae98f8574f4e6ba6e3799eea498964~tplv-k3u1fbpfcp-zoom-1.image)
       
    - #### 创建Api文件
      ```
      vs addapi <filename>
      ```
      >addapi --- 创建一个以filename为名的.js文件,如果该文件已经存在则会返回并提示  
      >默认生成的文件在 'src/api' 目录下

      > 例如 : vs addapi home  

      >![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28d930e4eaa042f6bb34a95c05e359ec~tplv-k3u1fbpfcp-zoom-1.image)

      


### 其他
-后续更新vue2移动端项目模板 and 其他终端指令 有想法的可以提出来哦！！！  
-目前只针对vue2项目  
-使用简单，希望能帮助到大家！！！  
-模板项目地址：https://gitee.com/s-z-p/vue2-pc-template.git  
-巨人的肩膀：coderwhy