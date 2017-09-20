# UIKit

## チャットアプリケーションを組み込む

UIKitはTypeScriptで実装されていますが、JavaScript(ES5)にトランスパイル済みのものを提供しています。

よって利用するだけであればTypeScriptの環境を構築する必要はありません。もちろん型定義ファイルも同一パッケージで提供しているのでTypeScriptでの利用も可能です。（一般的な@typesパッケージのインストールは不要です。）

また、UIKitの各コンポーネントではCSSモジュールを使用しているので、あなたのアプリケーションのモジュールバンドル設定にCSSモジュールローダーの設定が必要となります。
webpackでの設定については[こちら](https://github.com/css-modules/webpack-demo)を参考にして下さい。


### 基本的な使い方

```js
import * as React from 'react';
import { Avatar } from 'react-swagchat';

const AvatarExample = () => (
  <Avatar
    src="https://dummyimage.com/300x300/3768c4/fff&text=circle"
    shape="circle"
    onClick={() => alert("Click")}
  />
);
```

---

* [インストール](install.md)
* [リファレンス](reference/README.md)
