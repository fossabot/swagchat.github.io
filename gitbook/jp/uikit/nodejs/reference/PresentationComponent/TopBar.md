# UIKit

## TopBar

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TopBar/1.html" height="60"></iframe>
<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TopBar/2.html" height="60"></iframe>
<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TopBar/3.html" height="60"></iframe>
<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TopBar/4.html" height="60"></iframe>
<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/TopBar/5.html" height="60"></iframe>

```js
import * as React from 'react';
import { TopBar } from 'react-swagchat';

const TopBarFullExample = () => (
  <TopBar
    leftButton={<i className="material-icons">keyboard_arrow_left</i>}
    title="Full"
    pictureUrl="http://www.material-ui.com/images/adhamdannaway-128.jpg"
    rightButton={<i className="material-icons">open_in_new</i>}
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| title | string | | | タイトル |
| pictureUrl | string |  | | タイトルの左横に配置される画像のURL |
| leftButton | React.ReactNode | | | 左隅に配置されるボタン<span class="property-example">例　`<Button color="linkPrimary" text="Left" />`</span> |
| rightButton | React.ReactNode | | | 右隅に配置されるボタン<span class="property-example">例　`<Button color="linkPrimary" text="Right" />`</span> |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
