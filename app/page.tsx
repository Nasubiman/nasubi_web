"use client";

import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"about" | "products">("about");

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
              onClick={() => setActiveTab("about")}
              className={`px-4 py-1 rounded-full transition-all ${activeTab === "about" ? "bg-blue-600 text-white shadow-sm" : "hover:text-blue-600"}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-4 py-1 rounded-full transition-all ${activeTab === "products" ? "bg-blue-600 text-white shadow-sm" : "hover:text-blue-600"}`}
            >
              Products
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-24">

        {/* ===== About Tab ===== */}
        {activeTab === "about" && (
          <>
            {/* Intro Section */}
            <section id="about" className="space-y-8">
              <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-4">
                  Hello, I&apos;m Nasubiman.<br />
                  <span className="text-blue-600">Student / Engineer.</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  京都工芸繊維大学B4。機械学習、最適化アルゴリズム、競技プログラミングなど幅広い分野に興味があります。<br />
                  各種コンペティションに積極的に参加し、実践的な課題解決に取り組んでいます。
                </p>
              </div>

              {/* Links Grid */}
              <div className="flex flex-wrap gap-4">
                <a href="https://www.soc.is.kit.ac.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white shadow-sm hover:bg-gray-800 transition-colors text-sm font-medium rounded-lg">
                  京都工芸繊維大学 馬研究室
                </a>
                <a href="https://www.fortefibre.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium rounded-lg">
                  所属していた部活：ForteFibre
                </a>
                <a href="https://github.com/Nasubiman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-blue-300 bg-blue-50 text-blue-700 shadow-sm hover:bg-blue-100 transition-colors text-sm font-medium rounded-lg">
                  GitHub Profile
                </a>
              </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="space-y-12">
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Resume</h2>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
                      <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3 shadow-sm">🎓</span>
                      Education
                    </h3>
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-gray-200">
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></span>
                        <p className="text-sm text-gray-500 font-medium">2026年4月 〜 2028年3月（予定）</p>
                        <p className="font-medium text-gray-900 mt-1">京都工芸繊維大学大学院 博士前期課程</p>
                        <p className="text-gray-600 text-sm">工芸科学科 / 設計工学域 / 情報工学専攻</p>
                      </div>
                      <div className="relative pl-6 border-l-2 border-gray-200">
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gray-300 border-4 border-white"></span>
                        <p className="text-sm text-gray-500 font-medium">2022年4月 〜 2026年3月</p>
                        <p className="font-medium text-gray-900 mt-1">京都工芸繊維大学 学士課程</p>
                        <p className="text-gray-600 text-sm">工芸科学科 / 設計工学域 / 情報工学課程</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Python', 'C++', 'C#', 'Git'].map(skill => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                    <p className="font-medium text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* My Work Section */}
            <section id="my-work" className="border-t border-gray-200 pt-16 pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">My Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SIGNATE */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SIGNATE</h3>
                  <p className="text-sm text-gray-600 mb-4 h-10">コンペティションプラットフォーム「SIGNATE」での取り組み</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-800">第2回 国土交通省 地理空間情報データチャレンジ</p>
                    <p className="text-sm text-yellow-600 font-bold mt-1">🥉 Bronze</p>
                  </div>
                  <a href="https://user.competition.signate.jp/en/user/?user=75da792abc434981b8fd3a986a646510" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Profile &rarr;
                  </a>
                </div>

                {/* AtCoder */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AtCoder</h3>
                  <p className="text-sm text-gray-600 mb-4 h-10">競技プログラミングサイト「AtCoder」での取り組み</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-800">競技プログラミングでのアルゴリズム構築</p>
                  </div>
                  <a href="https://atcoder.jp/users/NASUBIMAN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Profile &rarr;
                  </a>
                </div>

                {/* Kaggle */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kaggle</h3>
                  <p className="text-sm text-gray-600 mb-4 h-10">コンペティションプラットフォーム「Kaggle」での取り組み</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-800">🏆 Santa 2025 - Christmas Tree Packing Challenge</p>
                    <p className="text-sm text-gray-500 mt-1">Rank: 65 / 3357 Teams <span className="text-gray-400 font-bold">🥈 Silver Medal</span></p>
                  </div>
                  <a href="https://www.kaggle.com/yousukenakamura" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Profile &rarr;
                  </a>
                </div>

                {/* Nishika */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nishika</h3>
                  <p className="text-sm text-gray-600 mb-4 h-10">コンペティションプラットフォーム「Nishika」での取り組み</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-800">🏆 大手グローバル小売メーカーの商品PR文生成（LLM）</p>
                    <p className="text-sm text-yellow-500 font-bold mt-1">🥇 Gold Medal</p>
                  </div>
                  <a href="https://competition.nishika.com/users/bjGVBPLoJq7Nzla5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Profile &rarr;
                  </a>
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
              <p className="text-lg text-gray-500">開発したプロジェクト</p>
            </div>

            {/* Eggplant Leaf Classification */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Project Header */}
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
                  className="inline-flex items-center mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                >
                  GitHub で見る &rarr;
                </a>
              </div>

              {/* Project Details */}
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

                {/* Tech Stack */}
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
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                      <p className="text-3xl font-extrabold text-green-700">97.62%</p>
                      <p className="text-sm text-green-600 mt-1">Accuracy (205 / 210)</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                      <p className="text-3xl font-extrabold text-blue-700">47.3 ms</p>
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
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nasubiman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
