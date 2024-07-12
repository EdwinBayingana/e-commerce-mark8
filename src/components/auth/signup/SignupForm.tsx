import React, { useState } from 'react';
import { Checkbox, ConfigProvider, Flex, Form } from 'antd';
import Input from '@components/shared/input';
import Button from '@components/shared/button';
import { BiLogInCircle } from 'react-icons/bi';
import { CgMail } from 'react-icons/cg';
import { HiOutlineLockClosed } from 'react-icons/hi';
import Typography from '@components/shared/typography';
import type { CheckboxProps } from 'antd';

const SignupForm: React.FC = () => {
  const formLabelClassName = 'text-[9.5px] text-secondary mb-1';
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<boolean>(false);

  const onChange: CheckboxProps['onChange'] = (e) => {
    e.target.checked ? setIsCheckBoxChecked(true) : setIsCheckBoxChecked(false);
  };

  return (
    <Form layout="vertical" className="h-full">
      <Flex vertical justify="space-between" className="h-full w-full">
        <Typography variant="subTitle">Register</Typography>

        <Flex className="gap-4">
          <Flex vertical className="w-full gap-4">
            <Form.Item
              name="email"
              rules={[{ message: 'Please input the Email!' }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Email
              </Typography>
              <Input
                addonBefore={<CgMail className="text-primary" size={15} />}
                placeholder="Enter email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ message: 'Please input the Password!' }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Password
              </Typography>
              <Input
                type="primary"
                inputType="password"
                addonBefore={
                  <HiOutlineLockClosed className="text-primary" size={15} />
                }
                placeholder="Enter password"
              />
            </Form.Item>
          </Flex>

          <Flex vertical className="w-full gap-4 ">
            <Form.Item
              name="email"
              rules={[{ message: 'Please input the Email!' }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Email
              </Typography>
              <Input
                addonBefore={<CgMail className="text-primary" size={15} />}
                placeholder="Enter email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ message: 'Please input the Password!' }]}
              className="my-auto"
            >
              <Typography variant="body" className={formLabelClassName}>
                Password
              </Typography>
              <Input
                type="primary"
                inputType="password"
                addonBefore={
                  <HiOutlineLockClosed className="text-primary" size={15} />
                }
                placeholder="Enter password"
              />
            </Form.Item>
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#c1cf16',
                colorBgContainer: '#FFFFFF',
                colorIconHover: '#c1cf16',
                colorBorder: isCheckBoxChecked ? '#c1cf16' : '#79878F',
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
            <Button type="primary" htmlType="submit">
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
