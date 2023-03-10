import { Button, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductDetailById } from "../../api/product.api";
import CardComponent from "../../components/CardComponent/CardComponent";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";
import car from "../../img/Decord/car.svg";
import Star from "../../img/Decord/Star.svg";
import mew from "../../img/mew.png";
import { addToCard } from "../../redux/card/card.slice";

function ProductDetailPage() {
  const { Search } = Input;
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const handleAddProductToCard = () => {
    const newProduct = {
      productId: product.id,
      quantity: 1,
      totalPrice: product?.price,
    };
    dispatch(addToCard(newProduct));
  };
  const handleGetProductById = async (id) => {
    const product = await getProductDetailById(id);
    setProduct(product);
  };

  useEffect(() => {
    handleGetProductById(productId);
  }, []);

  return (
    <Row style={{ padding: "0px 100px" }}>
      <Col span={12}>
        <div
          style={{
            border: "1px solid #808080",
            borderRadius: "10px",
            width: "400px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "300px" }} src={mew} alt="example" />
        </div>
      </Col>
      <Col span={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <b style={{ fontSize: "40px" }}>{product?.name}</b>
          <img
            style={{
              width: "200px",
            }}
            src={Star}
            alt="evaluate"
          />
        </div>

        <p style={{ fontSize: "18px" }}>
          {product?.describe}
          {/* V???i th??nh ph???n g???m nhi???u ch???t dinh d?????ng t???t cho s???c kh???e c???a m??o nh??
          Omega 3 v?? 6, xu???t ph??t t??? c??c nguy??n li???u t??? nhi??n nh?? tr??i c??y v??
          rau c??? qu???, g???o l???t, y???n m???ch, d???u c?? h???i v?? c??c lo???i Vitamin kh??c. */}
        </p>

        <ul>
          <li>Gi??p c?? b???p s??n ch???c, c?? th??? kh???e m???nh, c??n n???ng ???n ?????nh</li>
          <li>
            Omega 3 v?? 6 gi??p duy tr?? l??n da kh???e m???nh v?? ng??n ng???a t??nh tr???ng
            r???ng l??ng
          </li>
          <li>H??? tr??? x????ng kh???p ph??t tri???n, t??ng c?????ng h??? mi???n d???ch</li>
        </ul>

        <p>
          Price:{" "}
          <b
            style={{
              fontSize: "40px",
            }}
          >
            {product?.price} ??
          </b>
        </p>

        <Row>
          <img src={car} alt="delivery" />
          <p style={{ fontSize: "16px" }}>
            Giao h??ng mi???n ph?? - giao h??ng ?????c t??nh t??? 3-5 ng??y
          </p>
        </Row>

        <Col>
          <Button
            type="primary"
            style={{ background: "#F1635F" }}
            shape="round"
            onClick={() => handleAddProductToCard()}
          >
            Add to card
          </Button>
        </Col>
      </Col>

      <Row
        style={{
          backgroundColor: "#101C2D",
          padding: "40px 60px",
          width: "100%",
        }}
      >
        <div style={{ color: "white" }}>
          <b style={{ fontSize: "30px" }}>Ho???t ch???t</b>
          <br />
          <b>Nguy??n li???u ch??nh c???a {product?.name} cho m??o bao g???m: </b>
          <p>{product?.base_material}</p>

          <b>
            S??? d???ng {product?.name}, m??o nh?? b???n nh???n ???????c h??m l?????ng dinh d?????ng
            nh?? sau:{" "}
          </b>
          <p>
            Protein (t???i thi???u): 42%
            <br />
            Ch???t b??o (t???i thi???u): 20%
            <br />
            Ch???t x?? (t???i ??a): 3.5%
            <br />
            ????? ???m (t???i ??a): 10%
            <br />
            Tro (t???i ??a): 7.5%
            <br />
            Canxi (t???i thi???u): 1.1%
            <br />
            Ph???t pho (t???i thi???u): 0.9%
          </p>
        </div>
      </Row>

      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b style={{ fontSize: "30px" }}>You may also like</b>
        <Row gutter={30}>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
        </Row>
      </div>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "100px",
        }}
      >
        <img src={SubscribeOurPetsArticles} alt="SubscribeOurPetsArticles" />
        <p style={{ fontSize: "20px", width: "1000px" }}>
          Ch??ng t??i tin r???ng kh??? n??ng t?? v???n, giao ti???p v?? cung c???p d???ch v??? t???t
          nh???t cho kh??ch h??ng c???a ch??ng t??i s??? d???n ?????n k???t qu??? t??i ch??nh m???nh m???
          v?? t??ng tr?????ng d??i h???n.
        </p>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={() => {}}
        />
      </Row>
    </Row>
  );
}

export default ProductDetailPage;
