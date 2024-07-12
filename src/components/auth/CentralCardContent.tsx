import useRedirection from '@utils/hooks/useRedirection';
import { Flex } from 'antd';
import React, { FC } from 'react';
import CompanyDetails from './login/CompanyDetails';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignupForm';

const CentralCardContentLogin: FC = () => {
  const { isLoginPage } = useRedirection();
  const cardInnerClassName = `${isLoginPage ? 'w-[50%]' : 'w-full'}  p-7`;

  return (
    <Flex justify="space-between" className="h-[40vh]">
      {isLoginPage && (
        <Flex
          vertical
          justify="space-between"
          className={`${cardInnerClassName} bg-secondaryBackground rounded-l-xl`}
        >
          <CompanyDetails />
        </Flex>
      )}

      <Flex
        vertical
        justify="space-between"
        className={`bg-primaryBackground ${cardInnerClassName} ${isLoginPage ? 'rounded-r-xl' : 'rounded-l-xl'}`}
      >
        {isLoginPage ? <LoginForm /> : <SignupForm />}
      </Flex>
    </Flex>
  );
};

export default CentralCardContentLogin;
