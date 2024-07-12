import PrimaryLogo from "@assets/images/primary_logo.png";

// const AuthBackgroundImage =
//   'https://res.cloudinary.com/dlw8ohn6p/image/upload/v1720623086/auth-bg_esuleo.png';

const AuthBackgroundImage = process.env.NEXT_PUBLIC_AUTH_BG_IMAGE;

export { PrimaryLogo, AuthBackgroundImage };
