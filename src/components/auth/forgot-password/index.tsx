import Button from "@components/shared/button";
import Input from "@components/shared/input";
import Typography from "@components/shared/typography";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Flex, Form } from "antd";
import React, { FC } from "react";
import { CgMail } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";

const ForgotPasswordContent: FC = () => {
  const { redirectTo } = useRedirection();
  return (
    <Form layout="vertical" className="">
      <Flex
        vertical
        justify="space-between"
        className="min-h-[25vh] md:w-[24vw] p-10 gap-6"
      >
        <Typography variant="subTitle" className="text-secondary mb-0.5">
          Forgot Password
        </Typography>
        <Form.Item
          name="email"
          rules={[{ message: "Please input the Email!" }]}
          className="my-auto"
        >
          <Typography
            variant="body"
            className="text-[9px] text-secondary mb-0.5 font-semibold"
          >
            Your Email
          </Typography>
          <Input
            addonBefore={<CgMail className="text-primary" size={17} />}
            placeholder="Enter email"
          />
        </Form.Item>

        <Flex justify="space-between" align="center">
          <button onClick={() => redirectTo(routes.login.url)}>
            <Typography
              variant="body"
              className="underline cursor-pointer font-bold"
            >
              Login Instead
            </Typography>
          </button>

          <Form.Item className="my-auto">
            <Button type="primary" htmlType="submit">
              Submit
              <IoMdCheckmark className="text-secondary" size={15} />
            </Button>
          </Form.Item>
        </Flex>
      </Flex>
    </Form>
  );
};

export default ForgotPasswordContent;
