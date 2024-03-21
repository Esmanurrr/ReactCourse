import React from 'react';
import {Formik, Field, Form} from 'formik'

function Contact() {
  return (
    <div>
        <h2>İletişim</h2>

        <Formik
          initialValues={{
            firstName:"",
            lastName:"",
            email:"",
          }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));
          }}
        >
          <Form>
            <label htmlFor='firstName'>First Name: </label>
            <Field id="firstName" name="firstName" placeholder="Jane" />

            <label htmlFor='lastName'>Last Name: </label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor='email'>Email: </label>
            <Field id="email" name="email" placeholder="jane@acme.com" />
            <button type='submit'>Submit</button>
          </Form>
        </Formik>
    </div>
  )
}

export default Contact