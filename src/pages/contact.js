import Header from "../components/header";

function Contact(){
    return(
        <div className="mainCard" >
            <main>
               <Header />
            </main>
            <div >
                <form className="contactCard">
                    <h1>Contact Form</h1>

                    <input type='text' placeholder="Enter your name" />
                    <input type='text' placeholder="Enter your email" />
                    <label>Choose a subject</label>
                    <select>
                        <option>Buying and selling enquiry</option>
                        <option>Rental including shortlet</option>
                        <option>Renovation</option>
                        <option>Report Damage</option>
                        <option>Join our renovation team</option>
                        <option>Property investment abroad</option>
                        <option>Other</option>

                    </select>
                    <textarea className="message" placeholder="Type your message here"></textarea>
                    <button className="contactBtn">Send</button>
                </form>
            </div>
          
        </div>
    )
}
export default Contact;