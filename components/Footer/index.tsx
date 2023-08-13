'use client'
import { Footer } from "antd/es/layout/layout"
import s from "./style.module.sass"
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons/lib/icons"

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <Footer className={s.footer}>
            <div>
                <p><span>©</span>All rights reserved</p>
                <div>Copyright {currentYear}</div>
            </div>
            <h1 className={'text_logo'}>MovieHub</h1>
            <div>
                <a href="http/www.instagram.com"><InstagramOutlined /></a>
                <a href="http/www.instagram.com"><TwitterOutlined /></a>
            </div>
        </Footer>
    );
}