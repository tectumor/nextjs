import { useRouter } from "next/Router";
import Layout from "@components/Layout";

export default function EventPage() {
    const router = useRouter();
    console.log(router);

    return (
        <Layout>
            <h1>My Event</h1>
            <p>{router.query.slug}</p>
            <button onClick={() => router.push("/")}>Click</button>
        </Layout>
    )
}
