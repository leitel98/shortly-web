import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link 
        rel="shortcut icon"
        type="image/png" 
        href="favicon-32x32.png" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" 
        rel="stylesheet" 
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
