import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Flex } from "antd";
import { BiLogInCircle } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

export const BottomCardContentLeft = () => {
  const { isLoginPage } = useRedirection();
  const topText = isLoginPage ? "New here?" : "Already have an account?";
  const lowerText = isLoginPage ? "Create an account" : "Go to Login";

  return (
    <Flex vertical justify="space-around">
      <Typography variant="body" className="font-bold">
        {topText}
      </Typography>
      <Typography variant="caption">{lowerText}</Typography>
    </Flex>
  );
};

export const BottomCardContentRight = () => {
  const { redirectTo, isLoginPage, isSignupPage } = useRedirection();
  const ButtonDisplayIcon = isLoginPage ? FaArrowRightLong : BiLogInCircle;
  const buttonRedirectionPathname = isLoginPage
    ? routes.signup.url
    : routes.login.url;

  return (
    <Button
      type="secondary"
      onClick={() => redirectTo(buttonRedirectionPathname)}
    >
      {isLoginPage ? "Register Here" : "Login"}
      <ButtonDisplayIcon
        className="text-primary"
        size={isSignupPage ? 15 : 13}
      />
    </Button>
  );
};
