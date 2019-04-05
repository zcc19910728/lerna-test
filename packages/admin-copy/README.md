# React组件开发事项

这是一个react component组件开发工程，开发之前你需要了解以下内容。

- 开发
- 编译
- 程序入口
- 发布
- 在线demo



## 开发

这是一个标准的react工程，执行`npm run start`可以直接启动。页面入口为src/App.js。

新建一个文件写入你的组件代码，开发完毕后引入App.js就可以看到效果。



## 编译

开发完成，你需要将代码编译为es5。执行 `npm run lib`。如果不报错，则编译成功。工程中会有一个lib目录。作为npm组件被外部引用的就是这个文件夹中的内容。



## 程序入口

如果你组件的文件名为src/Mod.js，编译完成后的路径为lib/Mod.js。

你需要在package.json中设置入口`"main": "lib/Mod.js"`，这样可被默认引用。

**typescript声明文件**

如果你有ts声明文件index.d.ts，请放在package.json同级目录下。在package.json中设置入口`"types": "./index.d.ts"`



## 发布

你需要把组件提交到海拍客内部npm仓库。

首先确保你在内网环境，并安装过[ytnpm](https://www.npmjs.com/package/yt-npm)。package.json中name以@yt开头，如`@yt/damo-sb`。

执行`npm run publish-to-npm`



## 在线demo

将本工程当做完成的APP打包，并接入git2cdn，可以实现在线demo。