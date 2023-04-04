import Script from 'next/script';

const ThirdPartyScripts = () => <>
    <Script src="https://card.codyogden.com/card.js" strategy="beforeInteractive" />
</>
export default ThirdPartyScripts;