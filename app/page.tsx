'use client';

import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSpeak = () => {
    if (!text.trim()) return;
    setLoading(true);
    const url = `https://cache-a.oddcast.com/tts/genC.php?EID=3&LID=12&VID=2&TXT=${encodeURIComponent(text)}`;
    setAudioUrl(url);
    
    // Update page title dynamically
    if (typeof window !== 'undefined') {
      document.title = `読み上げ中 | 拓也さん読み上げ`;
    }
    
    setTimeout(() => setLoading(false), 1000);
  };

  const handleDownload = async () => {
    const response = await fetch(audioUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `takuya-voice-${Date.now()}.mp3`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <article className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">拓也さん読み上げ</h1>
          <p className="text-gray-600 text-center mb-6">日本語テキストを自然な音声に変換する無料ツール | オンラインTTS</p>
        </header>
        
        <section>
          <h2 className="sr-only">テキスト入力</h2>
          <label htmlFor="text-input" className="sr-only">読み上げるテキストを入力</label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="ここにテキストを入力"
            className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none text-gray-700"
            aria-label="読み上げるテキスト"
          />
          
          <button
            onClick={handleSpeak}
            disabled={loading || !text.trim()}
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
            aria-label="テキストを読み上げる"
          >
            {loading ? '処理中...' : '読み上げ'}
          </button>
        </section>
        
        {audioUrl && (
          <section className="mt-6 space-y-4" aria-label="音声プレーヤー">
            <h2 className="sr-only">音声再生とダウンロード</h2>
            <audio key={audioUrl} controls autoPlay className="w-full" aria-label="生成された音声">
              <source src={audioUrl} type="audio/mpeg" />
            </audio>
            <button
              onClick={handleDownload}
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition text-center"
              aria-label="音声ファイルをダウンロード"
            >
              ダウンロード
            </button>
          </section>
        )}
        
        <footer className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-2">
            <h3 className="font-semibold text-gray-800">使い方</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>テキストボックスに読み上げたい文章を入力</li>
              <li>「読み上げ」ボタンをクリック</li>
              <li>音声が自動再生され、ダウンロードも可能</li>
            </ol>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-2">特徴</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>✓ 完全無料で利用可能</li>
                <li>✓ 会員登録不要</li>
                <li>✓ MP3形式でダウンロード</li>
                <li>✓ 日本語に最適化された音声合成</li>
              </ul>
            </div>
            
            <p className="mt-4 text-xs text-gray-500">
              © 2026 拓也さん読み上げ - 無料で使えるテキスト音声変換ツール
            </p>
            <nav className="mt-2" aria-label="関連キーワード">
              <p className="text-xs text-gray-400">
                関連: 音声合成 | テキスト読み上げ | TTS | 日本語音声 | MP3変換
              </p>
            </nav>
          </div>
        </footer>
      </article>
    </main>
  );
}
