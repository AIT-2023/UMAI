"use client"
import { useState } from 'react';
import axios from 'axios';
//import Cookies from 'js-cookie'; // js-cookieをインポート
import { setCookie, destroyCookie } from 'nookies';

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState(''); // トークンを格納するステート

  // Email用のテキストフィールドを変更した際のメソッド
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setError((prev) => ({
        ...prev,
        email: "エラー：メールアドレスを入力してください。",
      }));
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(e.target.value)) {
      setError((prev) => ({
        ...prev,
        email: "エラー：正しいメールアドレスを入力してください。",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  // password用のテキストフィールドを変更した際のメソッド
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setError((prev) => ({
        ...prev,
        password: "エラー：パスワードを入力してください。",
      }));
    } else if (!/^[a-zA-Z0-9]{6,}$/.test(e.target.value)) {
      setError((prev) => ({
        ...prev,
        password: "エラー：半角英数字6文字以上で入力してください。",
      }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  // 送信ボタンを押した際のメソッド
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit")
    var params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);

    const axiosInstance = axios.create({
      baseURL: "http://localhost:8000",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*",
      },
    })
    try {
      const response = await axiosInstance.post('/api/token', params)

      console.log('Token in:',response.data.access_token)

      // FastAPIからのレスポンスからトークンを抽出
      setToken(response.data.access_token);

      // トークンをCookieに保存
      //Cookies.set('token', token);
      setCookie(null, 'accessToken', response.data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
      });

      // トークンをstateに保存
      //setToken(token);

      console.log('Token saved in Cookie:', token);
    } catch (error) {
      console.log("エラーだよ：");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        <p>
        Next.js to FastAPI Example
        </p>
      </h1>
      {token ? (
        <p>Token: {token}</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        
        <input
          type="name"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="password"
          onInput={handlePasswordChange} 
          value={String(password)}
        />
        <button type="submit">Submit</button>
        {token && (
        <div>
          <h2>Generated Token:</h2>
          <p>{token}</p>
        </div>
      )}
      </form>
    </div>
  );
}