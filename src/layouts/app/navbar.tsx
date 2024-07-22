import { PrimaryLogoWithLabel } from "@components/logo";
import Button from "@components/shared/button";
import { Flex, Layout } from "antd";
import { TbSmartHome } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";
import useDisclose from "@utils/hooks/useDisclose";
import PopoverModal from "@components/shared/modal/popover";
import ProfileMenuContent from "@components/navbar/ProfileMenuContent";
import IconWithLabel from "@components/navbar/IconWithLabel";
import { FC } from "react";
import routes from "@utils/routes";
import useRedirection from "@utils/hooks/useRedirection";
import useScreenSizes from "@utils/hooks/useScreenSizes";
import SearchPopup from "@components/shared/modal/SearchPopup";

interface NavbarProps {
  handleOpenCartDrawer: () => void;
}

const NavbarComponent: FC<NavbarProps> = ({ handleOpenCartDrawer }) => {
  const { redirectTo, pathname } = useRedirection();
  const { isTablet } = useScreenSizes();
  const { open, close, isOpen } = useDisclose();

  const headerIconsLeft = [
    {
      label: routes.home.label,
      icon: TbSmartHome,
      pathname: routes.home.url,
      onClick: () => redirectTo(routes.home.url),
    },
    {
      label: routes.stores.label,
      icon: BiStoreAlt,
      pathname: routes.stores.url,
      onClick: () => redirectTo(routes.stores.url),
    },
  ];

  const headerIconsRight = [
    { label: "", icon: FiSearch, onClick: () => open() },
    {
      label: "My Cart",
      icon: HiOutlineShoppingCart,
      onClick: handleOpenCartDrawer,
      isActionRequired: true,
    },
    {
      label: routes.saved.label,
      icon: FaRegHeart,
      pathname: routes.saved.url,
      onClick: () => redirectTo(routes.saved.url),
    },
  ];

  const allIcons = [...headerIconsLeft, ...headerIconsRight];

  const iconsGap = 35;
  const iconsSpanClassName = `${isTablet ? "hidden" : "flex"} my-auto gap-5 md:gap-8`;

  const ProfileDropdown = () => {
    const {
      open: handleOpenMenu,
      isOpen: isMenuOpen,
      close: handleCloseMenu,
    } = useDisclose();
    return (
      <PopoverModal
        trigger="click"
        showArrow={false}
        content={
          <Flex className="min-h-[50vh] xxs:min-h-[45vh] min-w-[75vw] max-w-[30vw] pro:min-w-[60vw] miniTab:min-w-[40vw] md:min-w-[50vw] lg:min-w-[35vw] xl:min-w-[20vw] xl:max-w-[20vw] rounded-[7px]">
            <ProfileMenuContent />
          </Flex>
        }
        close={handleCloseMenu}
        open={isMenuOpen}
        placement="top"
        overlayInnerStyle={{
          backgroundColor: "transparent",
          padding: 0,
          border: "1px solid #cccccc25",
          marginRight: "5%",
        }}
      >
        <Flex
          className="border-[0.5px] miniTab:border-[1.5px] border-borderColor rounded-lg cursor-pointer h-8 miniTab:h-11 my-auto"
          onClick={handleOpenMenu}
        >
          <HiOutlineUser
            className="text-textGray border-r-[0.5px] miniTab:border-r-[1.5px] border-borderColor h-auto w-7 miniTab:w-11 px-1 miniTab:px-2.5"
            size={28}
          />

          <GoChevronDown
            className="text-black my-auto w-6 miniTab:w-7"
            size={20}
          />
        </Flex>
      </PopoverModal>
    );
  };

  return (
    <Layout>
      <Flex
        justify="space-between"
        className="text-center w-full fixed z-[1000] border-b border-borderColor bg-primaryBackground py-3 md:py-4 px-4 md:px-[3.5%]"
      >
        <Flex className="text-center" gap={iconsGap}>
          <PrimaryLogoWithLabel isHeaderLogo={true} clickable={true} />
          <span className={iconsSpanClassName}>
            {headerIconsLeft?.map((item, index) => {
              const isSelected = pathname === item?.pathname;
              return (
                <IconWithLabel
                  key={index}
                  Icon={item?.icon}
                  label={item?.label}
                  onClick={item?.onClick}
                  containerClassName={`cursor-pointer hover:text-black ${isSelected && "text-primary"}`}
                  iconClassName="my-auto font-bold"
                  labelClassName={`hidden miniTab:block text-[11px]  ${isSelected ? "text-secondary" : "text-textGray"}`}
                />
              );
            })}
          </span>
        </Flex>

        <span className="flex gap-9 xxs:gap-11 pro:gap-12 miniTab:gap-14 md:hidden">
          {allIcons?.map((item, index) => {
            const isSelected = pathname === item?.pathname;
            const hideIsHomeIcon =
              item?.pathname === routes.home.url && "!hidden";
            return (
              <IconWithLabel
                key={index}
                Icon={item?.icon}
                label={item?.label}
                onClick={item?.onClick}
                containerClassName={`cursor-pointer hover:text-black ${hideIsHomeIcon} ${isSelected && "text-primary"}`}
                iconClassName="my-auto font-bold"
                labelClassName={`hidden md:block text-[11px]  ${isSelected ? "text-secondary" : "text-textGray"}`}
              />
            );
          })}
        </span>

        <Flex className="text-center" gap={iconsGap}>
          <span className={iconsSpanClassName}>
            {headerIconsRight?.map((item, index) => {
              const isSelected = pathname === item?.pathname;
              return (
                <IconWithLabel
                  key={index}
                  Icon={item?.icon}
                  label={item?.label}
                  onClick={item?.onClick}
                  isActionRequired={item?.isActionRequired}
                  containerClassName={`cursor-pointer hover:text-black ${isSelected && "text-primary"}`}
                  iconClassName="my-auto font-bold"
                  labelClassName={`hidden md:block text-[11px]  ${isSelected ? "text-secondary" : "text-textGray"}`}
                />
              );
            })}
          </span>
          <Flex gap={10}>
            <Button
              type="secondary"
              onClick={() => {}}
              className="my-auto hidden lg:flex"
            >
              <span className="font-bold">Open A store</span>
              <BiStoreAlt className="text-primary" size={13} />
            </Button>
            <ProfileDropdown />
          </Flex>
        </Flex>
        <SearchPopup isOpen={isOpen} close={close} />
      </Flex>
    </Layout>
  );
};

export default NavbarComponent;
