'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Page() {
	let ID = usePathname();
	const router = useRouter();
	//Pathname（取得したURL）が/0ならログイン失敗/loginへとばす
	//それ以外（tokenが取得できている）ならホーム画面へとばす
	
	ID = ID.replace('/list', '');
	

	return <h1 className="text-3xl font-bold">ID:{ID}</h1>;
	
}

//