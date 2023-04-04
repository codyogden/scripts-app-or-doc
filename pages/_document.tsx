import { Html, Head, Main, NextScript } from 'next/document'
import ThirdPartyScripts from '../ThirdPartyScripts'

export default function Document() {
    return (
        <Html>
                <Head />
            <body>
                <Main />
                <NextScript />
                <ThirdPartyScripts />
            </body>
        </Html>
    )
}
