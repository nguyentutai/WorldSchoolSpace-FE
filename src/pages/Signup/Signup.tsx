import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

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
    <div className="flex flex-col mx-auto mt-5 bg-white rounded-lg">
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center xl:p-7 mx-auto">
          <div className="flex flex-col w-full h-full p-6 text-center bg-white border shadow-lg rounded-3xl max-w-xl">
            <h3 className="mb-3 text-2xl font-medium text-gray-900 sm:text-3xl">
              Đăng ký
            </h3>

            <Form
              form={form}
              name="signup"
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4 w-[500px]"
            >
              <Form.Item
                label="Tên"
                name="name"
                rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
              >
                <Input placeholder="Nhập tên của bạn" className="h-[50px]" />
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
                <Input placeholder="Nhập địa chỉ email" className="h-[50px]" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password
                  placeholder="Nhập mật khẩu"
                  className="h-[50px]"
                />
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
                <Input.Password
                  placeholder="Xác nhận mật khẩu"
                  className="h-[50px]"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full h-12"
                >
                  Đăng Ký
                </Button>
              </Form.Item>
            </Form>
            <p className="text-center">
              Đã có tài khoản?{"  "}
              <Link to="/signin" className="text-blue-600">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
