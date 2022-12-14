import { useState } from 'react';
import { ProductSummary, ProductDetail } from "../components";
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductList = ({ productList }) => {
  const [filteredDepartment, setFilteredDepartment] = useState("")
  return (
    <Routes>
      <Route path="" element={
        <Container className="productList">
          <h2>Our Products</h2>
          <Row>
            <Col xs={4} as="span">Filter By Department: </Col>
            <Row as={Col} xs={8}>
              <Col as={Button} xs={{ span: 2, offset: 1 }} variant="primary" onClick={() => setFilteredDepartment("")}>All</Col>
              <Col as={Button} xs={{ span: 2, offset: 1 }} variant="info" onClick={() => setFilteredDepartment("tool")}>Tools</Col>
              <Col as={Button} xs={{ span: 2, offset: 1 }} variant="info" onClick={() => setFilteredDepartment("garden")}>Garden</Col>
              <Col as={Button} xs={{ span: 2, offset: 1 }} variant="info" onClick={() => setFilteredDepartment("hardware")}>Hardware</Col>
            </Row>
          </Row>
          <ul>
            {productList
              .filter((product) => product.department.toLowerCase().includes(filteredDepartment.toLowerCase()))
              .map((product) => (
                <ProductSummary key={product.id} product={product} />
              ))}
          </ul>
        </Container>} />
      <Route path="detail/:productId" element={<ProductDetail productList={productList} />} />
    </Routes>
  );
};

export default ProductList;
