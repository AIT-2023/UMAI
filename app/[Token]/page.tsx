'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Page() {
	let test = usePathname();
	const router = useRouter();
	//Pathname（取得したURL）が/0ならログイン失敗/loginへとばす
	//それ以外（tokenが取得できている）ならホーム画面へとばす
	if (test === "/0") {
		router.push(`/login`);
	  } else {
		router.push(`/list/${test}`);
	  }
	
	

	return <h1 className="text-3xl font-bold">リダイレクト…{test}</h1>;
	
}

//