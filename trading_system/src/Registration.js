const Register = () => {
    return (  <div className="Register">

<form  name="myForm"  method="post" action="watchlist.html" onsubmit =" return  validateForm()" >
        <img src="regi.png"/>
        <div class="formdesign" id="name">
            <label>
            Name:</label> <input type="text" name="fname" required placeholder="Enter Your Name"/><b><span class="formerror"> </span></b>
        </div>

        <div class="formdesign" id="email"> <label>  Email:</label>
           <input type="email" name="femail" required placeholder="Ex. abc@def.com"/><b><span class="formerror"> </span></b>
        </div>

        <div class="formdesign" id="dob"> <label>  Date of Birth:</label>
            <input type="date" name="fdob" placeholder=" Ex. 12/03/2002" required /><b><span class="formerror"> </span></b>
         </div>

        <div class="formdesign" id="phone"> <label>Phone: </label>
            <input type="phone" name="fphone" required placeholder="Ex. 9898989898 "/><b><span class="formerror"></span></b>
        </div>
        <div class="formdesign" id="acno">
            <label>Account number:</label>  
            <input type="acno" name="facno" required placeholder="Ex. 121212121212"/>
            <b><span class="formerror" ></span></b>
        </div>

        <div class="formdesign" id="pass">
            <label> Password:</label> <input type="password" name="fpass" required/><b><span class="formerror"></span></b>
        </div>

        <div class="formdesign" id="cpass">
            <label>  Confirm Password:</label> <input type="password" name="fcpass" required/><b><span class="formerror"></span></b>
        </div>

        
        
        <input class="but" type="submit" value="Register" />

    </form>

    </div>);
}
 
export default Register;