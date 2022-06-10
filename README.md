# CI/CD with GHA(GitHub Actions)


## Overview

[GitHub Actions](https://docs.github.com/ja/actions/learn-github-actions) を用いた CI/CD サンプル


## Samples

- `.github/workflows/deploy_to_heroku.yml`

  - **heroku** 環境へのデプロイサンプル

  - GitHub リポジトリに `HEROKU_API_KEY` という名前で API KEY を、`HEROKU_EMAIL` という名前で heroku のメールアドレスをそれぞれシークレット登録する必要あり

    - API KEY の取得は [こちら](https://dashboard.heroku.com/account) から


- `.github/workflows/deploy_to_dokku.yml`

  - **dokku** 環境へのデプロイサンプル

  - GitHub リポジトリに `SSH_PRIVATE_KEY` という名前で秘密鍵をシークレット登録する必要あり

  - http:80 を使う場合は、以下のコマンドをあらかじめ dokku 側で実行しておく必要あり

    - `$ dokku proxy:ports-add cicd-gha http:80:8080`

  - https:443 を使う場合は、以下のコマンドをあらかじめ dokku 側で実行しておく必要あり

    - `$ dokku letsencrypt:enable cicd-gha`


## Licensing

This code is licensed under MIT.


## Copyright

2022  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
