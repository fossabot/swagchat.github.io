# UIKit

## SubTitleBar

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/SubTitleBar/1.html"></iframe>

```js
import * as React from 'react';
import { SubTitleBar } from 'react-swagchat';

const SubTitleBarExample = () => (
  <SubTitleBar
    title="title"
    isDisplayBorder={true}
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| title | string | | | タイトル |
| isDisplayBorder | boolean | | | 上部にボーダーを表示 |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
