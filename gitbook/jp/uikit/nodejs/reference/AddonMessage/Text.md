# UIKit

## Text

<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Text/menu.html" height="80"></iframe>
<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Text/interaction.html" height="80"></iframe>
<iframe class="code" src="../../../../../uikit-sample/AddonMessage/Text/item.html" height="230"></iframe>

```js
import * as React from 'react';
import { TextItem } from 'react-swagchat';

const TextItemExample = () => (
  <div>
    <TextItem
      message={
        {
          messageId: "cfc61df8-a792-4750-bce0-ec684f5bc9e0",
          userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
          type: "text",
          payload: {text: "How've you been recently?"},
          created: "2017-08-24T10:19:28Z",
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
    <TextItem
      message={
        {
          messageId: "cfc61df8-a792-4750-bce0-ec684f5bc9e0",
          userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
          type: "text",
          payload: {text: "I've been good. And you?"},
          created: "2017-08-24T10:19:28Z",
        }
      }
      myUserId="00581ea9-3547-4c81-930c-a3ed042e4b21"
      user={
        {
          userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
          name: "Lee",
          pictureUrl: "http://www.material-ui.com/images/ok-128.jpg",
        }
      }
    />
    <TextItem
      message={
        {
          messageId: "cfc61df8-a792-4750-bce0-ec684f5bc9e0",
          userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
          type: "text",
          payload: {text: "I've been working all day."},
          created: "2017-08-24T10:19:28Z",
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
