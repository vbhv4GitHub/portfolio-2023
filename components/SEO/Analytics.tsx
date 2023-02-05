import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        id='googleAnalytics'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />

      <Script strategy='lazyOnload' id='googleAnalyticsScript'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Script strategy='lazyOnload' id='microsoftClarityScript'>
        {`
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_TRACKING_CODE}');
                `}
      </Script>
    </>
  );
};

export default Analytics;
