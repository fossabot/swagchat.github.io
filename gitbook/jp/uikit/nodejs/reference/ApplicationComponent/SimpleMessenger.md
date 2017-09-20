# UIKit

## SimpleMessenger

```js
import * as React from 'react';
import { SimpleMessenger } from 'react-swagchat';

const SimpleMessengerSample = () => (
  <SimpleMessenger
    userId="00581ea9-3547-4c81-930c-a3ed042e4b21"
    apiEndpoint="http://localhost:9000/v0"
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
|userId|string||✔|ユーザID|
|userAccessToken|string||✔|ユーザアクセストークン|
|apiEndpoint|string||✔|Chat APIのエンドポイント <span class="property-example">例　`http://localhost:9000/v0`</span>|
|apiKey|string|||Chat APIにリクエストする際に必要なAPIキー（Chat API起動時の設定により必須かそうでないかが選択できる）|
|rtmProtocol|string|||RTM APIのプロトコル<br />`ws`<br />`wss`|
|rtmHost|string|||RTM APIのホスト名（ポート番号含む）<span class="property-example">例　`localhost:9100`</span>|
|rtmPath|string|||RTM APIのエンドポイントパス <span class="property-example">例　`/v0`</span>|
|renderDomId|string|`swagchat`||レンダリングするDOMのID|
