import useRedirection from "@utils/hooks/useRedirection";
import { Flex } from "antd";
import React, { FC } from "react";
import CompanyDetails from "./login/CompanyDetails";
import LoginForm from "./login/LoginForm";
import SignupForm from "./signup/SignupForm";

const CentralCardContent: FC = () => {
  const { isLoginPage } = useRedirection();
  const cardInnerClassName = `${isLoginPage ? "w-full md:w-[50%]" : "w-full"} p-5 md:p-7`;

  return (
    <Flex justify="space-between" className="md:max-h-[500px]">
      {isLoginPage && (
        <Flex
          vertical
          justify="space-between"
          className={`${cardInnerClassName} hidden md:flex bg-secondaryBackground rounded-l-xl`}
        >
          <CompanyDetails />
        </Flex>
      )}

      <Flex
        vertical
        justify="space-between"
        className={`bg-primaryBackground ${cardInnerClassName} ${isLoginPage ? "rounded-xl md:rounded-r-xl" : "rounded-xl"}`}
      >
        {isLoginPage ? <LoginForm /> : <SignupForm />}
      </Flex>
    </Flex>
  );
};

export default CentralCardContent;
