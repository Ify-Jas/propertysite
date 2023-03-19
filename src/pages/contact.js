import Header from "../components/header";
import { useState } from 'react'; 
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';




function Contact(){

    const [success, setSuccess] = useState(false);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        access_key: '69a99131-06c1-49cd-a6da-29cdb9a89140'
    });
    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    }
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleClick = (event) => {
        event.preventDefault();
        if(!contactData.name.length || !contactData.email.length){
            setSuccess(false);

            // render() {
            //     return (
            //         <>
            //             <Button variant="primary" onClick={handleShow}>
            //                 Launch demo modal
            //             </Button>
    
            //             <Modal show={true} fade={false} onHide={handleClose}>
            //                 <Modal.Header closeButton>
            //                     <Modal.Title>Modal heading</Modal.Title>
            //                 </Modal.Header>
            //                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            //                 <Modal.Footer>
            //                     <Button variant="secondary" onClick={handleClose}>
            //                         Close
            //                     </Button>
            //                     <Button variant="primary" onClick={handleClose}>
            //                         Save Changes
            //                     </Button>
            //                 </Modal.Footer>
            //             </Modal>
            //         </>
            //     )

            // }
          alert('Please enter your name or email 😊😉');

            
         
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
            setSuccess(true);
            setContactData({
                ...contactData,
                name: "",
                email: "",
                subject: '',
                message: "",
              });
              setTimeout(()=>{
                setSuccess(false)
              }, 5000);
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

                    {success && <p style={{
                        fontSize: '20px',
                        color: 'white'

                    }}>Message sent successfully</p>}
                </form>
            </div>
          
        </div>
    )
}
export default Contact;