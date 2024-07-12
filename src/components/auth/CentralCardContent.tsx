import useRedirection from "@utils/hooks/useRedirection";
import { Flex } from "antd";
import React, { FC } from "react";
import CompanyDetails from "./login/CompanyDetails";
import LoginForm from "./login/LoginForm";
import SignupForm from "./signup/SignupForm";

const CentralCardContent: FC = () => {
  const { isLoginPage } = useRedirection();
  const cardInnerClassName = `${isLoginPage ? "w-[50%]" : "w-full"}  p-7`;

  return (
    <Flex
      justify="space-between"
      className={`${isLoginPage ? "h-[40vh] w-[45vw]" : "h-[50vh] w-[45vw]"}`}
    >
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
        className={`bg-primaryBackground ${cardInnerClassName} ${isLoginPage ? "rounded-r-xl" : "rounded-xl"}`}
      >
        {isLoginPage ? <LoginForm /> : <SignupForm />}
      </Flex>
    </Flex>
  );
};

export default CentralCardContent;
