import React, { useState } from 'react';

export default function MusicAssistant() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function searchMusic() {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    setTracks([]);

    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
        query
      )}&entity=musicTrack&limit=12`;

      const resp = await fetch(url);
      const data = await resp.json();

      setTracks(data.results || []);
    } catch (e) {
      setError('查詢失敗，請稍後再試。');
    }

    setLoading(false);
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          🎵 音樂小高手（iTunes API）
        </div>

        {/* Search Bar */}
        <div style={styles.controls}>
          <label style={styles.label}>
            <span>搜尋歌名或歌手</span>
            <input
              style={styles.input}
              value={query}
              placeholder="例如：周杰倫、告五人"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <button style={styles.searchBtn} onClick={searchMusic} disabled={!query || loading}>
            🔍 搜尋
          </button>
        </div>

        {/* Error */}
        {error && <div style={styles.error}>⚠ {error}</div>}

        {/* Results */}
        <div style={styles.results}>
          {loading && <div style={styles.loading}>查詢中…</div>}

          {tracks.map((t) => (
            <div key={t.trackId} style={styles.item}>
              <img src={t.artworkUrl100} alt="" style={styles.cover} />

              <div style={{ display: 'grid', gap: 4 }}>
                <div style={styles.trackName}>{t.trackName}</div>
                <div style={styles.artistName}>{t.artistName}</div>
                <div style={styles.albumName}>{t.collectionName}</div>

                <a
                  href={t.trackViewUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  ▶ 在 Apple Music 查看
                </a>
              </div>
            </div>
          ))}

          {!loading && tracks.length === 0 && (
            <div style={styles.empty}>輸入關鍵字即可查詢音樂 🎧</div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    display: 'grid',
    placeItems: 'start',
    padding: 16,
    background: '#121212',
    fontFamily: `'Segoe UI Emoji', 'Apple Color Emoji', sans-serif`,
  },
  card: {
    width: 'min(900px, 100%)',
    background: '#1e1e2f',
    border: '1px solid #333',
    borderRadius: 16,
    overflow: 'hidden',
    color: '#e0e0e0',
    marginTop: 24,
  },

  header: {
    padding: '10px 12px',
    fontWeight: 700,
    borderBottom: '1px solid #333',
    background: '#2c2c3c',
    color: '#76a9ff',
  },

  controls: {
    display: 'grid',
    padding: 12,
    gap: 12,
    gridTemplateColumns: '1fr auto',
  },
  label: {
    display: 'grid',
    gap: 6,
    fontSize: 13,
    fontWeight: 600,
    color: '#e0e0e0',
  },
  input: {
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid #555',
    fontSize: 14,
    background: '#2c2c3c',
    color: '#fff',
  },
  searchBtn: {
    padding: '10px 14px',
    borderRadius: 999,
    border: '1px solid #76a9ff',
    background: '#76a9ff',
    color: '#1e1e2f',
    cursor: 'pointer',
    fontWeight: 700,
  },

  error: { color: '#f44336', padding: '4px 12px' },
  results: { padding: 12, display: 'grid', gap: 12 },
  loading: { padding: 12, opacity: 0.9 },

  empty: {
    padding: 12,
    opacity: 0.6,
    fontSize: 14,
  },

  item: {
    display: 'flex',
    gap: 12,
    padding: 12,
    background: '#2b2b3c',
    borderRadius: 12,
    border: '1px solid #444',
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  trackName: {
    fontSize: 15,
    fontWeight: 700,
  },
  artistName: {
    fontSize: 14,
    opacity: 0.8,
  },
  albumName: {
    fontSize: 12,
    opacity: 0.6,
  },
  link: {
    marginTop: 6,
    fontSize: 12,
    color: '#76a9ff',
    textDecoration: 'underline',
  },
};
