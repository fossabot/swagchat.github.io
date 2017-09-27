# Chat API

## 起動方法

Chat APIを起動するには以下の2つの方法があります。

1. Dockerで起動
1. 実行ファイルで直接起動

### dockerで起動

ローカル環境にDockerがインストールされていれば以下のコマンドで起動できます。

*DockerのインストールはDocker社のサイトに掲載されておりますのでインストールされていない方は[Install Docker](https://docs.docker.com/engine/installation/)の手順でインストールをして下さい。*

```
docker run swagchat/chat-api
```

デフォルトでTCPの9000番ポートをバインドするので既に他のサービスで利用されている場合は実行時パラメータにてポート番号を変更する事もできます。

```
docker run swagchat/chat-api -port 9001
```

### 実行ファイルで直接起動

Githubの[リリースページ](https://github.com/swagchat/chat-api/releases)より対象の実行ファイルをダウンロードして実行して下さい。

```
# macOSの場合
./swagchat-chat-api_darwin_amd64
```

デフォルトでTCPの9000番ポートをバインドするので既に他のサービスで利用されている場合は実行時パラメータにてポート番号を変更する事もできます。

```
# macOSの場合
./swagchat-chat-api_darwin_amd64 -port 9001
```

---

* [概要](./README.md)
* [リファレンス](./reference.md)
* [設定](./settings.md)
