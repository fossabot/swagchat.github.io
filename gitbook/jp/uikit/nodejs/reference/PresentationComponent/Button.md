# UIKit

## Button

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/Button/1.html" height="250"></iframe>

```js
import * as React from 'react';
import { Button } from 'react-swagchat';

const ButtonExample = () => (
  <Button
    text="Square Round Button"
    shape="squareRound"
    color="primary"
    icon={<i className="material-icons">chat</i>}
    onClick={() => alert("Click")}
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| text | string | | | ボタンのテキスト |
| icon | React.ReactNode | | | ボタンのアイコン<span class="property-example">例　`<i className="material-icons">chat</i>`</span> |
| shape | string | `squareRound` | | ボタンの形状<br />`square`<br />`squareRound`<br />`round`<br /> |
| color | string | `primary` | | ボタンのカラー<br />`primary`<br />`secondary`<br />`success`<br />`danger`<br />`warning`<br />`info`<br />`disable`<br />`dark`<br />`light`<br />`linkPrimary`<br />`linkBlack`<br />`linkWhite` |
| position | string | `center` | | ボタンテキストとボタンアイコンの間隔<br />`center`<br />`left`<br />`right`<br />`around`<br />`between` |
| iconPosition | string | `left` | | ボタンアイコンの位置<br />`left`<br />`right` |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
| onClick | function | `() => {}` | | クリック時にコールされる関数 |
