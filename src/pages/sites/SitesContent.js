import React, { useState, useEffect } from "react";
import { Accordion, Button, InputGroup, Table } from "react-bootstrap";
import AddSite from "./Components/AddSite/AddSite";
import AllSites from "./Components/AllSites/AllSites";
import { downloadExcel } from "react-export-table-to-excel";
import { useRef } from "react";
import SitesServices from "../../services/sitesServices";
import { validateYupSchema } from "formik";

const SitesContent = () => {
  const [allSiteState, setAllSiteState] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [errorState, seterrorState] = useState(false);
  const searchRef = useRef("");
  const sitesServices = new SitesServices();
  useEffect(() => {
    sitesServices
      .getAllData()
      .then((value) => setAllSiteState(value.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteSiteHandler = (id) => {
    const newData = allSiteState.filter((ele, ind) => id !== ele);
    setAllSiteState(newData);
  };

  const addSiteHandler = (ele) => {
    const newData = [...allSiteState, ele];
    setAllSiteState(newData);
  };

  const header = ["site_name", "user", "url", "id"];
  const body = allSiteState;
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "motkaml sites",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: body,
      },
    });
  }
  const searchOnChangeHandler = (value) => {
    const newData = allSiteState.filter((ele, ind) =>
      ele.blog_name.includes(value.currentTarget.value)
    );
    setFilterState(newData);
    if (newData.length === 0) {
      seterrorState(true);
    } else {
      seterrorState(false);
    }
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          كل المواقع{" "}
          <span className="p-2">
            {" "}
            <i className="fa-solid fa-sitemap"></i>{" "}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Button
              onClick={(e) => {
                 sitesServices.getSiteDetails(7).then(value=>console.log(value.data));
              }}
            >
              {" "}
              Test{" "}
            </Button>
            <Button className={"m-2"} size="sm" onClick={handleDownloadExcel}>
              تصدير البيانات{" "}
            </Button>
            <div style={{ width: 350, display: "inline-flex" }}>
              <input
                placeholder="بحث باسم الموقع ..."
                className={"form-control form-control-lg"}
                onChange={searchOnChangeHandler}
              />
              <p style={{ color: "red" }}>
                {errorState ? "لا يوجد نتائج" : ""}
              </p>
            </div>
          </div>
          <AllSites
            allSiteState={filterState.length === 0 ? allSiteState : filterState}
            deleteSiteHandler={deleteSiteHandler}
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="show" eventKey="1">
        <Accordion.Header>
          إضافة موقع{" "}
          <span className="p-2">
            {" "}
            <i className="fa-solid fa-sitemap"></i>{" "}
          </span>
        </Accordion.Header>

        <Accordion.Body>
          <AddSite addSiteHandler={addSiteHandler} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SitesContent;
