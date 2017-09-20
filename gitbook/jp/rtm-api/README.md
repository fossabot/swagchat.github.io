# RTM API (Real Time Messaging API)

## 概要

RTM APIはチャットアプリケーションにリアルタイム性を持たせる為に必要なAPIです。
WebSocketを利用している為、クライアントと直接コネクションを張ります。よって水平スケールする為にバックエンドにPub/Subモデルのメッセージキューが必要となり、swagchatでは[NSQ](http://nsq.io/)を利用します。

なお、RTM APIはオンメモリで動くアプリケーションなのでデータベースは利用しておりません。

---

* [起動方法](./launch.md)
