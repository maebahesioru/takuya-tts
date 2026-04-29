import { ImageResponse } from 'next/og';

export const alt = '拓也さん読み上げ';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e1b4b', backgroundImage: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)' }}>
        <div style={{ fontSize: 80, fontWeight: 'bold', color: '#a5b4fc', marginBottom: 20 }}>拓也さん読み上げ</div>
        <div style={{ fontSize: 40, color: '#e0e7ff' }}>無料テキスト音声変換ツール</div>
      </div>
    ),
    { ...size }
  );
}
