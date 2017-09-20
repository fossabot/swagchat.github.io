# UIKit

## SelectContactPage

<iframe class="code" src="../../../../../uikit-sample/ContainerComponent/SelectContactPage/1.html"></iframe>

```js
import * as React from 'react';
import { Avatar } from 'react-swagchat';

const AvatarExample = () => (
  <Avatar
    src="https://dummyimage.com/300x300/3768c4/fff&text=swagchat"
    onClick={() => { alert('onClick')}}
  />
);
```

| キー | 型 |　デフォルト | 説明 |
| ------------- | ------------- |
| src | string | | 画像URL |
| className | string | | クラス名 |
| width | number | | width |
| height | number | | height |
| margin | number | | 余白 |
