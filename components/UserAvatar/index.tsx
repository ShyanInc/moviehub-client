'use client'
import s from "../Header/style.module.sass"
import { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons/lib/icons";
import Avatar from "antd/es/avatar/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserAvatar() {
  const session = useSession();
  console.log(session);
  useEffect(() => {
    console.log(session);

  }, [session])

  return (
    <div className={s.Auth}>
      {!session.data && <><Avatar icon={<UserOutlined />} /><p>Guest</p><Link href="/api/auth/signin">Sign In</Link></>}
      {session.data && <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Link>}
    </div>
  );
}

