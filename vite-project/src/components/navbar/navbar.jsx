import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const { Header } = Layout;

export function MyNavbar() {
  const [open, setOpen] = useState(false);

  // ✅ New Menu Items Format for Ant Design v5
  const menuItems = [
    { key: "1", label: <Link  className="a" to="/home">HOME</Link> },
    { key: "2", label: <Link className="a" to="/giftCards">GIFT CARDS</Link> },
    { key: "3", label: <Link  className="a" to="/mobile">MOBILE & TABLET</Link> },
    { key: "4", label: <Link  className="a"  to="/fashion">FASHION</Link> },
    { key: "5", label: <Link  className="a" to="/electronics">ELECTRONICS</Link> },
  ];

  return (
    <>
      <Layout>
        <Layout.Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 50px" }}>
          
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img 
              src="/images/logo/Shopon_Logo_F-03__1__3n3z-fn.png" 
              alt="Logo" 
              style={{ height: "53px", width: "165px", objectFit: "contain", marginRight: "20px" }} 
            />
          </div>

          {/* Desktop Menu */}
          <Menu theme="dark" mode="horizontal" className="desktop-menu" items={menuItems} />

          {/* Mobile Menu Button */}
          <Button type="primary" className="mobile-menu-button" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </Button>

          {/* Desktop Icons */}
          <div className="desktop-icons d-flex align-items-center gap-3">
           <Link  className="a" to="/cart"><FaShoppingCart className="social-icon"/></Link> 
            <Link className="a" to="/customerDetails"><FaUser className="social-icon"/></Link>
          </div>
        </Layout.Header>
      </Layout>

      {/* Sidebar Drawer for Mobile */}
      <Drawer 
        title={<img src="/images/logo/Shopon_Logo_F-03__1__3n3z-fn.png" alt="Logo" style={{ height: "40px", width: "120px", objectFit: "contain" }} />}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={250}
      >
        <Menu mode="vertical" items={menuItems} />

        {/* Mobile Icons */}
        <div className="mobile-icons">
        <Link  className="a" to="/cart"><FaShoppingCart className="social-icon"/></Link> 
        <Link className="a" to="/customerDetails"><FaUser className="social-icon"/></Link>
        </div>
      </Drawer>
    </>
  );
}
