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
    <Footer className="text-center" style={{ backgroundColor: "#F4F5F6" }}>
      <Flex justify="space-between">
        <Flex gap={9}>
          <PrimaryLogoWithLabel isHeaderLogo={true} />
        </Flex>

        <Flex gap={9} align="center">
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
