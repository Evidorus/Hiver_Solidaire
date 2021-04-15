import React from "react"
import emailjs from "emailjs-com"

export default function Contact () {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_f2ok7l7', 'template_7gwb6st', e.target, 'user_SvE8HjG8uEiUex1GOe5OC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
}