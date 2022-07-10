import React from "react";
import Header from "../components/Header";
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("myyoydkb");
  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contact.png" alt="" />
          </div>
          <div className="col-md-6">
            <div className='contact-form m-2 p-5 n-box2'>
              <h3 className='font-bold'>Contact</h3>
              <hr />
              <form onSubmit={handleSubmit}>
                <input type="text" className='form-control' placeholder='Name' />
                <input id="email" className='form-control' type="email" name="email" placeholder='Email'/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea className="form-control" id="message" name="message" placeholder='Message'/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="primary-button mt-3 linkc" type="submit" disabled={state.submitting}>Submit </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


