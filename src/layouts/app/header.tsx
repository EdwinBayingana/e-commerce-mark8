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
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const { open, isOpen, close } = useDisclose();

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
                  containerClassName="cursor-pointer hover:text-black"
                  iconClassName="my-auto font-bold"
                  labelClassName="text-[11px] text-textGray"
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
                  containerClassName="cursor-pointer hover:text-black"
                  iconClassName="my-auto font-bold"
                  labelClassName="text-[11px] text-textGray"
                />
              ))}
            </span>
            <Flex gap={10}>
              <Button type="secondary" onClick={() => {}} className="my-auto">
                <span className="font-bold">Open A store</span>
                <BiStoreAlt className="text-primary" size={13} />
              </Button>

              <PopoverModal
                trigger="click"
                showArrow={false}
                content={
                  <Flex className="min-h-[45vh] min-w-[90vw] md:min-w-[50vw] lg:min-w-[35vw] xl:min-w-[20vw] max-w-[30vw] xl:max-w-[20vw] rounded-[7px]">
                    <ProfileMenuContent />
                  </Flex>
                }
                close={close}
                open={isOpen}
                placement="top"
                overlayInnerStyle={{
                  backgroundColor: "transparent",
                  padding: 0,
                  border: "1px solid #cccccc25",
                  marginRight: "5%",
                }}
              >
                <Flex
                  className="border-[1.5px] border-borderColor rounded-lg cursor-pointer"
                  onClick={open}
                >
                  <HiOutlineUser
                    className="text-textGray border-r-[1.5px] border-borderColor h-full w-full px-2.5"
                    size={28}
                  />

                  <GoChevronDown
                    className="text-black my-auto w-full"
                    size={20}
                  />
                </Flex>
              </PopoverModal>
            </Flex>
          </Flex>
        </Flex>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
