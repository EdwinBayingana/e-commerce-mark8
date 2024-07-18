import useSelection from "@utils/hooks/useSelection";
import { AuthBackgroundImage } from "@utils/images";
import { Col, Flex, Image, Row } from "antd";
import React, { FC } from "react";

interface Props {
  productImages: any;
  productName: any;
}

const ImageCarouselComponent: FC<Props> = ({ productImages, productName }) => {
  const { selectedItem, handleSelectItem } = useSelection(productImages[0]);

  return (
    <Flex
      vertical
      justify="normal"
      className="border rounded-xl h-[60vh] 2xl:min-h-[500px] 2xl:max-h-[500px]"
    >
      <Image
        src={selectedItem || AuthBackgroundImage}
        alt={`${productName || "Product Image"}`}
        className="h-[50vh] 2xl:h-[420px] w-[45vw] 2xl:w-[700px] object-cover cursor-pointer rounded-t-xl"
        preview={false}
      />
      <Row
        gutter={[
          { xs: 2, sm: 4, md: 6, lg: 8 },
          { xs: 2, sm: 4, md: 6, lg: 8 },
        ]}
        className="w-full p-4"
      >
        {productImages?.length &&
          productImages?.map((image: string, index: number) => (
            <Col key={index}>
              <Image
                src={image || AuthBackgroundImage}
                alt={`${productName || "Product Image"}`}
                className={`w-12 h-12 ease-in-out duration-300 object-cover cursor-pointer rounded-md ${selectedItem === image && "border-2 border-primary"}`}
                preview={false}
                onClick={() => handleSelectItem(image)}
              />
            </Col>
          ))}
      </Row>
    </Flex>
  );
};

export default ImageCarouselComponent;
