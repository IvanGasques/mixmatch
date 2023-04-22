import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    subject: Yup.string().required('Campo obrigatório'),
    message: Yup.string().required('Campo obrigatório')
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="contact-container">
      <div className="contact-location">
        <h2>Nossa Localização</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.9929620724732!2d32.58598211612915!3d-25.96804119416876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7a12f8f9f31c27%3A0x22c28b8e7c314d47!2sMaputo!5e0!3m2!1sen!2smz!4v1650417672359!5m2!1sen!2smz"
          title="Mapa da nossa localização"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '5px', marginBottom: '20px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p></p>
        <p></p>
        <p>Maputo</p>
      </div>
      <div className="contact-form">
        <h2>Entre em contato</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="span" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="span" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <Field type="text" id="subject" name="subject" />
                <ErrorMessage name="subject" component="span" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <Field as="textarea" id="message" name="message" />
                <ErrorMessage name="message" component="span"  className="error-message" />
          </div>
          <button className='button' type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  </div>
</div>
);
};

export default Contact;
