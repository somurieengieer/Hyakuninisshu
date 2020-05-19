import React, {useEffect} from 'react';


export function GoogleAdsSmall() {

  useEffect(() => {
    // @ts-ignore
    if (window.adsbygoogle && process.env.NODE_ENV === "production") {
      // @ts-ignore
      window.adsbygoogle.push({});
    }
  }, [])

  return (
    <>
      {/*Google adsense advertisement */}
      <ins className="adsbygoogle"
           style={{display: 'block', textAlign: 'center'}}
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-7646050836920456"
           data-ad-slot="9249145427"></ins>
    </>
  )
}

