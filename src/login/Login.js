import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";
import "../login/Login.css";

const Login = ({ setIsLoggedIn, setToken }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchLogin = async (values) => {
    const url = "http://localhost:3000/admin/login";
    try {
      const response = await axios.post(url, values);
      localStorage.setItem("token", response.data.id);
      setToken(response.data.id);
      navigate("/dashboard", { replace: true }); // Use replace here to replace the history entry
      // console.log("NAVIGATE",navigate())
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
    <div className="image-container"></div>
    <div className="form-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 400,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={fetchLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="itee">
          <h2> Admin Panel </h2>
          <Form.Item
            className="user-name"
            // label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="login-submit-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {error && <div className="error-message">{error}</div>}
      </Form>
    </div>
  </div>
  );
};

export default Login;
