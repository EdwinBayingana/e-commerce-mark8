import Button from '@components/shared/button';
import Typography from '@components/shared/typography';
import { Card, Flex } from 'antd';
import React, { Fragment } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import CompanyDetails from './login/CompanyDetails';
import LoginForm from './login/LoginForm';

const AuthContent = () => {
  const cardOuterClassName = 'border-none bg-primaryBackground w-[45vw]';
  const cardInnerClassName = 'w-[50%] p-7';
  const outerCardStyles = { body: { padding: 0, overflow: 'hidden' } };

  return (
    <Fragment>
      <Flex vertical justify="space-between" className="gap-4">
        <Card className={cardOuterClassName} styles={outerCardStyles}>
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
              <LoginForm />
            </Flex>
          </Flex>
        </Card>
        {/* Lower Card */}

        <Card className={cardOuterClassName} styles={outerCardStyles}>
          <Flex justify="space-between" className="h-[13vh] rounded-xl p-7">
            <Flex vertical justify="space-around" className="">
              <Typography variant="body" className="font-bold">
                New here?
              </Typography>
              <Typography variant="caption">Create an account</Typography>
            </Flex>
            <Button type="secondary">
              Register Here
              <FaArrowRightLong className="text-primary" />
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Fragment>
  );
};

export default AuthContent;
