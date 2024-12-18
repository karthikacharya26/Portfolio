import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:karthik.ach2608@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:karthik.ach2608@gmail.com">karthik.ach2608@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919822850245"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919822850245">(+91) 9822850245</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}