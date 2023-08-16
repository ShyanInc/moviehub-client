"use client"
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import s from "./style.module.sass"

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <main>
    <Form className={s.signForm}>
      <Form.Item label="Username">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password">
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Signin</Button>
    </Form>
    </main>
  );
};

export default Signin;
