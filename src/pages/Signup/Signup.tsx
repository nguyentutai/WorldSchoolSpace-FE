import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Khởi tạo form instance ở đây

  const onFinish = async (values: any) => {
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/register", values);
      notification.success({
        message: "Đăng ký thành công",
        description: response.data.message || "Bạn đã đăng ký thành công!",
      });
      navigate("/signin");
    } catch (error) {
      notification.error({
        message: "Đăng ký không thành công",
        description:
          error.response?.data?.message || "Đã xảy ra lỗi. Vui lòng thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex flex-col mx-auto mt-5 bg-white rounded-lg">
      <Form
        form={form} // Truyền form instance vào đây
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
        >
          <Input placeholder="Nhập tên của bạn" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Vui lòng nhập địa chỉ email hợp lệ!",
            },
          ]}
        >
          <Input placeholder="Nhập địa chỉ email" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="password_confirmation"
          rules={[
            { required: true, message: "Vui lòng xác nhận mật khẩu!" },
            {
              validator: async (_, value) => {
                const password = form.getFieldValue("password");
                if (!value || value === password) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu xác nhận không khớp!");
              },
            },
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full"
          >
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
      <p className="text-center">
        Đã có tài khoản? <Link to="/signin">Đăng nhập</Link>
      </p>
    </div>
  );
};

export default Signup;
