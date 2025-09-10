import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_MEASUREMENT_ID } from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <>
              {/* Google Analytics Script */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
          <meta
            name="description"
            content="Mitul Pancholi – Full Stack Developer with 8+ years of experience building scalable SaaS platforms, high-performance web apps, and pixel-perfect frontends. Expert in React.js, Next.js, Node.js, TypeScript, Tailwind CSS, GraphQL, and cloud solutions (AWS, Docker, Firebase). Delivering creative, responsive, and conversion-focused applications for startups and enterprises."
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.mitulpancholi.dev" />
          <meta property="twitter:title" content="Mitul Pancholi" />
          <meta
            property="twitter:description"
            content="Mitul Pancholi – Full Stack Developer with 8+ years of experience building scalable SaaS platforms, high-performance web apps, and pixel-perfect frontends. Expert in React.js, Next.js, Node.js, TypeScript, Tailwind CSS, GraphQL, and cloud solutions (AWS, Docker, Firebase). Delivering creative, responsive, and conversion-focused applications for startups and enterprises."
          />
          <meta property="twitter:image" content="/IMG_9313.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mitulpancholi.dev" />
          <meta property="og:title" content="Mitul Pancholi" />
          <meta
            property="og:description"
            content="Mitul Pancholi – Full Stack Developer with 8+ years of experience building scalable SaaS platforms, high-performance web apps, and pixel-perfect frontends. Expert in React.js, Next.js, Node.js, TypeScript, Tailwind CSS, GraphQL, and cloud solutions (AWS, Docker, Firebase). Delivering creative, responsive, and conversion-focused applications for startups and enterprises."
          />
          <meta property="og:image" content="/IMG_9313.jpg" />
          <meta name="theme-color" content="#041C32" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
