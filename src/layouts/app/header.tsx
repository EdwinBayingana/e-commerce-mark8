import { PrimaryLogoWithLabel } from "@components/logo";
import Button from "@components/shared/button";
import { Flex, Layout, Typography as AntdTypography } from "antd";
import { TbSmartHome } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";

interface IconWithLabelProps {
  label: string;
  Icon?: any;
  iconColor?: string;
  isActionRequired?: boolean;
}

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const headerIconsLeft = [
    { label: "Home", icon: TbSmartHome, onClick: () => {} },
    { label: "Stores", icon: BiStoreAlt, onClick: () => {} },
  ];

  const headerIconsRight = [
    { label: "", icon: FiSearch, onClick: () => {} },
    {
      label: "My Cart",
      icon: HiOutlineShoppingCart,
      onClick: () => {},
      isActionRequired: true,
    },
    { label: "Saved", icon: FaRegHeart, onClick: () => {} },
  ];

  const IconWithLabel: React.FC<IconWithLabelProps> = ({
    Icon,
    label,
    isActionRequired,
    iconColor = "#79878F",
  }) => {
    return (
      <Flex
        gap={8}
        justify="space-between"
        style={{ color: iconColor }}
        className="cursor-pointer hover:text-black"
      >
        <Icon size={13} className="my-auto font-bold" />

        {label && (
          <AntdTypography className="text-[10px] text-textGray">
            {label}
          </AntdTypography>
        )}

        {isActionRequired && (
          <span className="border rounded-full w-1 h-1 border-danger bg-danger my-auto" />
        )}
      </Flex>
    );
  };

  const iconsGap = 35;
  const iconsSpanClassName = "flex my-auto gap-8";

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
        className="border-b border-borderColor bg-primaryBackground"
      >
        <Flex justify="space-between" className="text-center w-full">
          <Flex className="text-center" gap={iconsGap}>
            <PrimaryLogoWithLabel isHeaderLogo={true} />
            <span className={iconsSpanClassName}>
              {headerIconsLeft?.map((item, index) => (
                <IconWithLabel
                  key={index}
                  Icon={item?.icon}
                  label={item?.label}
                />
              ))}
            </span>
          </Flex>

          <Flex className="text-center" gap={iconsGap}>
            <span className={iconsSpanClassName}>
              {headerIconsRight?.map((item, index) => (
                <IconWithLabel
                  key={index}
                  Icon={item?.icon}
                  label={item?.label}
                  isActionRequired={item?.isActionRequired}
                />
              ))}
            </span>
            <Flex gap={10}>
              <Button type="secondary" onClick={() => {}} className="my-auto">
                <span className="font-bold">Open A store</span>
                <BiStoreAlt className="text-primary" size={13} />
              </Button>

              <Flex
                className="border-[1.5px] border-borderColor rounded-lg cursor-pointer"
                onClick={() => {}}
              >
                <HiOutlineUser
                  className="text-textGray  border-r-[1.5px] border-borderColor h-full w-full px-2.5"
                  size={28}
                />

                <GoChevronDown
                  className="text-black my-auto w-full"
                  size={20}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
