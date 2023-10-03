import React, {useState , useRef } from "react";
import { Table } from "react-bootstrap";
import Styles from "./allSite.module.css";
import UpdateSite from "../UpdateSite/UpdateSite";
import DeleteSite from "../DeleteSite/DeleteSite";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DownloadTableExcel } from 'react-export-table-to-excel';

const deleteSwal = withReactContent(Swal);

const AllSites = ({deleteSiteHandler , allSiteState }) => {

  const [updateShow, setUpdateShow] = useState(false);
  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);

  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const deleteConfirm = (id) => {
    handleDeleteClose();
    deleteSiteHandler(id);
    deleteSwal.fire("Delete");
  };
  const updateConfirm = () => {
    console.log("Deleted");
    handleDeleteClose();
    deleteSwal.fire("Delete");
  };

  return (
    
    <div>
    <DownloadTableExcel 
    filename="Site data " 
    currentTableRef={useRef.current}
    sheet="sites"z
      
    />
    
    <Table striped bordered hover className={Styles.tableBordered} >
      <thead>
        <tr>
          <th>#</th>
          <th>العميل</th>
          <th>اسم الموقع </th>
          <th>الرابط</th>
          <th> تحديث </th>
          <th> حذف </th>
        </tr>
      </thead>
      <tbody>
      {
        allSiteState !== 0 ? allSiteState.map((ele ,index) => {
        return (
          
            <tr key={index}>
              <td>{ele.blog_id}</td>
              <td>{ele.user_name}</td>
              <td>{ele.blog_name}</td>
              <td>{ele.domain}</td>
              <td className={Styles.updateTD}>
                {
                  <UpdateSite
                    state={updateShow}
                    handleShow={handleUpdateShow}
                    handleClose={handleUpdateClose}
                    updateConfirm={updateConfirm}
                  />
                }{" "}
              </td>
              <td className={Styles.updateTD}>
                {
                  <DeleteSite
                    state={deleteShow}
                    handleShow={handleDeleteShow}
                    handleClose={handleDeleteClose}
                    deleteConfirm={()=>deleteConfirm(ele.blog_id)}
                  />
                }
              </td>
            </tr>
         
        );
      }) : 'No Data '}
      </tbody>
    </Table>
    </div>
  );
};

export default AllSites;
