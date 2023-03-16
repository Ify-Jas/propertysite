import Header from "../components/header";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Contact(){
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        access_key: 'd574540e-45f0-4a98-a6c0-16b1d6568819'
    });
    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    }
    const handleClick = (event) => {
        event.preventDefault();
        if(!contactData.name.length || !contactData.email.length){
            return
            <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Alert!!</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                <p>Please enter your name or email.</p>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        } else {
           const data = JSON.stringify(contactData);
           fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: data,
          })
          .then(res => res.json())
          .then((data)=> {
            console.log(data);
            setContactData({
                ...contactData,
                name: "",
                email: "",
                subject: '',
                message: "",
              });
          })

        }

    }
    return(
        <div className="mainCard" >
            <main>
               <Header />
            </main>
            <div >
                <form className="contactCard">
                    <h1>Contact Form</h1>

                    <input 
                    type='text' 
                    placeholder="Enter your name"
                    name='name'
                    value={contactData.name}
                    onChange={handleChange} />

                    <input 
                    type='text'
                    name='email'
                    value={contactData.email}
                    placeholder="Enter your email"
                    onChange={handleChange} />
                    <label>Choose a subject</label>

                    <select 
                    onChange={handleChange}
                    name='subject'
                    value={contactData.subject}>
                        <option>Buying and selling enquiry</option>
                        <option>Rental including shortlet</option>
                        <option>Renovation</option>
                        <option>Report Damage</option>
                        <option>Join our renovation team</option>
                        <option>Property investment abroad</option>
                        <option>Other</option>

                    </select>

                    <textarea 
                    className="message" 
                    placeholder="Type your message here"
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}>
                    </textarea>

                    <button 
                    className="contactBtn"
                    onClick={handleClick}>Send</button>
                </form>
            </div>
          
        </div>
    )
}
export default Contact;