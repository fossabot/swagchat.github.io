# RTM API (Real Time Messaging API)

## 概要

RTM APIはチャットアプリケーションにリアルタイム性を持たせる為に必要なAPIです。
WebSocketを利用している為、クライアントと直接コネクションを張ります。よって水平スケールする為にバックエンドにPub/Subモデルのメッセージキューが必要となり、swagchatでは[NSQ](http://nsq.io/)を利用します。

なお、RTM APIはオンメモリで動くアプリケーションなのでデータベースは利用しておりません。

本プロダクトのソフトウェアライセンスは[MIT License](https://github.com/fairway-corp/swagchat-rtm-api/blob/master/LICENSE)となっております。

***

RTM APIはGo言語で実装されています。

#### Go言語のバージョン

1.7以上

#### パッケージ管理

[Godep](https://github.com/tools/godep)
