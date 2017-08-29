# Chat API

## 設定

Chat APIは設定によりアプリケーションの挙動を変更する事ができます。
設定方法は3パターンあります

1. yamlによる設定ファイル
1. 環境変数
1. 実行時パラメータ

設定ファイルを利用する場合は実行ファイルがあるディレクトリに`config/swagchat.yaml`というパスで作成して下さい。
サンプルは[example.swagchat.yaml](https://github.com/fairway-corp/swagchat-chat-api/blob/master/config/example.swagchat.yaml)をご参照下さい。
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
| `local` | ローカルストレージ（デフォルト）※Chat APIが稼働しているホスト自身のファイルシステムを使用します。これを設定した場合は`baseUrl` ` localPath`を設定する必要があります。 |
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
  gcpProjectId: assets

# 環境変数での設定
SC_STORAGE_GCP_PROJECT_ID=assets

# 実行時パラメータでの設定
-storage.gcpProjectId assets
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
