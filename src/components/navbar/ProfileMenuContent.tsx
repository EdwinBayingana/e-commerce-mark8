import { Flex } from "antd";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { PiHeadset } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import IconWithLabel from "./IconWithLabel";
import { PrimaryLogoWithLabel } from "@components/logo";
import { AuthBackgroundImage } from "@utils/images";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { useDispatch } from "react-redux";
import { clearToken, setToken } from "@store/reducers/app";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "@utils/constants";

const ProfileMenuContent: React.FC = () => {
  const { redirectTo } = useRedirection();
  const dispatch = useDispatch();

  const icons = [
    { label: "My Account", icon: HiOutlineUser, onClick: () => {} },
    {
      label: "My Orders",
      icon: HiOutlineShoppingCart,
      onClick: () => {},
    },
    { label: "Help", icon: PiHeadset, onClick: () => {} },
    { label: "About", icon: FiInfo, onClick: () => {} },
    { label: "Settings", icon: MdOutlineSettings, onClick: () => {} },
  ];
  const logoutContent = [
    {
      label: "Logout",
      icon: IoMdLogOut,
      onClick: () => {
        Cookies.remove(TOKEN_NAME);
        clearToken();
        dispatch(setToken(undefined));
        redirectTo(routes.login.url);
      },
    },
  ];

  const loggedInUser = {
    firstName: "Yves",
    lastName: "Honore B.",
    email: "yveshonore@awesomity.rw",
  };

  return (
    <Flex vertical justify="space-between" gap={5} className="px-6 py-4 w-full">
      <Flex className="pb-4 relative">
        <PrimaryLogoWithLabel
          gap={15}
          justify="normal"
          className="w-[44px] h-[44px] profile-image-container rounded-md"
          title={`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
          caption={loggedInUser?.email}
          isHeaderLogo={true}
          isProfileMenuAvatar={true}
          imageSrc={AuthBackgroundImage}
        />
      </Flex>
      <Flex
        vertical
        className="h-full w-full justify-around border-y-[1px] py-3"
      >
        {icons?.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item?.icon}
            label={item?.label}
            containerGap={12}
            iconSize={15}
            justify="normal"
            containerClassName="cursor-pointer hover:text-black"
            iconClassName="my-auto font-bold"
            labelClassName="text-[11px] text-secondary my-auto"
          />
        ))}
      </Flex>
      <Flex vertical className="pb-3 py-4">
        {logoutContent?.map((item, index) => (
          <IconWithLabel
            key={index}
            Icon={item?.icon}
            label={item?.label}
            containerGap={12}
            iconSize={15}
            justify="normal"
            containerClassName="cursor-pointer hover:text-black"
            iconClassName="my-auto font-bold"
            labelClassName="text-[11px] text-secondary my-auto"
            onClick={item?.onClick}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProfileMenuContent;
