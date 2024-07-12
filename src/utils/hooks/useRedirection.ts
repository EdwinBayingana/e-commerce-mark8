import routes from '@utils/routes';
import { usePathname, useRouter } from 'next/navigation';

interface RouterState {
  pathname: string;
  isLoginPage: boolean;
  isSignupPage: boolean;
  redirectTo: (path: string) => void;
}

const useRedirection = (): RouterState => {
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = [routes.login.url].includes(pathname) ? true : false;
  const isSignupPage = [routes.signup.url].includes(pathname) ? true : false;

  const redirectTo = (path: string) => {
    router.push(path);
  };

  return { pathname, isLoginPage, isSignupPage, redirectTo };
};

export default useRedirection;
