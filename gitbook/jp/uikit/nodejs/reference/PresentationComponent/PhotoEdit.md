# UIKit

## PhotoEdit

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/PhotoEdit/1.html"></iframe>

```js
import * as React from 'react';
import { PhotoEdit } from 'react-swagchat';

const PhotoEditExample = () => (
  <PhotoEdit
    src="https://dummyimage.com/300x300/3768c4/fff&text=circle"
    shape="circle"
    onUpdatePhoto={() => alert('Photo updated!')}
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| src | string | | ✔ | 画像URL |
| shape | string | `circle` | | ボタンの形状<br />`circle`<br />`square`<br />`squareRound`<br />`round`<br /> |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
| onUpdatePhoto | function | `() => {}` | | 画像アップロード時にコールされる関数 |
