# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

复现步骤：
1. 启动项目，目前页面上渲染的是 “正确更新”
2. 在 @/pages/index.tsx 内，修改 renderContent 方法下 switch 的 default分支内容，例如 “正确更新” 修改成 “不能正确更新”，保存，重新编译
3. 终端提示 “Compiled successfully” 但页面没有正确更新，需要手动刷新才能正确展示
4. 在 .umirc.ts 里 关闭 mfsu，删除 .umi 下的缓存文件
重复步骤 1~3，可以正确渲染。

观察：
1. 如果 switch 中的 case 只有一个，那么会正确渲染，有两个或两个以上 case 时，不会正确渲染。
2. 不止default，更新 ChildPage 的内容也是一样的，并不会正确渲染。