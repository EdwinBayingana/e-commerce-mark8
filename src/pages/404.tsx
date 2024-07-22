import Button from "@components/shared/button";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Flex, Result } from "antd";
import { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
  const { redirectTo } = useRedirection();

  return (
    <Flex align="center" justify="center" className="h-screen">
      <Result
        status="404"
        title={<span className="text-secondary">404</span>}
        subTitle={
          <span className="text-secondary">Sorry, page not found.</span>
        }
        extra={
          <Button type="primary" onClick={() => redirectTo(routes.home.url)}>
            Back Home
          </Button>
        }
      />
    </Flex>
  );
};

export default NotFound;
