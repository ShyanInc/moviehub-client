'use client'
import s from "../Header/style.module.sass"
import { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons/lib/icons";
import Avatar from "antd/es/avatar/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import UserBurgerMenu from "../UserMenu";

export const UserAvatar = ({ session }: { session: any }) => {
  return (
    <>
      {!session?.data && <Avatar icon={<UserOutlined />} />}
    </>
  )
}

export default function UserCompoment() {
  const session = useSession();

  return (
    <div className={s.Auth}>
      {!session.data && <><UserAvatar session={session} /><p>Guest</p><Link href="/api/auth/signin">Sign In</Link></>}
      {session.data && <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Link>}
      <UserBurgerMenu userIcon={<UserAvatar session={session} />} />
    </div>
  );
}
