import { component$ } from "@builder.io/qwik";
import {
  RequestEvent,
  server$,
  useDocumentHead,
  useLocation,
} from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */

export const RouterHead = component$(() => {
  const t = inlineTranslate();
  const head = useDocumentHead();
  // console.log(head)
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      {/* <title>{t(head.title, { name: "LCC Opentech" })}</title> */}

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap"
        rel="stylesheet"
      />

      {/* <meta property="og:site_name" content="LCC Opentech" />
      <meta property="og:title" content="LCC Opentech" /> */}
      {/* <meta property="og:image" content={`https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`} /> */}
      {/* <meta property="og:image" content={`https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`} /> */}
      {/* <meta property="og:description" content={t(head.description!)} /> */}

      {head.meta.map((m) => (
        <meta
          key={m.key}
          name={m.name}
          content={m.name === "description" ? t(m.content!) : m.content}
          property={m.property}
        />
      ))}
      {/* {head.meta.map((m, item) => (
        <meta key={item} {...m} />
      ))} */}

      {head.links.map((l, item) => (
        <link key={item} {...l} />
      ))}

      {head.styles.map((s, item) => (
        <style key={item} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
      <script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        defer
      />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${
          import.meta.env.PUBLIC_GOOGLE_ANALYTICS_KEY
        }`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            gtag('config', '${import.meta.env.PUBLIC_GOOGLE_ANALYTICS_KEY}', {
          page_path: window.location.pathname,
          });
      `}
      </script>
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${import.meta.env.PUBLIC_FACEBOOK_PIXEL}');
          fbq('track', 'PageView');
          `}
      </script>
      <script>
        {`
            window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '${
              import.meta.env.PUBLIC_SMARTLOOK_KEY
            }', { region: 'eu' });
          `}
      </script>

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
