# UIKit

## シンプルメッセンジャーのタグ設置方法

指定したルーム（1対1及びグループチャット）でのチャットができるメッセージ画面とルーム設定を行うだけのシンプルなチャットアプリケーションです。

事前にChat APIを起動しておく必要があります。また、リアルタイムコミュニケーションを行う為にはRTM APIも起動しておいて下さい。

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" type="text/css" media="all">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" type="text/css" media="all">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" type="text/css" media="all">
</head>
<body>
  <!-- Template: Messenger Start -->
  <div id="swagchat" />
  <script src="https://unpkg.com/react-swagchat/dist/react-swagchat.min.js"></script>
  <script>
    Swag.renderTemplateSimpleMessenger({
      // User info
      userId: 'USER_ID',
      userAccessToken: 'ACCESS_TOKEN',

      // Chat API Settings
      apiEndpoint: 'http://localhost:9000/v0',

      // RTM API Settings
      rtmProtocol: 'ws',
      rtmHost: 'localhost:9100',
      rtmPath: '/v0',
    });
  </script>
  <!-- Template: Messenger End -->
</body>
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
