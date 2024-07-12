import useRedirection from "@utils/hooks/useRedirection";
import { Card, Flex } from "antd";
import React, { FC, Fragment } from "react";

interface IAuthContentProps {
  BottomCardContentLeft?: FC;
  BottomCardContentRight?: FC;
  CentralCardContent: FC;
}

const AuthContent: FC<IAuthContentProps> = ({
  BottomCardContentLeft,
  BottomCardContentRight,
  CentralCardContent,
}) => {
  const { isLoginPage, isSignupPage } = useRedirection();
  const loginAndSignupMobileStyles =
    "md:w-[80vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw]";
  const forgotPasswordMobileStyles = "md:w-[40vw] xl:w-[30vw] 2xl:w-[25vw]";

  const cardOuterClassName = `border-none bg-primaryBackground iphoneSE:w-[90vw] xxs:w-[90vw] pro:w-[60vw] ${isLoginPage || isSignupPage ? loginAndSignupMobileStyles : forgotPasswordMobileStyles}`;
  const outerCardStyles = { body: { padding: 0, overflow: "hidden" } };

  return (
    <Fragment>
      <Flex
        vertical
        justify="space-between"
        className="gap-4 overflow-y-auto md:overflow-hidden my-4 md:my-0"
      >
        <Card className={cardOuterClassName} styles={outerCardStyles}>
          <CentralCardContent />
        </Card>

        <Card className={cardOuterClassName} styles={outerCardStyles}>
          <Flex
            justify="space-between"
            className="flex-col md:flex-row md:h-[13vh] gap-2 md:gap-0 p-3 md:p-7 rounded-xl"
          >
            {BottomCardContentLeft && <BottomCardContentLeft />}
            {BottomCardContentRight && <BottomCardContentRight />}
          </Flex>
        </Card>
      </Flex>
    </Fragment>
  );
};

export default AuthContent;
