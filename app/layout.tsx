import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HkmProBanner } from "./HkmPro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f46e5',
};

export const metadata: Metadata = {
  title: '拓也さん読み上げ | 無料テキスト音声変換ツール',
  description: '日本語テキストを音声に変換できる無料のオンラインツール。入力したテキストを自然な音声で読み上げ、MP3ファイルとしてダウンロード可能。会員登録不要で今すぐ使えます。',
  keywords: 'テキスト読み上げ,音声合成,TTS,日本語,無料,ダウンロード,MP3,音声変換,オンライン,会員登録不要',
  authors: [{ name: '拓也さん読み上げ' }],
  creator: '拓也さん読み上げ',
  publisher: '拓也さん読み上げ',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: '拓也さん読み上げ | 無料テキスト音声変換ツール',
    description: '日本語テキストを音声に変換できる無料のオンラインツール。入力したテキストを自然な音声で読み上げ、MP3ファイルとしてダウンロード可能。会員登録不要で今すぐ使えます。',
    type: 'website',
    url: 'https://takuya-voice.vercel.app',
    siteName: '拓也さん読み上げ',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary',
    title: '拓也さん読み上げ | 無料TTS',
    description: '日本語テキストを音声に変換。会員登録不要、完全無料。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://takuya-voice.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://cache-a.oddcast.com" />
        <link rel="dns-prefetch" href="https://cache-a.oddcast.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "拓也さん読み上げ",
              "description": "日本語テキストを音声に変換できる無料のオンラインツール",
              "url": "https://takuya-voice.vercel.app",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY"
              },
              "inLanguage": "ja",
              "featureList": [
                "テキスト読み上げ",
                "音声合成",
                "MP3ダウンロード",
                "会員登録不要"
              ],
              "browserRequirements": "HTML5対応ブラウザ"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <HkmProBanner />
      </body>
    </html>
  );
}
