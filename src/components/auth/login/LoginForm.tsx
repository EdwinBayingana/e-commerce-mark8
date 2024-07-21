import React from "react";
import { Flex, Form, notification, Spin } from "antd";
import Input from "@components/shared/input";
import Button from "@components/shared/button";
import { BiLogInCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { HiOutlineLockClosed } from "react-icons/hi";
import Typography from "@components/shared/typography";
import routes from "@utils/routes";
import useRedirection from "@utils/hooks/useRedirection";
import { useForm, Controller } from "react-hook-form";
import { useLoginMutation } from "@store/actions/auth";
import { LoadingOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "@utils/constants";
import { setToken } from "@store/reducers/app";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const { redirectTo } = useRedirection();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = async (data: { email: string; password: string }) => {
    await login(data).then((res) => {
      if (!res?.error && res?.data?.data?.accessToken) {
        Cookies.set(TOKEN_NAME, res?.data?.data?.accessToken, { expires: 7 });
        dispatch(setToken(res?.data?.data?.accessToken));

        const redirectToString = router.query.redirectTo;
        if (redirectToString) {
          router.replace(redirectToString as string);
        } else {
          router.replace(routes.home.url);
        }

        notification.success({
          message: "Login successful!",
        });
      }
    });
  };

  const formLabelClassName = "text-[9.5px] text-secondary mb-0.5 font-semibold";
  const inputIconSize = 17;

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className="h-full"
    >
      <Flex vertical justify="space-between" className="h-full gap-4">
        <Typography variant="subTitle" className="self-center md:self-auto">
          Login
        </Typography>

        <Flex vertical className="gap-4">
          <Form.Item
            name="email"
            className="my-auto"
            validateStatus={errors.email ? "error" : ""}
          >
            <Typography variant="body" className={formLabelClassName}>
              Email
            </Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Please input the Email!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  addonBefore={
                    <CgMail className="text-primary" size={inputIconSize} />
                  }
                  placeholder="Enter email"
                />
              )}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </Form.Item>
          <Form.Item
            name="password"
            className="my-auto"
            validateStatus={errors.password ? "error" : ""}
          >
            <Typography variant="body" className={formLabelClassName}>
              Password
            </Typography>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Please input the Password!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="primary"
                  inputType="password"
                  addonBefore={
                    <HiOutlineLockClosed
                      className="text-primary"
                      size={inputIconSize}
                    />
                  }
                  placeholder="Enter password"
                />
              )}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </Form.Item>
        </Flex>

        <Flex className="flex-col md:flex-row md:items-center md:justify-between">
          <button onClick={() => redirectTo(routes.forgotPassword.url)}>
            <Typography
              variant="body"
              className="hidden md:inline underline font-bold cursor-pointer"
            >
              Forgot Password?
            </Typography>
          </button>

          <Form.Item className="md:my-auto flex-end">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              disabled={isLoading}
            >
              Login
              {isLoading ? (
                <Spin
                  spinning={isLoading}
                  indicator={
                    <LoadingOutlined spin className="text-secondary" />
                  }
                ></Spin>
              ) : (
                <BiLogInCircle className="text-secondary" size={15} />
              )}
            </Button>
          </Form.Item>

          <button
            onClick={() => redirectTo(routes.forgotPassword.url)}
            className="flex self-center md:hidden"
          >
            <Typography
              variant="body"
              className="underline font-bold cursor-pointer"
            >
              Forgot Password?
            </Typography>
          </button>
        </Flex>
      </Flex>
    </Form>
  );
};

export default LoginForm;
