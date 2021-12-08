// Render Prop
import styles from "./DashboardForm.module.css";
import React, { useState } from "react";

function DashboardForm(props) {
  const [values, setValues] = useState();

  const handleFileSelected = (e) => {
    console.log(e.target.files[0]);
  };

  // const handleInputChange = ({ target: { name, value } }) => {
  //   setValues((prevState) => ({ ...prevState, [name]: value }));
  // };

  const handleInputChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.targer.value,
    }));
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(values);
    const url = ''

    const response = await fetch(url, )
  };

  return (
    <div>
      <form className={styles.dashboard_form_container}>
        <h2>New Organization</h2>
        <div>
          <label>Organization Name</label>
          <input
            name="organization_name"
            placeholder="Organization Name"
            value={values.organization_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Organization Phone</label>
          <input
            name="organization_phone"
            placeholder="Organization Phone"
            value={values.organization_phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Organization Website</label>
          <input
            name="organization_website"
            placeholder="Organization Website"
            value={values.organization_website}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Facebook</label>
          <input
            name="organization_url_facebook"
            placeholder="Facebook"
            value={values.organization_url_facebook}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>YouTube</label>
          <input
            name="organization_url_youtube"
            placeholder="YouTube"
            value={values.organization_url_youtube}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Twitter</label>
          <input
            name="organization_url_twitter"
            placeholder="Twitter"
            value={values.organization_url_twitter}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Organization Logo</label>
          <input
            type="file"
            name="organization_logo"
            onChange={handleFileSelected}
          />
        </div>
        <button onClick={postData} type="submit">
          Submit
        </button>
        <button onClick={props.onClick} type="button">
          Close
        </button>
      </form>
    </div>
  );

  // onSubmit={(values, { setSubmitting }) => {
  //   // Eventually, submit form values to database
  //   // We want to create an object from the form values and add it to DashboardContent's state
  //   // We need a function passed from DashboardContent that lets it know to add values to it's state
  //   // Once we get this working, the state should be updated from the database instead of manually creating it
  //   // This is so the state of the application doesn't differ from the database

  //   let newOrganization = {
  //     organization_name: values.organization_name,
  //     organization_phone: values.organization_phone,
  //     organization_url_website: values.organization_url_website,
  //     organization_url_facebook: values.organization_url_facebook,
  //     organization_url_youtube: values.organization_url_youtube,
  //     organization_url_twitter: values.organization_url_twitter,
  //     organization_logo: values.organization_logo,
  //   };

  //   // let newOrganizationTemp = {
  //   //   cardImg: values.organization_logo,
  //   //   cardTitle: values.organization_name,
  //   // };

  //   props.addOrganization(newOrganization);

  //         <Form className={styles.dashboard_form_container}>
  //           <h2>New Organization</h2>
  //           <Field
  //             type="input"
  //             name="organization_name"
  //             placeholder="Organization Name"
  //           />
  //           <ErrorMessage name="organization_name" component="div" />
  //           <Field
  //             type="tel"
  //             name="organization_phone"
  //             placeholder="Organization Phone Number"
  //           />
  //           <Field
  //             type="input"
  //             name="organization_url_website"
  //             placeholder="Organization Website"
  //           />
  //           <h2>Social Media</h2>
  //           <Field
  //             type="input"
  //             name="organization_url_facebook"
  //             placeholder="Organization Facebook"
  //           />
  //           <Field
  //             type="input"
  //             name="organization_url_youtube"
  //             placeholder="Organization YouTube"
  //           />
  //           <Field
  //             type="input"
  //             name="organization_url_twitter"
  //             placeholder="Organization Twitter"
  //           />
  //           <h2>Logo</h2>
  //           <Field
  //             type="file"
  //             name="organization_logo"
  //             onChange={fileSelected}
  //             placeholder="Organization Logo"
  //           />
  //           <button type="submit" disabled={isSubmitting}>
  //             Submit
  //           </button>
  //           <button onClick={props.onClick} type="button">
  //             close
  //           </button>
  //         </Form>
  // return (
  //   <div className={styles.dashboard_form}>
  //     <Formik
  //       initialValues={{
  //         organization_name: "",
  //         organization_phone: "",
  //         organization_url_website: "",
  //         organization_url_facebook: "",
  //         organization_url_youtube: "",
  //         organization_url_twitter: "",
  //         organization_logo: "",
  //       }}
  //       validate={(values) => {
  //         const errors = {};
  //         return errors;
  //       }}
}

export default DashboardForm;
