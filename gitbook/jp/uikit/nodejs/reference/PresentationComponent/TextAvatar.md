# UIKit

## TextAvatar

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TextAvatar/1.html"></iframe>

```js
import * as React from 'react';
import { TextAvatar } from 'react-swagchat';

const TextAvatarExample = () => (
  <TextAvatar
    text="circle"
    shape="circle"
    onClick={() => alert("Click")}
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| text | string | | | テキスト |
| shape | string | `circle` | | ボタンの形状<br />`circle`<br />`square`<br />`squareRound`<br />`round`<br /> |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル(CSS-in-JS)<span class="property-example">例　`{fontSize: '30px'}`</span>|
| onClick | function | `() => {}` | | クリック時にコールされる関数 |
