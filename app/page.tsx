import Head from "next/head";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Head>
        <title>Nasubiman | Portfolio</title>
        <meta name="description" content="Nasubimanのポートフォリオサイト" />
      </Head>

      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
            Nasubiman
          </Link>
          <nav className="flex space-x-6 text-sm font-medium text-gray-600 border border-gray-200 rounded-full px-4 py-1.5 shadow-sm bg-white">
            <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="#resume" className="hover:text-blue-600 transition-colors">Resume</Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="#my-work" className="hover:text-blue-600 transition-colors">My Work</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-24">

        {/* Intro Section */}
        <section id="about" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
        <section id="resume" className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Resume</h2>

            <div>
              {/* Education */}
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
                <p className="text-sm text-transparent mt-1 select-none">.</p>
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
