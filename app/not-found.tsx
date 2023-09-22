import s from "./not-found.module.sass"
import { PageNotFound } from "../components/SVG/Not-Found"

export default function NotFound() {
    return (
        <main>
            <PageNotFound></PageNotFound>
            <h1 className={s.error}>Page Not Found</h1>
        </main>
    );
}
