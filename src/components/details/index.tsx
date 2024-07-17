import { LeftOutlined } from "@ant-design/icons";
import PageHeader from "@components/shared/PageHeader";
import Typography from "@components/shared/typography";
import { Breadcrumb, Flex } from "antd";
import React, { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

interface Props {
  productId: number | null;
}

const ProductDetailsContent: FC<Props> = ({ productId }) => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="mt-[10%] md:mt-[6.5%] w-full" />
      <Flex gap={20} className="mb-[2%]">
        <FaArrowLeftLong
          className="text-primary my-auto cursor-pointer"
          size={16}
        />
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Products",
            },
            {
              title: "Vectors",
            },
            {
              title: <span className="text-textGray">Product 1</span>,
            },
          ]}
          className="custom-breadcrumb"
        />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsContent;
