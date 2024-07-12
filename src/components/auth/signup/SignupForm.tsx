import React, { useState } from "react";
import { Checkbox, ConfigProvider, Flex, Form } from "antd";
import Input from "@components/shared/input";
import Button from "@components/shared/button";
import { BiLogInCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import Typography from "@components/shared/typography";
import type { CheckboxProps } from "antd";

const SignupForm: React.FC = () => {
  const formLabelClassName = "text-[9.5px] text-secondary mb-0.5 font-semibold";
  const inputIconSize = 17;

  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<boolean>(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    e.target.checked ? setIsCheckBoxChecked(true) : setIsCheckBoxChecked(false);
  };

  return (
    <Form layout="vertical" className="h-full">
      <Flex vertical justify="space-between" className="h-full w-full">
        <Typography variant="subTitle" className="mb-2 md:mb-0">
          Register
        </Typography>

        <Flex className="gap-4 flex-col md:flex-row">
          <Flex vertical className="w-full gap-3">
            <Form.Item
              name="firstName"
              rules={[{ message: "Please input the First Name!" }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                First Name
              </Typography>
              <Input
                addonBefore={
                  <HiOutlineUser
                    className="text-primary"
                    size={inputIconSize}
                  />
                }
                placeholder="Enter First Name"
              />
            </Form.Item>
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

          {/* Right side */}

          <Flex vertical className="w-full gap-3">
            <Form.Item
              name="lastName"
              rules={[{ message: "Please input the Last Name!" }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Last Name
              </Typography>
              <Input
                addonBefore={
                  <HiOutlineUser
                    className="text-primary"
                    size={inputIconSize}
                  />
                }
                placeholder="Enter Last Name"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[{ message: "Please input the Phone Number!" }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Phone Number
              </Typography>
              <Input
                addonBefore={
                  <MdOutlinePhone
                    className="text-primary"
                    size={inputIconSize}
                  />
                }
                placeholder="--- --- ---"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[{ message: "Please input the Password!" }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Confirm Password
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
        </Flex>

        <Flex className="flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mt-3 md:mt-0">
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "#FFFFFF",
                colorBorder: isCheckBoxChecked ? "#c1cf16" : "#242e3970",
                borderRadius: 5,
              },
            }}
          >
            <Checkbox onChange={onChange} className="custom-checkbox">
              <Typography variant="caption" className="cursor-pointer">
                I agree to the&nbsp;
                <span className="underline font-bold text-secondary">
                  Terms and Conditions
                </span>
              </Typography>
            </Checkbox>
          </ConfigProvider>

          <Form.Item className="my-auto">
            <Button type="primary" htmlType="submit" className="w-full">
              Register
              <BiLogInCircle className="text-secondary" size={15} />
            </Button>
          </Form.Item>
        </Flex>
      </Flex>
    </Form>
  );
};

export default SignupForm;
