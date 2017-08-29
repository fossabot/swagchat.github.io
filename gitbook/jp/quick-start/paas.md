# クイックスタート

## PaaSで起動

swagchatをPaaS環境で動かすには[Heroku](https://www.heroku.com/)がおすすめです。Herokuとはセールスフォース・ドットコムが提供しているPaaSです。料金体系は[こちら](https://www.heroku.com/pricing)に記載されていますが、1アカウントにつき毎月550時間分（約23日分）は無料で利用できます。(2017年9月1日時点)

それではHerokuを使ってswagchatを稼働させてみましょう。

### まずはChat APIを起動

1. 事前にHerokuアカウントを作成して下さい
1. <a href="https://heroku.com/deploy?template=https://github.com/fairway-corp/swagchat-chat-api"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Chat API Deploy"></a>をクリックして下さい
1. 「Create New App」画面が開くので一番下の「Deploy」ボタンをクリックして下さい（※App Nameは任意で設定して下さい）
1. デプロイが完了したら（約1分）画面下に「View」ボタンが表示されるのでそれをクリックするとチャットのサンプルデータが入った状態でswagchatのデフォルトの画面が表示されます


ただしこの状態ではリアルタイム通信が行えない状態です。
RTM APIを利用してリアルタイム通信を行うにはさらに以下の手順を行って下さい。

### リアルタイム通信を行う為にRTM APIを起動

1. <a href="https://heroku.com/deploy?template=https://github.com/fairway-corp/swagchat-rtm-api"><img src="https://www.herokucdn.com/deploy/button.svg" alt="RTM API Deploy"></a>をクリックして下さい
1. 「Create New App」画面が開くので一番下の「Deploy」ボタンをクリックして下さい（※App Nameは任意で設定して下さい）
1. デプロイが完了したら（約1分）画面下に「View」ボタンが表示されるのでそれをクリックするとチャットのサンプルデータが入った状態でswagchatのデフォルトの画面が表示されます
1. さきほど起動したChat APIのSettingsの画面に遷移して下さい
1. 以下の環境変数を設定して下さい
