"use client"
import React, { useState } from "react";
import { signIn } from "next-auth/react"
import { Form, Input, Button } from "antd";
import s from "./style.module.sass";

export default function Signup() {
  const [username,setUsername] = useState("");
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
  }

  return <main>
      <Form className={s.signUpForm + " container"}>
        <Form.Item label="Username">
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
