"use client"
import React, { useState } from "react";
import { signIn } from "next-auth/react"
import { Form, Input, Button } from "antd";
import s from "./style.module.sass"
import { GithubOutlined } from "@ant-design/icons/lib/icons";
// import { useRegisterUser } from "@/app/api/register.api";
import {options} from "../../api/auth/[...nextauth]/options"

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  async function  signInHanlder(e: any) {
    e.preventDefault();
    try {
      await signIn("credentials", { email: email, password: password, redirect: false })
    }
    catch (err) {
      console.log(err);
    }
    // const res = await useRegisterUser({ email: email, password: password })
    // console.log(res);
  }

  return <main>
      <Form className={s.signForm + " container"}>
        <Form.Item label="Username">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <div className={s.buttons}>
          <Button htmlType="submit" onClick={(e) =>  signInHanlder(e)}>Sign In</Button>
        </div>
      </Form>
    </main>
};
