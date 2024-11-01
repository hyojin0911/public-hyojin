// NextAuth와 구글 인증 제공자(GoogleProvider)를 불러옴
import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

// NextAuth 설정 함수 정의
export default NextAuth({
    // 인증 제공자 목록 설정
    providers:[
        GoogleProvider({
            // 구글 API 클라이언트 ID와 시크릿을 환경 변수에서 불러옴
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    // 인증 시 사용할 비밀키 설정(보안 강화를 위해)
    secret: process.env.NEXTAUTH_SECRET,
});