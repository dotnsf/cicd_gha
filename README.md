# CI/CD with GHA(GitHub Actions)


## Overview

[GitHub Actions](https://docs.github.com/ja/actions/learn-github-actions) を用いた CI/CD サンプル


## How to use sample application

- アプリケーション起動後に（必要であれば message パラメータを指定して）以下にアクセスします:

  -  `http://xxxxxxxxxx:8080/(?message=メッセージ)`

  - パラメータ: message(default = 'Hello World')

- 以下のような結果が表示されます:

  - `{ "status": true, message: "Hello World" }`


## Samples

- `.github/workflows/deploy_to_heroku.yml`

  - **heroku** 環境へのデプロイサンプル

  - GitHub リポジトリに `HEROKU_API_KEY` という名前で API KEY を、`HEROKU_EMAIL` という名前で heroku のメールアドレスをそれぞれシークレット登録する必要あり

  - `heroku_app_name` に heroku 上のアプリケーション名を指定する（または変数化してシークレットに指定する）

    - API KEY の取得は [こちら](https://dashboard.heroku.com/account) から


- `.github/workflows/deploy_to_dokku.yml`

  - **dokku** 環境へのデプロイサンプル

  - GitHub リポジトリに `SSH_PRIVATE_KEY` という名前で秘密鍵をシークレット登録する必要あり

  - **重要** アプリケーションプロジェクトに **Dockerfile** と **.dockerignore** が必要

  - **重要** 一度手作業でアプリを **事前に** デプロイしておく必要あり

    - `$ dokku apps:create cicd-gha`

    - http:80 を使う場合は、以下のコマンドを dokku 側で実行しておく必要あり

      - `$ dokku proxy:ports-add cicd-gha http:80:8080`

    - https:443 を使う場合は、以下のコマンドを dokku 側で実行しておく必要あり

      - `$ dokku letsencrypt:enable cicd-gha`

  - 手作業によるデプロイ後に `$ git push` で CICD を動かす


## Licensing

This code is licensed under MIT.


## Copyright

2022  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
