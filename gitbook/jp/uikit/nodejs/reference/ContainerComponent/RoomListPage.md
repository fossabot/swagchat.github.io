# UIKit

## RoomListPage

<iframe class="code" src="../../../../../uikit-sample/ContainerComponent/RoomListPage/1.html" height="600"></iframe>

```js
import * as React from 'react';
import { RoomListPage } from 'react-swagchat';

const RouteRoomListPageExample = () => (
  <RouteRoomListPage
    userId="00581ea9-3547-4c81-930c-a3ed042e4b21"
    apiEndpoint="http://localhost:9000/v0"
    rtmProtocol="wss"
    rtmHost="localhost:9100"
    rtmPath="/v0"
    roomListRoutePath="/"
  />,
);
```
