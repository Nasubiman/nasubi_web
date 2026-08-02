"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

const skills = ["Python", "C++", "C#", "TypeScript", "Go", "Linux"];

const competitions = [
  {
    name: "SIGNATE",
    description: "第2回 国土交通省 地理空間情報データチャレンジ",
    result: "Bronze Medal",
    href: "https://user.competition.signate.jp/en/user/?user=75da792abc434981b8fd3a986a646510",
  },
  {
    name: "AtCoder",
    description: "競技プログラミングでのアルゴリズム構築",
    result: "",
    href: "https://atcoder.jp/users/NASUBIMAN",
  },
  {
    name: "Kaggle",
    description: "The 2026 NeuroGolf Championship — Silver Medal / Rank 138 of 3,061",
    result: "Kaggle Competitions Expert",
    href: "https://www.kaggle.com/yousukenakamura",
  },
  {
    name: "Kaggle",
    description: "Santa 2025 - Christmas Tree Packing Challenge",
    result: "Silver Medal / Rank 65 of 3,357 teams",
    href: "https://www.kaggle.com/yousukenakamura",
  },
  {
    name: "Nishika",
    description: "大手グローバル小売メーカーの商品PR文生成（LLM）",
    result: "Gold Medal / サービス終了",
  },
];

const trainingTechniques = [
  "Data Augmentation",
  "Label Smoothing (0.1)",
  "Cosine Annealing LR",
  "Weight Decay (0.05)",
  "RandomErasing",
  "ColorJitter",
];

const leafClasses = [
  ["0", "Healthy Leaf（健康な葉）"],
  ["1", "Insect Pest Disease（害虫）"],
  ["2", "Leaf Spot Disease（斑点病）"],
  ["3", "Mosaic Virus Disease（モザイク病）"],
  ["4", "Small Leaf Disease（小葉病）"],
  ["5", "White Mold Disease（白絹病）"],
  ["6", "Wilt Disease（萎凋病）"],
];

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 border-b border-neutral-300 pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
      {children}
    </h2>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border-b border-neutral-400 pb-0.5 text-sm text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950"
    >
      {children}
    </a>
  );
}

function ProductSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-neutral-200 pt-6">
      <h3 className="mb-4 text-base font-semibold text-neutral-900">{title}</h3>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"about" | "products">("about");

  return (
    <div className="min-h-screen bg-[#fafaf8] text-neutral-900 selection:bg-neutral-200">
      <header className="sticky top-0 z-50 border-b border-neutral-300 bg-[#fafaf8]">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Nasubiman
          </Link>
          <nav className="flex gap-6 text-sm" aria-label="Primary navigation">
            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`border-b py-1 transition-colors ${
                activeTab === "about"
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`border-b py-1 transition-colors ${
                activeTab === "products"
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Products
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        {activeTab === "about" && (
          <div className="space-y-20">
            <section>
              <p className="mb-5 text-sm text-neutral-500">Portfolio</p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Nasubiman</h1>
              <p className="mt-3 text-base text-neutral-500">Student / Engineer</p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-700">
                京都工芸繊維大学大学院M1。機械学習、最適化アルゴリズム、競技プログラミングなど幅広い分野に興味があります。
                Kaggle Competitions Expertとして、各種コンペティションに参加し、実践的な課題解決に取り組んでいます。
              </p>
              <p className="mt-3 text-sm text-neutral-500">京都工芸繊維大学 情報工学専攻</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <ExternalLink href="https://www.soc.is.kit.ac.jp/">馬研究室</ExternalLink>
                <ExternalLink href="https://www.fortefibre.net/">ForteFibre</ExternalLink>
                <ExternalLink href="https://github.com/Nasubiman">
                  <GitHubIcon /> GitHub
                </ExternalLink>
              </div>
            </section>

            <section>
              <SectionHeading>Resume</SectionHeading>
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-5 text-base font-semibold">Education</h3>
                  <div className="space-y-7">
                    <div>
                      <p className="text-sm text-neutral-500">2026 — 2028</p>
                      <p className="mt-1 font-medium">京都工芸繊維大学大学院 博士前期課程</p>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">工芸科学科 / 設計工学域 / 情報工学専攻</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">2022 — 2026</p>
                      <p className="mt-1 font-medium">京都工芸繊維大学 学士課程</p>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">工芸科学科 / 設計工学域 / 情報工学課程</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-5 text-base font-semibold">Work</h3>
                  <div>
                    <p className="text-sm text-neutral-500">2026年3月 — 2026年5月</p>
                    <p className="mt-1 font-medium">Baseconnect株式会社</p>
                    <p className="mt-1 text-sm text-neutral-600">インターン</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <SectionHeading>Skills</SectionHeading>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
                {skills.map((skill) => (
                  <li key={skill} className="border-b border-neutral-200 pb-2 text-neutral-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionHeading>My Work</SectionHeading>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {competitions.map((competition, index) => (
                  <article key={`${competition.name}-${index}`} className="grid gap-3 py-6 sm:grid-cols-[9rem_1fr]">
                    <div>
                      <h3 className="font-semibold">{competition.name}</h3>
                      {competition.href && (
                        <a
                          href={competition.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
                        >
                          Profile
                        </a>
                      )}
                    </div>
                    <div>
                      <p className="text-sm leading-6 text-neutral-700">{competition.description}</p>
                      {competition.result && <p className="mt-2 text-sm font-medium text-neutral-900">{competition.result}</p>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <div className="mb-16">
              <p className="mb-4 text-sm text-neutral-500">Selected projects</p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Products</h1>
            </div>

            <div className="space-y-20">
              <article>
                <header className="mb-8">
                  <p className="mb-2 text-sm text-neutral-500">Machine Learning</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Eggplant Leaf Classification</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                    ナスの葉から病気を検知する深層学習モデルです。
                  </p>
                  <div className="mt-5">
                    <ExternalLink href="https://github.com/Nasubiman/eggplant_leaf_classification">
                      <GitHubIcon /> GitHub
                    </ExternalLink>
                  </div>
                </header>

                <div className="space-y-8">
                  <ProductSection title="ストーリー">
                    <blockquote className="border-l-2 border-neutral-300 pl-5 text-sm leading-7 text-neutral-600">
                      「20XX年、世界は致死性の植物ウイルスにより崩壊した。かつて青々と茂っていた畑は荒野と化し、もはや我々にナスすべは無く、安全に根を張れる場所は防衛都市・那須のみとなった。
                      あなたは、この都市のメインゲートで検問所の監視官を務めている。押し寄せる避難民の中から、健康な個体とウイルスに侵された不健康な個体を正確に仕分け、都市内部への侵入を防ぐ。」
                    </blockquote>
                  </ProductSection>

                  <ProductSection title="モデル構成">
                    <p className="mb-5 text-sm leading-7 text-neutral-600">
                      ImageNet事前学習済みモデル3種のアンサンブル（Hard Voting）を使用しています。
                    </p>
                    <div className="grid gap-5 sm:grid-cols-3">
                      {[
                        ["ResNet-50", "25M パラメータ", "残差接続ベースの標準CNN"],
                        ["DenseNet-201", "20M パラメータ", "全層の特徴を密に結合するCNN"],
                        ["ConvNeXt-Base", "89M パラメータ", "Transformer知見で再設計されたCNN"],
                      ].map(([name, size, description]) => (
                        <div key={name} className="border-t border-neutral-300 pt-3">
                          <p className="text-sm font-semibold">{name}</p>
                          <p className="mt-1 text-xs text-neutral-500">{size}</p>
                          <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
                        </div>
                      ))}
                    </div>
                  </ProductSection>

                  <ProductSection title="データセット">
                    <p className="mb-4 text-sm text-neutral-600">画像数：1,400枚（Train: 980 / Val: 210 / Test: 210）</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-y border-neutral-300">
                            <th className="w-16 py-2 font-medium text-neutral-500">ID</th>
                            <th className="py-2 font-medium text-neutral-500">クラス名</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leafClasses.map(([id, name]) => (
                            <tr key={id} className="border-b border-neutral-200">
                              <td className="py-2 font-mono text-neutral-500">{id}</td>
                              <td className="py-2 text-neutral-700">{name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ProductSection>

                  <ProductSection title="学習時の工夫">
                    <p className="text-sm leading-7 text-neutral-600">{trainingTechniques.join(" / ")}</p>
                  </ProductSection>

                  <ProductSection title="テスト結果">
                    <dl className="grid border-y border-neutral-300 sm:grid-cols-2">
                      <div className="py-5 sm:border-r sm:border-neutral-300 sm:pr-6">
                        <dt className="text-sm text-neutral-500">Accuracy</dt>
                        <dd className="mt-1 text-2xl font-semibold">97.62%</dd>
                        <p className="mt-1 text-xs text-neutral-500">205 / 210</p>
                      </div>
                      <div className="border-t border-neutral-300 py-5 sm:border-t-0 sm:pl-6">
                        <dt className="text-sm text-neutral-500">推論速度</dt>
                        <dd className="mt-1 text-2xl font-semibold">47.3 ms</dd>
                        <p className="mt-1 text-xs text-neutral-500">1画像あたり</p>
                      </div>
                    </dl>
                  </ProductSection>

                  <ProductSection title="エピローグ">
                    <blockquote className="border-l-2 border-neutral-300 pl-5 text-sm leading-7 text-neutral-600">
                      「監視官であるあなたは、ResNet-50、DenseNet-201、ConvNeXt-Baseの3つのモデルをアンサンブルすることで、ナスを仕分けすることにした。
                      だが、作ったモデルの精度が100%ではなかったため、病気のナスを都市内部に侵入させてしまい、ナスすべなく滅びたとさ。ちゃんちゃん」
                    </blockquote>
                  </ProductSection>
                </div>
              </article>

              <article className="border-t border-neutral-400 pt-12">
                <header className="mb-8">
                  <p className="mb-2 text-sm text-neutral-500">共同制作</p>
                  <h2 className="text-2xl font-semibold tracking-tight">salmon-ai</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                    タスク管理、タイムブロッキング、進捗状況の可視化を備えたAI駆動アプリです。
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                    <ExternalLink href="https://salmon-ai.vercel.app">Webサイト</ExternalLink>
                    <ExternalLink href="https://github.com/KinuGra/salmon-ai">
                      <GitHubIcon /> GitHub
                    </ExternalLink>
                  </div>
                </header>

                <div className="space-y-8">
                  <ProductSection title="使用技術">
                    <dl className="grid gap-4 text-sm sm:grid-cols-3">
                      <div>
                        <dt className="text-neutral-500">Frontend</dt>
                        <dd className="mt-1 font-medium">Next.js / TypeScript</dd>
                      </div>
                      <div>
                        <dt className="text-neutral-500">Backend</dt>
                        <dd className="mt-1 font-medium">Go</dd>
                      </div>
                      <div>
                        <dt className="text-neutral-500">AI</dt>
                        <dd className="mt-1 font-medium">Python</dd>
                      </div>
                    </dl>
                  </ProductSection>

                  <ProductSection title="主な機能">
                    <ul className="grid list-disc gap-x-8 gap-y-2 pl-5 text-sm leading-6 text-neutral-700 sm:grid-cols-2">
                      <li>タスクリスト</li>
                      <li>タイムブロック</li>
                      <li>統計・サマリー</li>
                      <li>AIサポート</li>
                    </ul>
                  </ProductSection>
                </div>
              </article>

              <article className="border-t border-neutral-400 pt-12">
                <header className="mb-8">
                  <p className="mb-2 text-sm text-neutral-500">Web Application</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Slay the Spire 2 カード強さ投票サイト</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                    カードをS / A / B / C / Dの5段階で評価・投票し、集計結果をリアルタイムで確認できるサイトです。
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                    <ExternalLink href="https://slaythespire2vote.vercel.app">Webサイト</ExternalLink>
                    <ExternalLink href="https://github.com/Nasubiman/SlayTheSpire2Vote">
                      <GitHubIcon /> GitHub
                    </ExternalLink>
                  </div>
                </header>

                <div className="space-y-8">
                  <ProductSection title="使用技術">
                    <p className="text-sm leading-7 text-neutral-600">TypeScript / Next.js / Vercel</p>
                  </ProductSection>

                  <ProductSection title="主な機能">
                    <ul className="grid list-disc gap-x-8 gap-y-2 pl-5 text-sm leading-6 text-neutral-700 sm:grid-cols-2">
                      <li>キャラクター別カード一覧（6種）</li>
                      <li>カードタイプでフィルタリング</li>
                      <li>強化前・強化後の画像切替</li>
                      <li>S〜Dの5段階投票</li>
                      <li>投票結果のリアルタイム表示</li>
                      <li>同一IPからの重複投票防止</li>
                    </ul>
                  </ProductSection>

                  <p className="border-t border-neutral-200 pt-5 text-xs leading-6 text-neutral-500">
                    カード画像・カード名は
                    <a
                      href="https://store.steampowered.com/app/1868140/Slay_the_Spire_2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-1 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
                    >
                      Slay the Spire 2
                    </a>
                    （MegaCrit）の著作物です。本サイトは非公式のファンサイトであり、MegaCritとは関係ありません。
                  </p>
                </div>
              </article>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-300">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Nasubiman</span>
          <a href="https://github.com/Nasubiman" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            GitHub
          </a>
          <span>&copy; {new Date().getFullYear()} Nasubiman</span>
        </div>
      </footer>
    </div>
  );
}
