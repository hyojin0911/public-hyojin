// NextAuth의 SessionProvider 불러오기
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import '../app/globals.css';

// 최상의 App 컴포넌트 정의
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps){
    return (
        // 세션 Provider로 감싸서 모든 컴포넌트에서 인증 정보를 사용할 수 있게 함
        <SessionProvider session = { session }>
            <Component {...pageProps}></Component>
        </SessionProvider>
    );
}

export default MyApp;