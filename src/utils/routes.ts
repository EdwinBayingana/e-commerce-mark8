const routes = {
  login: {
    label: 'Login',
    url: '/login',
    name: 'login',
  },
  signup: {
    label: 'Sign up',
    url: '/signup',
    name: 'signup',
  },
  home: {
    label: 'Home',
    url: '/',
    name: 'home',
  },
  setCookie: {
    url: '/api/setCookie',
  },
  serverLogin: {
    url: '/api/login',
  },
  serverLogout: {
    url: '/api/logout',
  },
};

export default routes;