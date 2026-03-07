# 🍆 Nasubiman Portfolio

Nasubimanの個人ポートフォリオサイトです。  
学歴・スキル・コンペティション実績・制作物などをまとめて紹介しています。

## ✨ 主な機能

- **About** — 自己紹介、所属研究室・部活動、GitHubリンク
- **Resume** — 学歴（京都工芸繊維大学）のタイムライン表示
- **Skills** — 習得している技術スタック一覧（Python, C++, TypeScript, Go など）
- **My Work** — コンペティション実績（Kaggle 🥈 / Nishika 🥇 / SIGNATE 🥉 / AtCoder）
- **Products** — 制作物の詳細紹介（ナス葉病気検知モデル など）

## 🛠️ 技術スタック

| カテゴリ | 技術 |
| --- | --- |
| フレームワーク | [Next.js](https://nextjs.org/) (App Router) |
| 言語 | TypeScript |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) v4 |
| ホスティング | [Vercel](https://vercel.com/) |

## 🚀 ローカルで動かす

開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとサイトが表示されます。

`app/page.tsx` を編集すると、ページがリアルタイムで自動更新されます。

## 📁 ディレクトリ構成

```
.
├── app/
│   ├── globals.css      # グローバルCSS（Tailwind設定含む）
│   ├── layout.tsx       # 全ページ共通のレイアウト
│   └── page.tsx         # メインのポートフォリオページ
├── public/              # 静的ファイル（画像など）
├── next.config.ts       # Next.js設定
├── package.json
└── tsconfig.json
```

## 📝 ライセンス

© 2025 Nasubiman. All Rights Reserved.
