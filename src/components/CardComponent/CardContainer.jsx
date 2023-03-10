import { Row, Col } from "antd";
import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/product.api";
import { useNavigate } from "react-router";
export const CardContainer = () => {
  const navigate = useNavigate();
  const [listItem, setListItem] = useState();
  const handleGetProductsDataFunc = async () => {
    const data = await getAllProduct();
    setListItem(data);
  };
  useEffect(() => {
    handleGetProductsDataFunc();
  }, []);

  return (
    <Row gutter={[8, 16]}>
      {listItem
        ? listItem.map((item) => (
            <Col span={8} onClick = {() => {navigate(`/productdetail/${item.id}`, {replace: true})}}>
              <CardComponent item={item} />
            </Col>
          ))
        : null}
    </Row>
  );
};
