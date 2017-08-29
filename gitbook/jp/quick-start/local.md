# クイックスタート

## ローカル環境で起動

Chat APIとRTM APIを連携させて起動するには[docker-compose](https://docs.docker.com/compose/)がおすすめです。docker-composeとは複数のコンテナで構成されるDockerアプリケーションの設定を記述し実行するためのツールで、Docker社によって提供されています。１つのアプリケーションが複数のコンテナを必要とする場合、単一ホストで起動するのであればdocker-composeは最適なツールです。
Chat APIとRTM APIを連携させるのはChat APIのコンテナとRTM APIのコンテナ、及びその他のミドルウェアのコンテナを稼働させる必要があるので
ローカル環境で稼働させるにはdocker-composeが一番スムーズです。

*docker-composeのインストールはDocker社のサイトに掲載されておりますのでインストールされていない方は[Install Docker Compose](https://docs.docker.com/compose/install/)の手順でインストールをして下さい。docker-composeのインストールが完了するとdocker-composeコマンドが利用できるようになります。*

swagchatをdocker-composeを利用してデプロイする為のリポジトリをGithubに用意しておりますのでデプロイはそちらを参考にして下さい。

[swagchat-docker-compose](https://github.com/fairway-corp/swagchat-docker-compose)
