'use client'
import s from "../Header/style.module.sass"
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
    <>
      <div className={s.Auth}>
        <div>
          {!session.data && <><UserAvatar session={session} /><Link href={"/profile"}>Guest</Link><Link href="/api/auth/signin">Sign In</Link></>}
          {session.data && <Link href="#" onClick={() => signOut({ callbackUrl: "/", redirect: true })}>Sign Out</Link>}
        </div>
      </div>
      <UserBurgerMenu userIcon={<UserAvatar session={session} />} />
    </>
  );
}
