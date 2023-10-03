import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Container } from "react-bootstrap";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Styles from './AddSite.module.css'

const MySwal = withReactContent(Swal)

function AddSite({addSiteHandler}) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Client: yup.string().required("يجب اختيار العميل"),
    SiteName: yup.string().required("ادخل اسم الموقع"),
    SiteSlug: yup.string().required("ادخل رابط الموقع"),
  });

  return (
    <Container  className={["p-2"]}>
      <Formik
        validationSchema={schema}
        onSubmit={ (e)=>{
          addSiteHandler(e.SiteSlug);
          MySwal.fire(e.SiteSlug , 'Success' , 'success');
        }}
        initialValues={{
          Client: "",
          SiteName: "",
          SiteSlug:""
        }}
        
      >
        {({ handleSubmit, handleChange, values, touched , errors }) => (
          
          <Form noValidate  onSubmit={handleSubmit} className="p-4" >
            <Col className="p-2">
              <Form.Select
                placeholder="العميل"
                aria-describedby="inputGroupPrepend"
                name="Client"
                value={values.Client}
                onChange={handleChange}
                isInvalid={touched.Client && !!errors.Client}
              >
                <option>أختر العميل </option>
                <option value="1">Client One</option>
                <option value="2">Client Two</option>
                <option value="3">Client Three</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.Client}
              </Form.Control.Feedback>
            </Col>
            <Col className="p-2">
              <Form.Control
                type="text"
                placeholder="اسم الموقع"
                aria-describedby="inputGroupPrepend"
                name="SiteName"
                value={values.SiteName}
                onChange={handleChange}
                isInvalid={!!errors.SiteName}
              ></Form.Control>

              <Form.Control.Feedback type="invalid">
                {errors.SiteName}
              </Form.Control.Feedback>
            </Col>
            
            <Col className="p-2">
              <Form.Control
                type="text"
                placeholder="رابط الموقع"
                aria-describedby="inputGroupPrepend"
                name="SiteSlug"
                value={values.SiteSlug}
                onChange={handleChange}
                isInvalid={!!errors.SiteSlug}
              ></Form.Control>

              <Form.Control.Feedback type="invalid">
                {errors.SiteSlug}
              </Form.Control.Feedback>
            </Col>

            <Button className={Styles.button} type="submit"> أضف الموقع </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddSite;
