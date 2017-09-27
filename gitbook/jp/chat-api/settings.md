# Chat API

## 設定

Chat APIは設定によりアプリケーションの挙動を変更する事ができます。
設定方法は3パターンあります

1. yamlによる設定ファイル
1. 環境変数
1. 実行時パラメータ

設定ファイルを利用する場合は実行ファイルがあるディレクトリに`config/swagchat.yaml`というパスで作成して下さい。
サンプルは[example.swagchat.yaml](https://github.com/swagchat/chat-api/blob/master/config/example.swagchat.yaml)をご参照下さい。
また環境変数は他のプロダクトと衝突しないように`SC_`というプレフィックスを付与する形式をとっています。

設定できる内容は以下の通りです。

### port

TCPリッスンポートを設定できます。デフォルトは 9000 です。

```yaml
# yamlでの設定
port: 9000

# 環境変数での設定
SC_PORT=9000

# 実行時パラメータでの設定
-port 9000
```

### profiling

Go言語の標準ライブラリである net/http/pprofを利用してプロファイリング結果をwebで参照できるようにする設定ができます。

**Pprof API**

```
/debug/pprof               ポータル
/debug/pprof/profile       CPU プロファイル
/debug/pprof/goroutine     goroutine プロファイル
/debug/pprof/heap          ヒーププロファイル
/debug/pprof/block         ブロッキングプロファイル
/debug/pprof/threadcreate  OS スレッドプロファイル
```


| 設定値 | 内容 |
| ------------- | ------------- |
| `true` | オン |
| `false` | オフ（デフォルト） |

```yaml
# yamlでの設定
profiling: true

# 環境変数での設定
SC_PROFILING=true

# 実行時パラメータでの設定
-profiling true
```

### demoPage

ルートパスにアクセスした時にデモページを出力するかどうかを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| `true` | オン |
| `false` | オフ（デフォルト） |

```yaml
# yamlでの設定
demoPage: true

# 環境変数での設定
SC_DEMO_PAGE=true

# 実行時パラメータでの設定
-demoPage true
```

### errorLogging

エラーログを標準出力に出力する設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| `true` | オン |
| `false` | オフ（デフォルト） |

```yaml
# yamlでの設定
errorLogging: true

# 環境変数での設定
SC_ERROR_LOGGING=true

# 実行時パラメータでの設定
-errorLogging true
```

### logging.level

ロギングレベルを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| production | プロダクションレベル |
| development | 開発レベル（デフォルト） |

```yaml
# yamlでの設定
logging:
  level: development

# 環境変数での設定
SC_LOGGING_LEVEL=development

# 実行時パラメータでの設定
-logging.level development
```


### storage.provider

ストレージとして利用するプロダクトを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| `local` | ローカルストレージ（デフォルト）※Chat APIが稼働しているホスト自身のファイルシステムを使用します。これを設定した場合は`storage.baseUrl` ` storage.localPath`を設定する必要があります。 |
| `gcpStorage` | [Google Cloud Storage](https://cloud.google.com/storage/)を使用します。これを設定した場合は`storage.gcpProjectId`  `storage.gcpJwtPath` `storage.uploadBucket` `storage.uploadDirectory` `storage.thumbnailBucket` `storage.thumbnailDirectory`を設定する必要があります。 |
| `awsS3` | [Amazon S3](https://aws.amazon.com/s3)を使用します。これを設定した場合は`storage.accessKeyId`  `storage.secretAccessKey` `storage.region` `storage.uploadBucket` `storage.uploadDirectory` `storage.thumbnailBucket` `storage.thumbnailDirectory`を設定する必要があります。 |

```yaml
# yamlでの設定
storage:
  provider: local

# 環境変数での設定
SC_STORAGE_PROVIDER=local

# 実行時パラメータでの設定
-storage.provider local
```

### storage.baseUrl

ストレージプロバイダーが`local`の場合に画像のベースURLを設定します。デフォルトは`http://localhost:[port]/v0/assets`です。

```yaml
# yamlでの設定
storage:
  baseUrl: http://localhost:9000/v0/assets

# 環境変数での設定
SC_STORAGE_BASE_URL=http://localhost:9000/v0/assets

# 実行時パラメータでの設定
-storage.baseUrl http://localhost:9000/v0/assets
```

### storage.localPath

ストレージプロバイダーが`local`の場合に画像の保存先パスを設定します。デフォルトは`data/assets`です。

```yaml
# yamlでの設定
storage:
  localPath: data/assets

# 環境変数での設定
SC_STORAGE_LOCAL_PATH=data/assets

# 実行時パラメータでの設定
-storage.localPath data/assets
```

### storage.uploadBucket

ストレージプロバイダーが`gcpStorage` `awsS3`の場合に元画像を保存するバケット名を設定します。

```yaml
# yamlでの設定
storage:
  uploadBucket: swagchat.io

# 環境変数での設定
SC_STORAGE_UPLOAD_BUCKET=swagchat.io

# 実行時パラメータでの設定
-storage.uploadBucket swagchat.io
```

### storage.uploadDirectory

ストレージプロバイダーが`gcpStorage` `awsS3`の場合に元画像を保存するディレクトリ名を設定します。

```yaml
# yamlでの設定
storage:
  uploadDirectory: assets

# 環境変数での設定
SC_STORAGE_UPLOAD_DIRECTORY=assets

#実行時パラメータでの設定
-storage.uploadDirectory assets
```

### storage.thumbnailBucket

ストレージプロバイダーが`gcpStorage` `awsS3`の場合にサムネイル画像を保存するバケット名を設定します。

```yaml
# yamlでの設定
storage:
  thumbnailBucket: swagchat.io

# 環境変数での設定
SC_STORAGE_THUMBNAIL_BUCKET=swagchat.io

# 実行時パラメータでの設定
-storage.thumbnailBucket swagchat.io
```

### storage.thumbnailDirectory

ストレージプロバイダーが`gcpStorage` `awsS3`の場合にサムネイル画像を保存するディレクトリ名を設定します。

```yaml
# yamlでの設定
storage:
  thumbnailDirectory: assets

# 環境変数での設定
SC_STORAGE_THUMBNAIL_DIRECTORY=assets

# 実行時パラメータでの設定
-storage.thumbnailDirectory assets
```

### storage.gcpProjectId

ストレージプロバイダーが`gcpStorage`の場合に対象のGoogle Cloud StorageのプロジェクトIDを設定します。

```yaml
# yamlでの設定
storage:
  gcpProjectId: GCP_PROJECT_ID

# 環境変数での設定
SC_STORAGE_GCP_PROJECT_ID=GCP_PROJECT_ID

# 実行時パラメータでの設定
-storage.gcpProjectId GCP_PROJECT_ID
```

### storage.gcpJwtPath

ストレージプロバイダーが`gcpStorage`の場合に対象のGoogle Cloud StorageのJWTのファイルパスを設定します。

```yaml
# yamlでの設定
storage:
  gcpJwtPath: assets

# 環境変数での設定
SC_STORAGE_GCP_JWT_PATH=assets

# 実行時パラメータでの設定
-storage.gcpJwtPath assets
```

### storage.awsRegion

ストレージプロバイダーが`awsS3`の場合に対象のAmazon S3のリージョンを設定します。

```yaml
# yamlでの設定
storage:
  awsRegion: ap-northeast-1

# 環境変数での設定
SC_STORAGE_AWS_REGION=ap-northeast-1

# 実行時パラメータでの設定
-storage.awsRegion ap-northeast-1
```

### storage.awsAccessKeyId

ストレージプロバイダーが`awsS3`の場合に対象のAmazon S3のIAMのアクセスキーを設定します。

```yaml
# yamlでの設定
storage:
  awsAccessKeyId: YOUR_ACCESS_KEY_ID

# 環境変数での設定
SC_STORAGE_AWS_REGION=YOUR_ACCESS_KEY_ID

# 実行時パラメータでの設定
-storage.awsAccessKeyId YOUR_ACCESS_KEY_ID
```

### storage.awsSecretAccessKey

ストレージプロバイダーが`awsS3`の場合に対象のAmazon S3のIAMのシークレットアクセスキーを設定します。

```yaml
# yamlでの設定
storage:
  awsSecretAccessKey: YOUR_SECRET_ACCESS_KEY

# 環境変数での設定
SC_STORAGE_AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY

# 実行時パラメータでの設定
-storage.awsSecretAccessKey YOUR_SECRET_ACCESS_KEY
```


### datastore.provider

データストアとして利用するプロダクトを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| `sqlite` | [SQLite](https://sqlite.org/index.html)を使用します。（デフォルト）これを設定した場合は`datastore.tableNamePrefix` ` datastore.sqlitePath`を設定する必要があります。 |
| `mysql` | [MySQL](https://www.mysql.com)を使用します。これを設定した場合は `datastore.tableNamePrefix` `datastore.user`  `datastore.password` `datastore.database` `datastore.masterHost` `datastore.masterPort` `datastore.slaveHost` `datastore.slavePort` `datastore.maxIdleConnection` `datastore.maxOpenConnection` `datastore.useSSL` `datastore.serverName` `datastore.serverCaPath` `datastore.clientCertPath` `datastore.clientKeyPath` を設定する必要があります。 |
| `gcpSql` | [Google Cloud SQL](https://cloud.google.com/sql/)を使用します。これを設定した場合は `datastore.tableNamePrefix` `datastore.user`  `datastore.password` `datastore.database` `datastore.masterHost` `datastore.masterPort` `datastore.slaveHost` `datastore.slavePort` `datastore.maxIdleConnection` `datastore.maxOpenConnection` `datastore.useSSL` `datastore.serverName` `datastore.serverCaPath` `datastore.clientCertPath` `datastore.clientKeyPath` `datastore.gcpProjectId` を設定する必要があります。 |

```yaml
# yamlでの設定
datastore:
  provider: sqlite

# 環境変数での設定
SC_DATASTORE_PROVIDER=sqlite

# 実行時パラメータでの設定
-datastore.provider sqlite
```

### datastore.tableNamePrefix

テーブル名のプレフィックスを指定します。

```yaml
# yamlでの設定
datastore:
  tableNamePrefix: sc_

# 環境変数での設定
SC_DATASTORE_TABLE_NAME_PREFIX=sc_

# 実行時パラメータでの設定
-datastore.tableNamePrefix sc_
```

### datastore.sqlitePath

データストアプロバイダーが`sqlite`の場合に画像のベースURLを設定します。デフォルトは`/tmp/swagchat.db`です。

```yaml
# yamlでの設定
datastore:
  sqlitePath: /tmp/swagchat.db

# 環境変数での設定
SC_DATASTORE_SQLITE_PATH=/tmp/swagchat.db

# 実行時パラメータでの設定
-datastore.sqlitePath /tmp/swagchat.db
```

### datastore.user

データベース接続ユーザのパスワードを指定します。

```yaml
# yamlでの設定
datastore:
  user: YOUR_USER_NAME

# 環境変数での設定
SC_DATASTORE_USER=YOUR_USER_NAME

# 実行時パラメータでの設定
-datastore.user YOUR_USER_NAME
```

### datastore.password

データベース接続ユーザのパスワードを指定します。

```yaml
# yamlでの設定
datastore:
  password: YOUR_PASSWORD

# 環境変数での設定
SC_DATASTORE_PASSWORD=YOUR_PASSWORD

# 実行時パラメータでの設定
-datastore.password YOUR_PASSWORD
```

### datastore.database

データベース名を指定します。

```yaml
# yamlでの設定
datastore:
  database: YOUR_DATABASE_NAME

# 環境変数での設定
SC_DATASTORE_DATABASE=YOUR_PASSWORD

# 実行時パラメータでの設定
-datastore.database YOUR_PASSWORD
```


### datastore.masterHost

マスターのデータベースサーバのホスト名、もしくはIPアドレスを指定します。

```yaml
# yamlでの設定
datastore:
  masterHost: MASTER_HOST_NAME

# 環境変数での設定
SC_DATASTORE_MASTER_HOST=MASTER_HOST_NAME

# 実行時パラメータでの設定
-datastore.masterHost MASTER_HOST_NAME
```

### datastore.masterPort

マスターのデータベースサーバのポート番号を指定します。

```yaml
# yamlでの設定
datastore:
  masterPort: MASTER_PORT_NO

# 環境変数での設定
SC_DATASTORE_MASTER_PORT=MASTER_PORT_NO

# 実行時パラメータでの設定
-datastore.masterPort MASTER_PORT_NO
```

### datastore.slaveHost

スレーブのデータベースサーバのホスト名、もしくはIPアドレスを指定します。スレーブサーバが複数ある場合はDNS等で解決して下さい。スレーブサーバのロードバランスはアプリケーションの責務ではありません。

```yaml
# yamlでの設定
datastore:
  slaveHost: SLAVE_HOST_NAME

# 環境変数での設定
SC_DATASTORE_SLAVE_HOST=SLAVE_HOST_NAME

# 実行時パラメータでの設定
-datastore.slaveHost SLAVE_HOST_NAME
```

### datastore.slavePort

スレーブのデータベースサーバのポート番号を指定します。

```yaml
# yamlでの設定
datastore:
  slavePort: SLAVE_PORT_NO

# 環境変数での設定
SC_DATASTORE_SLAVE_PORT=SLAVE_PORT_NO

# 実行時パラメータでの設定
-datastore.slavePort SLAVE_PORT_NO
```

### datastore.maxIdleConnection

アイドル接続プール内の最大接続数を設定します。詳細は(こちら)[https://golang.org/pkg/database/sql/#DB.SetMaxIdleConns]を参照して下さい。
デフォルトは`10`です。

```yaml
# yamlでの設定
datastore:
  maxIdleConnection: 10

# 環境変数での設定
SC_DATASTORE_MAX_IDLE_CONNECTION=10

# 実行時パラメータでの設定
-datastore.maxIdleConnection 10
```
### datastore.maxOpenConnection

データベースへの最大接続数を設定します。詳細は(こちら)[https://golang.org/pkg/database/sql/#DB.SetMaxOpenConns]を参照して下さい。
デフォルトは`10`です。

```yaml
# yamlでの設定
datastore:
  maxOpenConnection: 10

# 環境変数での設定
SC_DATASTORE_MAX_OPEN_CONNECTION=10

# 実行時パラメータでの設定
-datastore.maxOpenConnection 10
```

### datastore.useSSL
### datastore.serverName
### datastore.serverCaPath
### datastore.clientCertPath
### datastore.clientKeyPath


### datastore.gcpProjectId

デーテストアプロバイダーが`gcpSql`の場合に対象のGoogle Cloud SQLのプロジェクトIDを設定します。

```yaml
# yamlでの設定
datastore:
  gcpProjectId: GCP_PROJECT_ID

# 環境変数での設定
SC_DATASTORE_GCP_PROJECT_ID=GCP_PROJECT_ID

# 実行時パラメータでの設定
-datastore.gcpProjectId GCP_PROJECT_ID
```

### rtm.provider

RTM APIにリクエストを送信する際のプロダクトを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| 空文字 | RTM APIにリクエストを送信しません。 |
| `direct` | 直接RTM APIサーバにリクエストを送信します。これを設定した場合は`rtm.directEndpoint`を設定する必要があります。 |
| `nsq` | [NSQ](http://nsq.io/)を使用します。これを設定した場合は`rtm.queEndpoint`  `rtm.queTopic`を設定する必要があります。 |

```yaml
# yamlでの設定
rtm:
  provider: direct

# 環境変数での設定
SC_RTM_PROVIDER=direct

# 実行時パラメータでの設定
-rtm.provider direct
```

### rtm.directEndpoint

RTMプロバイダーが`direct`の場合にRTM APIのエンドポイントを設定します。

```yaml
# yamlでの設定
rtm:
  directEndpoint: http://localhost:9100/v0

# 環境変数での設定
SC_RTM_DIRECT_ENDPOINT=http://localhost:9100/v0

# 実行時パラメータでの設定
-rtm.directEndpoint http://localhost:9100/v0
```

### rtm.queEndpoint

RTMプロバイダーが`nsq`の場合にnsqdのエンドポイントを設定します。

```yaml
# yamlでの設定
rtm:
  queEndpoint: http://localhost:4151

# 環境変数での設定
SC_RTM_QUE_ENDPOINT=http://localhost:4151

# 実行時パラメータでの設定
-rtm.queEndpoint http://localhost:4151
```

### rtm.queTopic

RTMプロバイダーが`nsq`の場合にRTM API用のトピック名を設定します。

```yaml
# yamlでの設定
rtm:
  queTopic: QUT_TOPIC_NAME

# 環境変数での設定
SC_RTM_QUE_TOPIC=QUT_TOPIC_NAME

# 実行時パラメータでの設定
-rtm.queTopic QUT_TOPIC_NAME
```

### notification.provider

プッシュ通知を行うプロダクトを設定できます。

| 設定値 | 内容 |
| ------------- | ------------- |
| 空文字 | プッシュ通知を利用しません。 |
| `awsSns` | [Amazon SNS](https://aws.amazon.com/jp/sns/)を使用します。これを設定した場合は`notification.roomTopicNamePrefix` `notification.defaultBadgeCount` `notification.awsRegion` `notification.awsAccessKeyId` `notification.awsSecretAccessKey` `notification.awsApplicationArnIos` `notification.awsApplicationArnAndroid` を設定する必要があります。 |

```yaml
# yamlでの設定
notification:
  provider: direct

# 環境変数での設定
SC_NOTIFICATION_PROVIDER=direct

# 実行時パラメータでの設定
-notification.provider direct
```

### notification.roomTopicNamePrefix

プッシュ通知を行う際に設定するトピック名のプレフィックスを設定します。

```yaml
# yamlでの設定
notitication:
  roomTopicNamePrefix: ROOM_TOPIC_NAME_PREFIX

# 環境変数での設定
SC_NOTIFICATION_ROOM_TOPIC_NAME_PREFIX=ROOM_TOPIC_NAME_PREFIX

# 実行時パラメータでの設定
-notitication.roomTopicNamePrefix ROOM_TOPIC_NAME_PREFIX
```

### notification.defaultBadgeCount

プッシュ通知を行った時にサーバ側から送信するバッジカウントのデフォルトを設定します。

```yaml
# yamlでの設定
notitication:
  defaultBadgeCount: ROOM_TOPIC_NAME_PREFIX

# 環境変数での設定
SC_NOTIFICATION_DEFAULT_BADGE_COUNT=ROOM_TOPIC_NAME_PREFIX

# 実行時パラメータでの設定
-notitication.defaultBadgeCount ROOM_TOPIC_NAME_PREFIX
```

### notification.awsRegion

プッシュ通知プロバイダーが`awsSns`の場合に対象のAmazon SNSのリージョンを設定します。

```yaml
# yamlでの設定
notification:
  awsRegion: ap-northeast-1

# 環境変数での設定
SC_NOTIFICATION_AWS_REGION=ap-northeast-1

# 実行時パラメータでの設定
-notification.awsRegion ap-northeast-1
```

### notification.awsAccessKeyId

プッシュ通知プロバイダーが`awsSns`の場合に対象のAmazon SNSのIAMのアクセスキーを設定します。

```yaml
# yamlでの設定
notification:
  awsAccessKeyId: YOUR_ACCESS_KEY_ID

# 環境変数での設定
SC_NOTIFICATION_AWS_REGION=YOUR_ACCESS_KEY_ID

# 実行時パラメータでの設定
-notification.awsAccessKeyId YOUR_ACCESS_KEY_ID
```

### notification.awsSecretAccessKey

プッシュ通知プロバイダーが`awsSns`の場合に対象のAmazon SNSのIAMのシークレットアクセスキーを設定します。

```yaml
# yamlでの設定
notification:
  awsSecretAccessKey: YOUR_SECRET_ACCESS_KEY

# 環境変数での設定
SC_NOTIFICATION_AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY

# 実行時パラメータでの設定
-notification.awsSecretAccessKey YOUR_SECRET_ACCESS_KEY
```

### notification.awsApplicationArnIos

iOSへプッシュ通知を行う際に必要なAmazon SNS上の識別子を設定します。事前にAWSコンソールにて取得する必要があります。

```yaml
# yamlでの設定
notitication:
  awsApplicationArnIos: APPRICATION_ARN_IOS

# 環境変数での設定
SC_NOTIFICATION_AWS_APPLICATION_ARN_IOS=APPRICATION_ARN_IOS

# 実行時パラメータでの設定
-notitication.awsApplicationArnIos APPRICATION_ARN_IOS
```

### notification.awsApplicationArnAndroid

Androidへプッシュ通知を行う際に必要なAmazon SNS上の識別子を設定します。事前にAWSコンソールにて取得する必要があります。

```yaml
# yamlでの設定
notitication:
  awsApplicationArnAndroid: APPRICATION_ARN_ANDROID

# 環境変数での設定
SC_NOTIFICATION_AWS_APPLICATION_ARN_ANDROID=APPRICATION_ARN_ANDROID

# 実行時パラメータでの設定
-notitication.awsApplicationArnAndroid APPRICATION_ARN_ANDROID
```


















---

* [概要](./README.md)
* [起動方法](./launch.md)
* [リファレンス](./reference.md)
