import './index.scss'
import React from "react";

const Contact = () => {

      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cad6c07e-b1c3-4c9d-98ee-3e4aee4fecd9");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("✅ Form Submitted");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


    return (
        <div class="form_overall">
            <div class="text">
                <h1>Have questions about an AP Class? Ask!</h1>
                <p>Feel free to ask questions about whatever you would like. This could be study tips, thoughts on how you should spend 
                your study time, or even questions about specific topics. I will do my best to respond to your requests in a 
                timely manner!
                </p>
            </div>

            <div class="form_and_submit">
            <form onSubmit={onSubmit} class="form_data">
                <script src="https://web3forms.com/client/script.js" async defer></script>
                <input type="hidden" name="access_key" value="cad6c07e-b1c3-4c9d-98ee-3e4aee4fecd9" class="input"></input>
                <input type="text" name="name" placeholder="Your Name" required class="input"></input>
                <input type="email" name="email" placeholder="Your Email" required class="input"></input>
                <label for="apclasses">Which AP Class?</label>
                <select id="apclasses" class="input" name="AP Class">
                    <option value="AP Calculus BC">AP Calculus BC</option>
                    <option value="AP Chemistry">AP Chemistry</option>
                    <option value="AP English Language and Composition">AP English Language and Composition</option>
                    <option value="AP Computer Science A">AP Computer Science A</option>
                    <option value="AP Physics 1">AP Physics 1</option>
                    <option value="AP World History">AP World History</option>
                    <option value="AP English Literature and Composition">AP English Literature and Composition</option>
                </select>
                <textarea name="message" placeholder="Your Message" required class="input message"></textarea>
                <div class="h-captcha" data-captcha="true"></div>
                <button type="submit">Submit</button>
                <div id="form-result"></div>
            </form> 
            <span class="result">{result}</span>
            </div>
            </div>
    )
}


export default Contact