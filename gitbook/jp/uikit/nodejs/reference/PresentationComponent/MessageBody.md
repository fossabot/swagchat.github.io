# UIKit

## MessageBody

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/MessageBody/1.html" height="650"></iframe>

```js
import * as React from 'react';
import { MessageBody } from 'react-swagchat';

const MessageBodyExample = () => (
  <div className="horizontal">
    <MessageBody
      pluginMessages={[new Sc.PluginMessageText, new Sc.PluginMessageImage]}
      myUserId="00581ea9-3547-4c81-930c-a3ed042e4b21"
      roomUsers={
        {
          ["00581ea9-3547-4c81-930c-a3ed042e4b21"]: {
            userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
            name: "Williams",
            pictureUrl: "http://www.material-ui.com/images/ok-128.jpg"
          },
          ["7da9e9c6-d174-4ab5-86f8-99e727c710ff"]: {
            userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
            name: "Lee",
            pictureUrl: "http://www.material-ui.com/images/ok-128.jpg"
          },
        }
      }
      messages={
        {
          ["61952241-48c8-4cdd-9fe2-ab61b8bf9c55"]: {
            messageId: "61952241-48c8-4cdd-9fe2-ab61b8bf9c55",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
            type: "text",
            payload: {
              text: "How've you been recently?"
            },
            created: "2017-06-30T11:39:31Z"
          },
          ["9d79f275-a80c-41ae-aa26-0631d94486b4"]: {
            messageId: "9d79f275-a80c-41ae-aa26-0631d94486b4",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
            type: "text",
            payload: {
              text: "I've been good. And you?"
            },
            created: "2017-06-30T11:42:09Z"
          },
          ["d26c3d0e-7568-49be-ada7-e9e2ef023cda"]: {
            messageId: "d26c3d0e-7568-49be-ada7-e9e2ef023cda",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
            type: "text",
            payload: {
              text: "I've been working all day."
            },
            created: "2017-06-30T11:46:15Z"
          },
          ["7ecc5c82-8861-4161-9d18-98dc4f160976"]: {
            messageId: "7ecc5c82-8861-4161-9d18-98dc4f160976",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
            type: "text",
            payload: {
              text: "Don't push yourself too hard. You should get some rest."
            },
            created: "2017-06-30T11:46:44Z"
          },
          ["00dfce2d-2635-4adf-b999-3e0f0bddabb6"]: {
            messageId: "00dfce2d-2635-4adf-b999-3e0f0bddabb6",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "7da9e9c6-d174-4ab5-86f8-99e727c710ff",
            type: "text",
            payload: {
              text: "By the way, recently I started keeping dogs."
            },
            created: "2017-06-30T12:05:56Z"
          },
          ["21af4ffd-71c7-4c3d-bf06-511f6da00100"]: {
            messageId: "fd10d8f2-1924-4398-bac0-d941b4c6f512",
            roomId: "821d92d7-4a68-452a-b660-51379544cec4",
            userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
            type: "text",
            payload: {
              text: "That's nice."
            },
            created: "2017-08-15T08:19:26Z"
          },
        }
      }
      noMessageImage=""
      noMessageText="No messages."
    />
  </div>
);
```

| キー | 型 |　デフォルト | 説明 |
| ------------- | ------------- |
| count | number | | バッジカウント |
| className | string | | クラス名 |
