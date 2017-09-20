# UIKit

## 概要

本UIKitはswagchatを利用したチャットアプリケーションを構築する際に必要なUIを簡単に実装できるキットです。
UIはWebのみに対応しています。

### 利用方法

利用方法には大きく2つのパターンがあります

* [htmlにタグを設置して既に用意されているチャットアプリケーションを動かす（ノンプラグラミング）](browser/README.md)
* [あなたのアプリケーションにチャットアプリケーションを組み込む](nodejs/README.md)

なお、あなたのアプリケーションにswagchatアプリケーションを組み込む場合は以下の知識が必要となります。

* [Node.js](https://nodejs.org/ja/)
* [React](https://facebook.github.io/react/)
* [CSS Modules](https://github.com/css-modules/css-modules)

### 事前準備

本UIKitの利用にはhtmlページで以下のファイルをインポートして頂く必要があります。

 * [Normalize.css (スタイルシート)](http://necolas.github.io/normalize.css/)
 * [Material+Icons (アイコンフォント)](https://material.io/icons/)

推奨フォントはRobotoフォントになります。

 * [Roboto (フォント)](https://fonts.google.com/specimen/Roboto)

具体的には`head`タグ内に以下を記述して下さい。

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" type="text/css" media="all">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" type="text/css" media="all">
<!-- 推奨フォント -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" type="text/css" media="all">
```

---

* [タグを設置して動かす](browser/README.md)
* [チャットアプリケーションを組み込む](nodejs/README.md)
* [コントリビュータ向け](contributors/README.md)
