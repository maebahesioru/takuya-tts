import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 192,
  height: 192,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4f46e5',
          borderRadius: '40px',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <rect x="20" y="30" width="20" height="80" fill="white" rx="4"/>
          <path d="M50 50L90 30V110L50 90V50Z" fill="white"/>
          <circle cx="100" cy="40" r="8" fill="white"/>
          <circle cx="120" cy="40" r="8" fill="white"/>
          <circle cx="100" cy="100" r="8" fill="white"/>
          <circle cx="120" cy="100" r="8" fill="white"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
