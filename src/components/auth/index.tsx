import { Card, Flex } from 'antd';
import React, { FC, Fragment } from 'react';

interface IAuthContentProps {
  BottomCardContentLeft: FC;
  BottomCardContentRight: FC;
  CentralCardContent: FC;
}

const AuthContent: FC<IAuthContentProps> = ({
  BottomCardContentLeft,
  BottomCardContentRight,
  CentralCardContent,
}) => {
  const cardOuterClassName = 'border-none bg-primaryBackground w-[45vw]';
  const outerCardStyles = { body: { padding: 0, overflow: 'hidden' } };

  return (
    <Fragment>
      <Flex vertical justify="space-between" className="gap-4">
        <Card className={cardOuterClassName} styles={outerCardStyles}>
          <CentralCardContent />
        </Card>

        <Card className={cardOuterClassName} styles={outerCardStyles}>
          <Flex justify="space-between" className="h-[13vh] rounded-xl p-7">
            <BottomCardContentLeft />
            <BottomCardContentRight />
          </Flex>
        </Card>
      </Flex>
    </Fragment>
  );
};

export default AuthContent;
