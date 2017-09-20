# UIKit

## Badge

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/Badge/1.html"></iframe>

```js
import * as React from 'react';
import { Badge } from 'react-swagchat';

const BadgeExample = () => (
  <Badge
    count={10}
    color="primary"
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| count | number | | ✔ | バッジカウント |
| color | string | `primary` | | ボタンのカラー<br />`primary`<br />`secondary`<br />`success`<br />`danger`<br />`warning`<br />`info`<br />`disable`<br />`dark`<br />`light`<br />`linkPrimary`<br />`linkBlack`<br />`linkWhite` |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|

<p data-height="300" data-theme-id="31080" data-slug-hash="oePaRL" data-default-tab="js,result" data-user="betchi" data-embed-version="2" data-pen-title="Badge" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/betchi/pen/oePaRL/">Badge</a> by Betchi (<a href="https://codepen.io/betchi">@betchi</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
