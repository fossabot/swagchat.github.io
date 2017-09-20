# UIKit

## RoomSettingButtons

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/RoomSettingButtons/1.html" height="400"></iframe>

```js
import * as React from 'react';
import { RoomSettingButtons } from 'react-swagchat';

const RoomSettingButtonsExample = () => (
  <RoomSettingButtons
    title="Room Setting"
    userId="00581ea9-3547-4c81-930c-a3ed042e4b21"
    userBlocks={["500efdd3-2898-493e-bc14-d34750cc19d5", "7da9e9c6-d174-4ab5-86f8-99e727c710ff"]}
    room={{
      roomId: "83816cbe-4d49-4634-9c0c-85e38ffc15c3",
      userId: "00581ea9-3547-4c81-930c-a3ed042e4b21",
      name: "test234",
      pictureUrl: "http://localhost:9000/v0/assets/74669ec4-5ce7-45f3-85ea-2773d187b5f0.png",
      metaData: {},
      type: 2,
      lastMessage: "test",
      lastMessageUpdated: "2017-08-31T09:13:14Z",
      messageCount: 2,
      isCanLeft: true,
      isShowUsers: true,
      created: "2017-08-31T09:05:15Z",
      modified: "2017-08-31T09:50:42Z",
      users:[
        {userId:"00581ea9-3547-4c81-930c-a3ed042e4b21",name:"Williams",pictureUrl:"http://www.material-ui.com/images/ok-128.jpg",metaData:{},isCanBlock:true,isShowUsers:true,created:"2017-06-29T15:22:57Z",modified:"2017-06-29T15:22:57Z",ruUnreadCount:0,ruMetaData:{},ruCreated:"2017-08-31T09:05:15Z",ruModified:"2017-08-31T09:05:15Z"},
        {userId:"1e53e44f-4dd3-4da6-a236-aac43dbafb83",name:"Lewis",pictureUrl:"http://www.material-ui.com/images/adhamdannaway-128.jpg",metaData:{},isCanBlock:true,isShowUsers:true,created:"2017-06-29T17:16:44Z",modified:"2017-06-29T17:16:44Z",ruUnreadCount:2,ruMetaData:{},ruCreated:"2017-08-31T09:05:15Z",ruModified:"2017-08-31T09:05:15Z"},
        {userId:"f7463789-a127-430b-9cbb-4f1f45c073cc",name:"Perez",pictureUrl:"http://www.material-ui.com/images/adellecharles-128.jpg",metaData:{},isCanBlock:true,isShowUsers:true,created:"2017-06-29T17:18:35Z",modified:"2017-06-29T17:18:35Z",ruUnreadCount:2,ruMetaData:{},ruCreated:"2017-08-31T09:05:15Z",ruModified:"2017-08-31T09:05:15Z"}
      ]
    }}
    onItemTap={() => alert("hello")}
  />
);
```
