import React, { useEffect } from 'react';

const AdUnit = () => {
  useEffect(() => {
    // Make sure the adsbygoogle script is triggered
    if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
  }, []);

  return (
    <div className="ad-container">
       
      <ins
        className="adsbygoogle"
        style={{display:`block`}}
        data-ad-client="ca-pub-1667237615319309"
        data-ad-slot="6343543924"
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdUnit;
