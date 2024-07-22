import Router from "next/router";
import routes from "@utils/routes";

const handle401Error = () => {
  Router.replace(routes.login.url);
};

export { handle401Error };
