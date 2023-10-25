// pages/_app.js
import '../styles/globals.css'; // ここにグローバルCSSファイルをインポート

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
