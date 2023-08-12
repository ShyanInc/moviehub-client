'use client'
import { Footer } from "antd/es/layout/layout"
import s from "./style.module.sass"
import inst from "../../app/assets/icons/instagram.png"
import twitter from "../../app/assets/icons/twitter.png"
import Image from 'next/image';

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
            <a href=""><Image src={inst} alt="instagram link" width={24} height={24} /></a>
            <a href=""><Image src={twitter} alt="Twitter link" width={24} height={24} /></a>
            </div>
        </Footer>
    );
}