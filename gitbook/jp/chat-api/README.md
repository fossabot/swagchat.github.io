# Chat API

## 概要

Chat APIはチャットアプリケーションに必要なのルームやユーザの管理を行う為のREST APIです。
ステートレスなAPIなので水平スケールが可能です。

特定のデータベースやストレージに依存しないように設計されており現在は以下のプロダクトが利用可能です。
利用するプロダクトの設定はyamlによるファイルや環境変数、実行時パラメータで設定が可能です。設定できる内容は他にも数多くありますので詳細は[設定](settings.md)をご参照下さい。

本プロダクトのソフトウェアライセンスは[MIT License](https://github.com/fairway-corp/swagchat-chat-api/blob/master/LICENSE)となっております。

#### データベース

* [SQLite](https://sqlite.org/index.html)
* [MySQL](https://www.mysql.com)
* [Google Cloud SQL](https://cloud.google.com/sql/)

#### ストレージ

* ローカルファイルシステム
* [Google Cloud Storage](https://cloud.google.com/storage/)
* [Amazon S3](https://aws.amazon.com/s3)

#### メッセージキュー

* [NSQ](http://nsq.io/)

#### プッシュ通知

* [Amazon SNS](https://aws.amazon.com/jp/sns/)

***

Chat APIはGo言語で実装されています。

#### Go言語のバージョン

1.7以上

#### パッケージ管理

[Godep](https://github.com/tools/godep)
