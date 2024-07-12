import { Flex } from 'antd';
import React, { FC } from 'react';
import CompanyDetails from './login/CompanyDetails';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignupForm';

const CentralCardContentLogin: FC = () => {
  const cardInnerClassName = 'w-[50%] p-7';

  return (
    <Flex justify="space-between" className="h-[40vh]">
      <Flex
        vertical
        justify="space-between"
        className={`${cardInnerClassName} bg-secondaryBackground rounded-l-xl`}
      >
        <CompanyDetails />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        className={`${cardInnerClassName} bg-primaryBackground rounded-r-xl`}
      >
        {/* <LoginForm /> */}
        <SignupForm />
      </Flex>
    </Flex>
  );
};

export default CentralCardContentLogin;
