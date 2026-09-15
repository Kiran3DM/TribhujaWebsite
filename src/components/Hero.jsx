import React, { useState } from 'react';
import RERACompliance from './RERACompliance';

// Poster is shown at paint and fades out once the Vimeo iframe fires
// onLoad. Using /assets/images/high.webp as a placeholder still — TODO:
// swap for a real hero-poster pulled from the final video cut when Zuari
// supplies it.
const HERO_POSTER_WEBP = '/assets/images/high.webp';
const HERO_POSTER_FALLBACK = '/assets/images/high.jpeg';

const Hero = ({ startLoad }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div id="hero">
      <style dangerouslySetInnerHTML={{ __html: `
        #hero {
          height: 100vh !important;
          height: 100dvh !important;
          min-height: 100vh !important;
          min-height: 100dvh !important;
          position: relative !important;
          width: 100vw !important;
          overflow: hidden !important;
        }
        .hero-video-wrap {
          position: relative;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
        }
        .hero-video-frame {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw; /* 16:9 */
          min-height: 100vh;
          min-height: 100dvh;
          min-width: 177.78vh; /* 16:9, driven by height */
          min-width: 177.78dvh;
          transform: translate(-50%, -50%);
        }
      `}} />
      <div className="hero-video-wrap">
        {startLoad && (
          <iframe
            className="hero-video-frame"
            src="https://player.vimeo.com/video/1189990079?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Tribhuja Hero"
          ></iframe>
        )}
      </div>

      <RERACompliance variant="badge" />

      {/* <div className="hero-overlay" aria-hidden="false">
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          color: 'rgba(240,226,200,0.9)',
          marginBottom: '20px',
          textTransform: 'uppercase',
          lineHeight: 1.8
        }}>
          TG RERA No : P01100010650 &nbsp;&middot;&nbsp; P01100010651 &nbsp;&middot;&nbsp; P01100010652
        </p>
        <p className="hero-verse" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
          Where there is light.
          <br />
          Where there is air.
          <br />
          Where there is quiet.
          <br />
          Nine towers,
          <br />
          Where all three meet.
        </p>
        <p className="hero-stamp">Kollur &middot; ORR Exit 2 &middot; Hyderabad </p>
      </div> */}

      <div id="grain"></div>
    </div>
  );
};

export default Hero;
