"use client";

import { useState } from "react";
import Link from "next/link";

const skills = [
  { name: 'Python',     bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
  { name: 'C++',        bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-800'   },
  { name: 'C#',         bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' },
  { name: 'TypeScript', bg: 'bg-sky-50',    border: 'border-sky-200',    text: 'text-sky-800'    },
  { name: 'Go',         bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-800'   },
  { name: 'Linux',      bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-3">
    <span className="w-1 h-8 bg-blue-600 rounded-full shrink-0"></span>
    {children}
  </h2>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"about" | "products">("about");
  const [fading, setFading] = useState(false);

  const switchTab = (tab: "about" | "products") => {
    if (tab === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setFading(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
            Nasubiman
          </Link>
          <nav className="flex space-x-1 text-sm font-medium text-gray-600 border border-gray-200 rounded-full px-1.5 py-1 shadow-sm bg-white">
            <button
              onClick={() => switchTab("about")}
              className={`px-4 py-1 rounded-full transition-all duration-200 ${activeTab === "about" ? "bg-blue-600 text-white shadow-sm" : "hover:text-blue-600"}`}
            >
              About
            </button>
            <button
              onClick={() => switchTab("products")}
              className={`px-4 py-1 rounded-full transition-all duration-200 ${activeTab === "products" ? "bg-blue-600 text-white shadow-sm" : "hover:text-blue-600"}`}
            >
              Products
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-24 transition-opacity duration-150 ${fading ? "opacity-0" : "opacity-100"}`}
      >

        {/* ===== About Tab ===== */}
        {activeTab === "about" && (
          <>
            {/* Intro Section */}
            <section id="about" className="space-y-8">
              <div className="space-y-5">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  M1 @ 京都工芸繊維大学
                </div>

                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                  Hello, I&apos;m<br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                    Nasubiman.
                  </span>
                </h1>
                <p className="text-xl font-medium text-gray-400 tracking-tight">Student / Engineer</p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  京都工芸繊維大学大学院M1。機械学習、最適化アルゴリズム、競技プログラミングなど幅広い分野に興味があります。<br />
                  各種コンペティションに積極的に参加し、実践的な課題解決に取り組んでいます。
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.soc.is.kit.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white hover:bg-gray-700 transition-all duration-200 text-sm font-medium rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  🎓 京都工芸繊維大学 馬研究室
                </a>
                <a
                  href="https://www.fortefibre.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 text-sm font-medium rounded-xl shadow-sm hover:-translate-y-0.5"
                >
                  🏋️ ForteFibre
                </a>
                <a
                  href="https://github.com/Nasubiman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 text-sm font-medium rounded-xl shadow-sm hover:-translate-y-0.5"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="border-t border-gray-200 pt-12">
              <SectionHeading>Resume</SectionHeading>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3 shadow-sm">🎓</span>
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-200">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">2026 — 2028</p>
                      <p className="font-semibold text-gray-900 mt-1">京都工芸繊維大学大学院 博士前期課程</p>
                      <p className="text-gray-500 text-sm mt-0.5">工芸科学科 / 設計工学域 / 情報工学専攻</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-gray-200">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gray-300 border-4 border-white"></span>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">2022 — 2026</p>
                      <p className="font-semibold text-gray-900 mt-1">京都工芸繊維大学 学士課程</p>
                      <p className="text-gray-500 text-sm mt-0.5">工芸科学科 / 設計工学域 / 情報工学課程</p>
                    </div>
                  </div>
                </div>

                {/* Work */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3 shadow-sm">💼</span>
                    Work
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-200">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">2026年3月 — 2026年5月</p>
                      <p className="font-semibold text-gray-900 mt-1">Baseconnect株式会社</p>
                      <p className="text-gray-500 text-sm mt-0.5">インターン</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="border-t border-gray-200 pt-16">
              <SectionHeading>Skills</SectionHeading>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map(skill => (
                  <div
                    key={skill.name}
                    className={`${skill.bg} ${skill.border} border rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
                  >
                    <p className={`font-semibold ${skill.text}`}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* My Work Section */}
            <section id="my-work" className="border-t border-gray-200 pt-16 pb-8">
              <SectionHeading>My Work</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* SIGNATE */}
                <div className="bg-white border border-gray-200 border-t-4 border-t-amber-500 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">SIGNATE</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">コンペティションプラットフォーム</p>
                  <div className="mb-5 bg-gray-50 rounded-xl p-4 space-y-2">
                    <p className="text-sm font-medium text-gray-800">第2回 国土交通省 地理空間情報データチャレンジ</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      🥉 Bronze Medal
                    </span>
                  </div>
                  <a href="https://user.competition.signate.jp/en/user/?user=75da792abc434981b8fd3a986a646510" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 transition-colors">
                    View Profile →
                  </a>
                </div>

                {/* AtCoder */}
                <div className="bg-white border border-gray-200 border-t-4 border-t-gray-500 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">AtCoder</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">競技プログラミングサイト</p>
                  <div className="mb-5 bg-gray-50 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-800">競技プログラミングでのアルゴリズム構築</p>
                  </div>
                  <a href="https://atcoder.jp/users/NASUBIMAN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 transition-colors">
                    View Profile →
                  </a>
                </div>

                {/* Kaggle */}
                <div className="bg-white border border-gray-200 border-t-4 border-t-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Kaggle</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">コンペティションプラットフォーム</p>
                  <div className="mb-5 bg-gray-50 rounded-xl p-4 space-y-2">
                    <p className="text-sm font-medium text-gray-800">Santa 2025 - Christmas Tree Packing Challenge</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200">
                        🥈 Silver Medal
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Rank 65 / 3,357 Teams</span>
                    </div>
                  </div>
                  <a href="https://www.kaggle.com/yousukenakamura" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 transition-colors">
                    View Profile →
                  </a>
                </div>

                {/* Nishika */}
                <div className="bg-white border border-gray-200 border-t-4 border-t-yellow-400 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Nishika</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">コンペティションプラットフォーム</p>
                  <p className="text-xs text-red-500 font-medium mb-4">※現在はサービスを終了しています</p>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <p className="text-sm font-medium text-gray-800">大手グローバル小売メーカーの商品PR文生成（LLM）</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-200">
                      🥇 Gold Medal
                    </span>
                  </div>
                </div>

              </div>
            </section>
          </>
        )}

        {/* ===== Products Tab ===== */}
        {activeTab === "products" && (
          <section id="products" className="space-y-12">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-2">
                Products
              </h1>
              <p className="text-lg text-gray-400">開発したプロジェクト</p>
            </div>

            {/* Eggplant Leaf Classification */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🍆</span>
                  <h2 className="text-2xl font-bold text-white">Eggplant Leaf Classification</h2>
                </div>
                <p className="text-purple-100 text-sm">ナスの葉っぱから病気を検知する深層学習モデル</p>
                <a
                  href="https://github.com/Nasubiman/eggplant_leaf_classification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                >
                  <GitHubIcon /> GitHub で見る →
                </a>
              </div>

              <div className="p-8 space-y-8">
                {/* Story */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">📖</span> ストーリー
                  </h3>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm text-gray-700 leading-relaxed italic">
                    「20XX年、世界は致死性の植物ウイルスにより崩壊した。かつて青々と茂っていた畑は荒野と化し、もはや我々にナスすべは無く、安全に根を張れる場所は防衛都市・那須のみとなった。
                    あなたは、この都市のメインゲートで検問所の監視官を務めている。押し寄せる避難民の中から、健康な個体とウイルスに侵された不健康な個体を正確に仕分け、都市内部への侵入を防ぐ。」
                  </div>
                </div>

                {/* Model */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🧠</span> モデル構成
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    ImageNet 事前学習済みモデル3種の<strong>アンサンブル（Hard Voting）</strong>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-purple-800 text-sm">ResNet-50</p>
                      <p className="text-xs text-purple-500 mt-1">25M パラメータ</p>
                      <p className="text-xs text-gray-500 mt-1">残差接続ベースの標準CNN</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-purple-800 text-sm">DenseNet-201</p>
                      <p className="text-xs text-purple-500 mt-1">20M パラメータ</p>
                      <p className="text-xs text-gray-500 mt-1">全層の特徴を密に結合するCNN</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-purple-800 text-sm">ConvNeXt-Base</p>
                      <p className="text-xs text-purple-500 mt-1">89M パラメータ</p>
                      <p className="text-xs text-gray-500 mt-1">Transformer知見で再設計されたモダンCNN</p>
                    </div>
                  </div>
                </div>

                {/* Dataset */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">📊</span> データセット
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">画像数：<strong>1,400枚</strong>（Train: 980 / Val: 210 / Test: 210）</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-4 py-2 text-gray-600 font-medium">ID</th>
                          <th className="text-left px-4 py-2 text-gray-600 font-medium">クラス名</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          ["0", "Healthy Leaf（健康な葉）"],
                          ["1", "Insect Pest Disease（害虫）"],
                          ["2", "Leaf Spot Disease（斑点病）"],
                          ["3", "Mosaic Virus Disease（モザイク病）"],
                          ["4", "Small Leaf Disease（小葉病）"],
                          ["5", "White Mold Disease（白絹病）"],
                          ["6", "Wilt Disease（萎凋病）"],
                        ].map(([id, name]) => (
                          <tr key={id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-2 text-gray-500 font-mono">{id}</td>
                            <td className="px-4 py-2 text-gray-800">{name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Training Techniques */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> 学習時の工夫
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Data Augmentation",
                      "Label Smoothing (0.1)",
                      "Cosine Annealing LR",
                      "Weight Decay (0.05)",
                      "RandomErasing",
                      "ColorJitter",
                    ].map((tech) => (
                      <div key={tech} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-center">
                        <p className="text-xs font-medium text-gray-700">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🏆</span> テスト結果
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <p className="text-4xl font-extrabold text-green-700">97.62%</p>
                      <p className="text-sm text-green-600 mt-1">Accuracy (205 / 210)</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                      <p className="text-4xl font-extrabold text-blue-700">47.3 ms</p>
                      <p className="text-sm text-blue-600 mt-1">推論速度 / 画像</p>
                    </div>
                  </div>
                </div>

                {/* Epilogue */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm text-gray-600 leading-relaxed italic">
                  「監視官であるあなたは、ResNet-50, DenseNet-201, ConvNeXt-Baseの3つのモデルをアンサンブルすることで、ナスを仕分けすることにした。
                  だが、作ったモデルの精度が100%ではなかったため、病気のナスを都市内部に侵入させてしまい、ナスすべなく滅びたとさ。ちゃんちゃん」
                </div>
              </div>
            </div>

            {/* salmon-ai */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-8 relative">
                <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                  🤝 共同制作
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🐟</span>
                  <h2 className="text-2xl font-bold text-white">salmon-ai</h2>
                </div>
                <p className="text-teal-50 text-sm">タスク管理、タイムブロッキング、進捗状況の可視化を備えたAI駆動アプリ</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://salmon-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-teal-700 hover:bg-teal-50 text-sm font-bold rounded-lg shadow-sm transition-colors"
                  >
                    Webサイトを開く →
                  </a>
                  <a
                    href="https://github.com/KinuGra/salmon-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                  >
                    <GitHubIcon /> GitHub で見る →
                  </a>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🛠️</span> 使用技術
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-blue-800 text-sm">Next.js (TypeScript)</p>
                      <p className="text-xs text-gray-500 mt-1">Frontend</p>
                    </div>
                    <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-cyan-800 text-sm">Go</p>
                      <p className="text-xs text-gray-500 mt-1">Backend</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-center">
                      <p className="font-bold text-yellow-800 text-sm">Python</p>
                      <p className="text-xs text-gray-500 mt-1">AI</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">✨</span> 主な機能
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: "✅", label: "タスクリスト" },
                      { icon: "⏳", label: "タイムブロック" },
                      { icon: "📊", label: "統計・サマリー" },
                      { icon: "🤖", label: "AIサポート" },
                    ].map(({ icon, label }) => (
                      <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center">
                        <p className="text-sm font-medium text-gray-800">{icon} {label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SlayTheSpire2Vote */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-red-800 to-orange-700 px-8 py-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">⚔️</span>
                  <h2 className="text-2xl font-bold text-white">Slay the Spire 2 カード強さ投票サイト</h2>
                </div>
                <p className="text-orange-100 text-sm">カードを S / A / B / C / D の5段階で評価・投票し、みんなの評価をリアルタイムで確認できるサイト</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://slaythespire2vote.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-red-800 hover:bg-orange-50 text-sm font-bold rounded-lg shadow-sm transition-colors"
                  >
                    Webサイトを開く →
                  </a>
                  <a
                    href="https://github.com/Nasubiman/SlayTheSpire2Vote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                  >
                    <GitHubIcon /> GitHub で見る →
                  </a>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Tech tags */}
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full">TypeScript 97.7%</span>
                  <span className="bg-gray-100 text-gray-600 border border-gray-200 text-xs font-bold px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-gray-100 text-gray-600 border border-gray-200 text-xs font-bold px-3 py-1 rounded-full">Vercel</span>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">✨</span> 主な機能
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { icon: "🃏", text: "キャラクター別カード一覧（6種）" },
                      { icon: "🔍", text: "カードタイプでフィルタリング" },
                      { icon: "🖼️", text: "強化前/後の画像切替" },
                      { icon: "🗳️", text: "S〜D の5段階投票" },
                      { icon: "📊", text: "投票結果をリアルタイム表示（棒グラフ）" },
                      { icon: "🚫", text: "同一IPからの重複投票防止" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                        <span className="text-lg">{icon}</span>
                        <p className="text-sm font-medium text-gray-800">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-xs text-gray-500 leading-relaxed">
                  ⚠️ カード画像・カード名は{" "}
                  <a href="https://store.steampowered.com/app/1868140/Slay_the_Spire_2/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                    Slay the Spire 2
                  </a>{" "}
                  (MegaCrit) の著作物です。本サイトは非公式のファンサイトであり、MegaCrit とは一切関係ありません。
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-bold text-gray-900">Nasubiman</span>
            <a
              href="https://github.com/Nasubiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Nasubiman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
