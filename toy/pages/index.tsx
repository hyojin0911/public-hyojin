// 세션 상태(useSession)와 로그아웃(signOut)을 위한 NextAuth 함수, 리다이렉션을 위한 useRoute 불러오기
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from "react";

// 홈 페이지 컴포넌트 정의
export default function HomePage() {
    // 세션 정보를 가져와 로그인 여부 확인
    const { data: session } = useSession();
    const router = useRouter();

    // 컴포넌트가 렌더링될 때 실행됨
    useEffect(() => {
        // 세션이 없으면 로그인 페이지로 이동(비로그인 사용자의 접근 제한)
        if(!session){
            router.push('/login');
        }
    }, [session, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            {session ? (
                <>
                    {/* 사용자 환영 메시지 표시 */}
                    <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
                    {/* 로그아웃 버튼 */}
                    <button
                        onClick={() => signOut()}
                        className="mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        Logout.
                    </button>
                </>
            ) : (
                // 세션 확인 중일 때 로딩 메시지
                <p>Login loading...</p>
            )}
        </div>
    );
}