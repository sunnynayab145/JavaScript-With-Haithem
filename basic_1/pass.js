function passwordStrength()
{  
    while(true)
        {

        let pass = prompt("Enter Password:");
        
        if(pass.length >= 8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass))
        {
            return "Strong Password";
        }
        else 
        {
            return console.log("Invalid And Weak Password");
        }
    }
    }
    console.log(passwordStrength());
    