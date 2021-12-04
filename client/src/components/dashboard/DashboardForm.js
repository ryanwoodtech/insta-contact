// Render Prop
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./DashboardForm.module.css";

const DashboardForm = (props) => (
  <div className={styles.dashboard_form}>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.dashboard_form_container}>
          <h2>New Organization</h2>
          <Field type="input" name="organization_name" placeholder="Organization Name" />
          <ErrorMessage name="organization_name" component="div" />
          <Field type="input" name="organization_website" placeholder="Organization Website" />
          <Field type="tel" name="phone" placeholder="Organization Phone Number"/>
          <h2>Social Media</h2>
          <Field type="input" name="organization_url_facebook" placeholder="Organization Facebook" />
          <Field type="input" name="organization_url_youtube" placeholder="Organization YouTube"/>
          <Field type="input" name="organization_url_twitter" placeholder="Organization Twitter" />
          <h2>Logo</h2>
          <Field type="file" name="organization_url_twitter" placeholder="Organization Logo"/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button onClick={props.onClick} type='button'>close</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default DashboardForm;
