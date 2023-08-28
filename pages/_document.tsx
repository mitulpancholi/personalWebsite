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
            content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.mitulpancholi.com" />
          <meta property="twitter:title" content="Mitul Pancholi" />
          <meta
            property="twitter:description"
            content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches"
          />
          <meta property="twitter:image" content="/mitul.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mitulpancholi.com" />
          <meta property="og:title" content="Mitul Pancholi" />
          <meta
            property="og:description"
            content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches"
          />
          <meta property="og:image" content="/mitul.png" />
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
