"use client"

import Card from "@/app/components/molecules/Card";
import Headline from "@/app/components/atoms/Headline";
import { useEffect, useState } from "react";

export default function EventList() {
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      console.log("countが更新されました")
    }, [count])

  return (
    <div>
      <Headline title="ここはイベント一覧画面です" />
      <Card
        title="【React入門】絶対に躓かないReact（Next.js）ワークショップ #2"
        description="最近フロントエンドを学び始めた人や、これからフロントエンドを学んで行きたい人向けに、Reactのハンズオンを開催します！"
        startAt="2023-07-27 19:30"
        url="https://okinawa-frontend.connpass.com/event/289268/"
      />
      <Card
        title="【React入門】絶対に躓かないReact（Next.js）ワークショップ #3"
        description="最近フロントエンドを学び始めた人や、これからフロントエンドを学んで行きたい人向けに、Reactのハンズオンを開催します！"
        startAt="2023-07-27 20:00"
        url="https://okinawa-frontend.connpass.com/event/289268/"
      />
      <p>count: {count}</p>
      <button className="rounded-lg bg-purple-500 px-8 py-3 text-center text-sm hover:bg-purple-600" onClick={() => setCount(count+1)}>カウントアップ</button>
      <button className="rounded-lg bg-purple-500 px-8 py-3 text-center text-sm hover:bg-purple-600" onClick={() => setCount(count-1)}>カウントダウン</button>
    </div>
  )
}