import React from "react";
import '../App.css';
import { Styles } from '../components/styles';
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function Login() {
  let history = useHistory();

  const onFinish = async (data) => {
    try {
      // Should format date value before submit.
      console.log('Received values of form: ', data);
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response) {
        const tokenObj = await response.json();
        localStorage.setItem('token', tokenObj.token);
        history.push('/profile')
      }
    } catch (err) {
      console.error(err)
    }
  };

  return (

    <Styles>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
      >
        <h2>Connection</h2>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Entrez votre email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mot de Passe"
          name="motDePasse"
          rules={[
            {
              required: true,
              message: 'Entrez votre mot de passe!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Connection
          </Button>
        </Form.Item>
      </Form>
          
    </Styles>

  )
}