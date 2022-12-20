<img align="right" height="260" src="https://mhdrp.ir/Radin/stak-hurrah.svg">
<h1 align="center">Radin Toolkit</h1>
<div align="center">
An enterprise-class UI design language and React UI library.
</div>

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🎨 Powerful theme customization in every detail.

## 📦 Install

Install NodeJS >= [v16.13.2](http://nodejs.org/dist/v16.13.2/), if you don't have it yet.

You must do the initial configuration first

To use Radin Tamin UI components, all you need to do is install the peer dependencies:

```shell
  $ yarn add antd
```

```shell
  $ yarn add radin-toolkit
```

## 🥸 Documentation and View Templates

You can view the components document without having to install the main project

## ⚽ What is a playground

- It is an experimental environment that developers can use to test and check the component
- It is more useful for those who are code reviewing

## ✨ Usage

And import style in \_app.js:

```jsx
import "radin-toolkit/lib/styles.css";
```

And import below style to styles/globals.pcss;

```jsx
import "radin-toolkit/lib/tailwind/global.pcss";
```

```jsx
import { Button } from "radin-toolkit";

const App = () => (
  <>
    <Button>Learn React</Button>
  </>
);
```

## 🔨 Build

```shell
  $ yarn build
```

## 🚀 Publish

1.For deploy package into local repository must first log in to repo

2.switch to branch master

```shell
  $ git chekout master
```

3.then merge develop into master

```shell
  $ git merge --no-ff develop
```

4. change version in package.json

- [Semantic Versioning 2.0.0](https://semver.org/)

  5.build and publish

```shell
  $ yarn build
  $ yarn publish
```

6. Creating tags from the command line

```shell
  $ git tag -a <tagname> -m 'version <tagname>'
  $ git push origin master
  $ git push origin <tag_name>
```
