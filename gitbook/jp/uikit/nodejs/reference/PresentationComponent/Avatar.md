# UIKit

## Avatar

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/Avatar/1.html"></iframe>

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

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| src | string | | ✔ | 画像URL |
| shape | string | `circle` | | ボタンの形状<br />`circle`<br />`square`<br />`squareRound`<br />`round`<br /> |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル(CSS-in-JS)<span class="property-example">例　`{fontSize: '30px'}`</span>|
| onClick | function | `() => {}` | | クリック時にコールされる関数 |

<p data-height="300" data-theme-id="31080" data-slug-hash="qXMMNY" data-default-tab="js,result" data-user="betchi" data-embed-version="2" data-pen-title="Avatar" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/betchi/pen/qXMMNY/">Avatar</a> by Betchi (<a href="https://codepen.io/betchi">@betchi</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
