import Link from "next/link";
import styles from "@styles/404.module.css";
import Layout from "@components/Layout";
import {FaExclamationTriangle} from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1>
                <FaExclamationTriangle />
                404 | There is nothing here</h1>
                <p><Link href="/">Go Back</Link></p>
            </div>
        </Layout>
    )
}
