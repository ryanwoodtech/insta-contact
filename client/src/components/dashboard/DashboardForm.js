// Render Prop
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./DashboardForm.module.css";

const DashboardForm = (props) => (
  <div className={styles.dashboard_form}>
    <Formik
      initialValues={{
        organization_name: "",
        organization_phone: "",
        organization_url_website: "",
        organization_url_facebook: "",
        organization_url_youtube: "",
        organization_url_twitter: "",
        organization_logo: "",
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Eventually, submit form values to database
        // We want to create an object from the form values and add it to DashboardContent's state
        // We need a function passed from DashboardContent that lets it know to add values to it's state
        // Once we get this working, the state should be updated from the database instead of manually creating it
        // This is so the state of the application doesn't differ from the database

        let newOrganization = {
          organization_name: values.organization_name,
          organization_phone: values.organization_phone,
          organization_url_website: values.organization_url_website,
          organization_url_facebook: values.organization_url_facebook,
          organization_url_youtube: values.organization_url_youtube,
          organization_url_twitter: values.organization_url_twitter,
          organization_logo: values.organization_logo,
        };
        let newOrganizationTemp = {
          cardImg: values.organization_logo,
          cardTitle: values.organization_name,
        };

        props.addOrganization(newOrganizationTemp);

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.dashboard_form_container}>
          <h2>New Organization</h2>
          <Field
            type="input"
            name="organization_name"
            placeholder="Organization Name"
          />
          <ErrorMessage name="organization_name" component="div" />
          <Field
            type="tel"
            name="organization_phone"
            placeholder="Organization Phone Number"
          />
          <Field
            type="input"
            name="organization_url_website"
            placeholder="Organization Website"
          />
          <h2>Social Media</h2>
          <Field
            type="input"
            name="organization_url_facebook"
            placeholder="Organization Facebook"
          />
          <Field
            type="input"
            name="organization_url_youtube"
            placeholder="Organization YouTube"
          />
          <Field
            type="input"
            name="organization_url_twitter"
            placeholder="Organization Twitter"
          />
          <h2>Logo</h2>
          <Field
            type="file"
            name="organization_logo"
            placeholder="Organization Logo"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button onClick={props.onClick} type="button">
            close
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default DashboardForm;
