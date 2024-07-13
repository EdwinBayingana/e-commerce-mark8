import { RightCircleFilled } from "@ant-design/icons";
import { Button, Layout } from "antd";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
        className="flex items-center justify-between px-2 border-b border-borderColor"
      >
        <div className="flex items-center gap-5">
          <Button
            type="default"
            icon={<RightCircleFilled className="inline" size={15} />}
          />
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
