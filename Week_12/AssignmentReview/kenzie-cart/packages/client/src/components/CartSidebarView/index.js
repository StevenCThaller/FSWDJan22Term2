import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useUI } from "hooks";
import { useProvideCart, useRouter } from "hooks";
import { CartList, CartSummary, CheckoutBox } from "components";
import "./CartSidebarView.scss";

const CartSidebarView = () => {
  const { closeSidebar, displaySidebar } = useUI();
  const { state, editCouponCode, applyCoupon } = useProvideCart();
  const { push } = useRouter();

  const handleClose = () => closeSidebar();
  const handleCheckout = () => {
    closeSidebar();
    push("/checkout");
  };

  return (
    <div className="cart">
      <header className="cart-header">
        {displaySidebar && (
          <Button
            onClick={handleClose}
            aria-label="Close panel"
            className="hover:text-gray-500 transition ease-in-out duration-150"
          >
            <FontAwesomeIcon size="xs" icon={faTimes} />
          </Button>
        )}
      </header>

      {state.cart.length > 0 ? (
        <div className="cart-body">
          <CartList cartItems={state.cart} />
        </div>
      ) : (
        <div className="empty-cart">
          <FontAwesomeIcon size="xs" icon={faShoppingBag} />
          <p>Your shopping cart is empty</p>
        </div>
      )}

      {state.cart.length > 0 && (
        <div className="cart-checkout">
          <Form className="cart-summary" onSubmit={applyCoupon}>
            <Container>
              <Form.Label xs={12}>Coupon</Form.Label>
              <Row>
                <Col xs={6}>
                  <Form.Control
                    type="text"
                    placeholder="Coupon Code"
                    name="code"
                    value={state.couponCode}
                    disabled={state.couponDiscount !== 0}
                    onChange={editCouponCode}
                  />
                </Col>
                <Col xs={{ offset: 2, span: 4 }}>
                  {state.couponDiscount === 0 ? (
                    <Button type="submit" variant="info">
                      Apply
                    </Button>
                  ) : (
                    `${state.couponDiscount * 100}% off`
                  )}
                </Col>
              </Row>
            </Container>
          </Form>
          <CartSummary
            cartTotal={state.cartTotal - state.cartTotal * state.couponDiscount}
          />
          <CheckoutBox
            handleShopping={handleClose}
            handleCheckout={handleCheckout}
          />
        </div>
      )}
    </div>
  );
};

export default CartSidebarView;
