import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";

const SideBar = () => {
  return (
    <Col md="auto"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            متكامل 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact='true' to="/" >
              <CDBSidebarMenuItem icon="columns">عام</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to="/info" >
              <CDBSidebarMenuItem icon="table">المواقع</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to="/profile" >
              <CDBSidebarMenuItem icon="user">العملاء</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to="/analytics" >
              <CDBSidebarMenuItem icon="chart-line">
              تحليلات
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact='true'
              to="/hero404"
              target="_blank"
              
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </Col>
  );
};

export default SideBar;
