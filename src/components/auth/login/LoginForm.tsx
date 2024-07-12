import React from "react";
import { Flex, Form } from "antd";
import Input from "@components/shared/input";
import Button from "@components/shared/button";
import { BiLogInCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { HiOutlineLockClosed } from "react-icons/hi";
import Typography from "@components/shared/typography";
import routes from "@utils/routes";
import useRedirection from "@utils/hooks/useRedirection";

const LoginForm: React.FC = () => {
  const { redirectTo } = useRedirection();
  const formLabelClassName = "text-[9.5px] text-secondary mb-0.5 font-semibold";
  const inputIconSize = 17;

  return (
    <Form layout="vertical" className="h-full">
      <Flex vertical justify="space-between" className="h-full gap-4">
        <Typography variant="subTitle" className="self-center md:self-auto">
          Login
        </Typography>

        <Flex vertical className="gap-4">
          <Form.Item
            name="email"
            rules={[{ message: "Please input the Email!" }]}
            className="my-auto"
          >
            <Typography variant="body" className={formLabelClassName}>
              Email
            </Typography>
            <Input
              addonBefore={
                <CgMail className="text-primary" size={inputIconSize} />
              }
              placeholder="Enter email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ message: "Please input the Password!" }]}
            className="my-auto"
          >
            <Typography variant="body" className={formLabelClassName}>
              Password
            </Typography>
            <Input
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
              onClick={() => redirectTo(routes.home.url)}
              className="w-full"
            >
              Login
              <BiLogInCircle className="text-secondary" size={15} />
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
