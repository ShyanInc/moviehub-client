"use client"
import { Card, Avatar } from "antd";
import s from "./style.module.sass";
import { useGetAllMoviesQuery } from "../api/auth/movies/movies.api";

export default function Profile() {
    const { data, error, isLoading } = useGetAllMoviesQuery({limit: 2});
    if (error) {
        console.log(error);
    } else if (isLoading) {
        console.log('Loading movies...');
    } else {
        console.log(data);
    }

    return (
        <main>
            <div className={s.profileCards + " container"}>
                <Card className={s.userCard}>
                    <Avatar className={s.avatar} src="https://avatars.githubusercontent.com/u/123456789?v=4" />
                    <h1>{"UserName"}</h1>
                </Card>
                <Card className={s.lastWatchedCard}></Card>
            </div>
        </main>
    )
};
