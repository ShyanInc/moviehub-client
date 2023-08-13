'use client'
import { UserOutlined } from "@ant-design/icons/lib/icons";
import Avatar from "antd/es/avatar/avatar";

export default function UserAvatar() {
  return (
    <div>
      <Avatar
        icon={<UserOutlined />}/>
      Guest
    </div>
  );
}

