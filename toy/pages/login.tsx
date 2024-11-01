// NextAuth에서 제공하는 signIn 함수를 불러옴
import { signIn } from "next-auth/react";

// 로그인 페이지 컴포넌트 정의
export default function LoginPage(){
    return(
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            {/* 구글 로그인 버튼 */}
            <button
            // 클릭 시 'google' 제공자를 통해 로그인 시도
                onClick={ () => signIn("google") }
                // tailwind CSS 로 스타일 적용: 파란색 배경, 흰색 텍스트, 호버 시 색상 변화
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                Google Login
            </button>
        </div>
    );
}