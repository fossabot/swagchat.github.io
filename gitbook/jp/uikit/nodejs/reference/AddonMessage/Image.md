# UIKit

## Image

<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Image/menu.html" height="80"></iframe>
<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Image/interaction.html" height="80"></iframe>
<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Image/item.html" height="450"></iframe>

```js
import * as React from 'react';
import { ImageItem } from 'react-swagchat';

const ImageItemExample = () => (
  <div style={{width: '60%', height: '100%', backgroundColor: 'white'}}>
    <ImageItem
      message={
        {
          messageId: "c302388c-a5c8-44e0-86a6-4736a1dc5edf",
          userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
          type: "image",
          payload: {
            mime: "image/png",
            sourceUrl: "../../images/1ad55be7-b16b-47f1-a50f-9ac490f299d3.png"
          },
          created:"2017-09-07T11:56:16Z"
        }
      }
      myUserId="a"
      user={
        {
          userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
          name: "Williams",
          pictureUrl: "../../images/1ad55be7-b16b-47f1-a50f-9ac490f299d3.png",
        }
      }
    />
    <ImageItem
      message={
        {
          messageId: "c302388c-a5c8-44e0-86a6-4736a1dc5edf",
          userId: "0002",
          type: "image",
          payload: {
            mime: "image/png",
            sourceUrl: "http://localhost:9000/v0/assets/2f07ff8a-6459-4241-9a5f-e4b037b98c5f.png"
          },
          created:"2017-09-07T11:56:16Z"
        }
      }
      myUserId="00581ea9-3547-4c81-930c-a3ed042e4b21"
      user={
        {
          userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
          name: "Williams",
          pictureUrl: "http://www.material-ui.com/images/ok-128.jpg",
        }
      }
    />
  </div>
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| message | IMessage |  | ✔ | メッセージ情報 |
| myUserId | string | | ✔ | 自分自身のユーザID |
| user | IUserForRoom | | ✔ | ユーザ情報 |
