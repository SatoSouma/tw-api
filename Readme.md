# ススット(スーパーの業務管理システム)の API

## 作品概要

### 初めに

- デモ動画、フロントエンド技術、制作理由に関しては[こちら](https://github.com/SatoSouma/susutto-frontend)をご覧ください。

### 各エンドポイントの説明

- **_`/create`_**
  > 指定された業務名、部署、期限、業務詳細の情報から業務の作成を行う。
- **_`/getAllTask`_**
  > ログインしている従業員の所属している部署に配布されている全ての業務と、自信が担当している業務の情報を取得。
- **_`/taskCharge`_**
  > 担当する業務の登録を行う。
- **_`/putStatus`_**
  > 業務が完了した事を登録する。
- **_`/getAdminTask`_**
  > 全ての業務情報の取得。
- **_`/login`_**
  > 一般従業員ログイン処理。
- **_`/adminLogin`_**
  > 管理者ログイン処理。
- **_`/taskFix`_**
  > 業務の期限を伸ばす処理を実行。

### 使用技術

#### バックエンド

- express
  - TypeScript
  - socket
- Docker(現在開発環境用になっていません。)

#### クラウド(現在はデプロイしていません。)

- [構成図](https://drive.google.com/file/d/1TH72FhdCfNKCxnFCq3JExqYpv1o0h6mD/view?usp=sharing)

#### 使用サービス

- appRunner(フロント・バック)
- ECR
- RDS(DB)

### 改善点・反省点

#### クラウド

- `appRunner`で済ませてしまったので、セキュリティやコストが担保できていない状態になってしまった。
- 理想として将来的に`ECS on Fargate`で構築したい。

#### バックエンド

- ディレクトリ構成で悩むことが多く、製作中も不安なままコードを書いてしまっていた。
- `Node`のサーバーサイドフレームワークである`Nest`を導入して、ディレクト構成に対しての不安解消を目指したい。
