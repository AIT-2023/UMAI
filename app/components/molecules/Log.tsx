import Link from "next/link"

type LoginProps = {
    url: string
    startAt?: string
    title?: string
    description?: string
}
export default function Log({url, startAt, title, description}: LoginProps) {
    return (
        <div className="border">
            <div>
                <span>{startAt}</span>
                <h2 >
                    <Link href={url} target="_blank">{title}</Link>
                </h2>
                <p className="text-gray-500">{description}</p>
                <div>
                    <Link href={url} target="_blank">詳しく見る</Link>
                </div>
            </div>
        </div>
    )
}