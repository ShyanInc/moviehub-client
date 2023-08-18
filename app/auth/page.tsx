"use client"
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import s from "./style.module.sass"
import { GithubOutlined } from "@ant-design/icons/lib/icons";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function hanlder(e: any) {
    e.preventDefault();
  }

  return (
    <main>
      <Form className={s.signForm + " container"}>
        <Form.Item label="Username">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <div className={s.buttons}>
          <Button htmlType="submit" onClick={(e)=>hanlder(e)}>Sign In</Button>
          <Button htmlType="submit">Continue with Git<GithubOutlined /></Button>
        </div>
      </Form>
    </main>
  );
};

export default Signin;