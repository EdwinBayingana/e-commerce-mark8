import Typography from "@components/shared/typography";
import { Flex, Layout } from "antd";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaYoutube } from "react-icons/lia";
import { FiLinkedin } from "react-icons/fi";
import { PrimaryLogoWithLabel } from "@components/logo";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  const footerSocials = [FaXTwitter, FaInstagram, LiaYoutube, FiLinkedin];
  return (
    <Footer className="text-center bg-primaryBackgroundLight">
      <Flex
        justify="space-between"
        className="flex-col miniTab:flex-row gap-5 miniTab:gap-0"
      >
        <span className="hidden miniTab:block">
          <PrimaryLogoWithLabel />
        </span>

        <Flex gap={9} align="center" className="self-center miniTab:self-auto">
          <Typography variant="body" className="font-semibold">
            ©{new Date().getFullYear()} Mark8
          </Typography>
          <Typography variant="caption">By Awesomity Ltd</Typography>
        </Flex>

        <Flex justify="space-between" gap={10} align="center">
          {footerSocials?.map((Icon, index) => (
            <Icon key={index} size={17} className="text-secondary" />
          ))}
        </Flex>
      </Flex>
    </Footer>
  );
};

export default FooterComponent;
