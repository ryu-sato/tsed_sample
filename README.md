# tsed-sample

Ts.ED を使って API (RESTful API) を実装したサンプルアプリケーション。

API 実装のみであり特別なことはしていない。

# 関連情報

- [Ts.ED](https://tsed.io)


# 開発スタートアップ

## 初回実行

Node.js, npm, yarn を package.json の engines に併せてインストールする

```batch
# install dependencies
$ yarn install

# Inisitalize DB schema
$ yarn run prisma:migrate

# serve
$ yarn start
```

# 本番環境

```batch
$ yarn build
$ yarn start:prod
```
