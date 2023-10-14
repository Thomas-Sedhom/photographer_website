let email = document.getElementById("inputName"),
    red = document.getElementById("red"),
    passreject = document.getElementById("passreject"),
    pass = document.getElementById("inputPass"),
    phone = document.getElementById("inputPhone"),
    rejectPhone = document.getElementById("phone"),
    inputAge = document.getElementById("inputAge"),
    validAge = document.getElementById("validAge"),
    success = document.getElementById("success"),
    success1 = document.getElementById("success1"),
    success2 = document.getElementById("success2"),
    success3 = document.getElementById("success3"),
    button = document.getElementById("button");

    button.onclick = function(){

        let access = 0 ,  gmail = 0 , small = 0 ,
            empty = 0 , validphone = 1 , age = 1 ; 

        for( let i = 0 ; i < email.value.length; i++){

            if(email.value[i] == "@"){
                access = 1 ;
            }

            if(email.value[i] == '.' ){
                gmail = 1 ;
            }
        }

        if(email.value.length != 0 ){

            empty = 1 ;
        }

        if(pass.value < 5 || pass.value > 30  ){

            small = 1 ;
        }

        if(phone.value.length == 11 && phone.value[0] == 0 && phone.value[1] == 1 &&
            (phone.value[2] == 1 || phone.value[2] == 0 || phone.value[2] == 2 || phone.value[2] == 5) ){

                validphone = 1 ;

            }else{

                validphone = 0 ;
            }

            if(inputAge.value < 2 || inputAge.value > 60 ) {age = 0 ;}

        if( empty == 0 ){

            red.innerHTML = " put your email";
            success.innerHTML = ""

        }else if( access == 0 && gmail == 0 ){

            red.innerHTML = "you forget @ in your email <br> you forget .com ";
            success.innerHTML = ""

        }else if( gmail == 0 ){

            red.innerHTML = "<br> you forget .com ";
            success.innerHTML = ""

        }else if( access == 0 ){

            red.innerHTML = "you forget @ in your email ";
            success.innerHTML = ""
        
        }else{

            red.innerHTML = "" ;

            success.innerHTML = "valid"
        }

        if( small == 1 ){

            passreject.innerHTML = "min 5 max 30 pic";
            success1.innerHTML = ""

        }else{
            passreject.innerHTML = "";

            success1.innerHTML = "valid"
        }

        if( validphone == 0 ){

            rejectPhone.innerHTML = " this is uncorrect phone number";
            success2.innerHTML = ""
        
        }else{

            rejectPhone.innerHTML="";
            success2.innerHTML = "valid"
        } 

        if(age == 0){
            validAge.innerHTML = "invalid age"
            success3.innerHTML = "";

        }else{

            validAge.innerHTML = "" ;

            success3.innerHTML = "valid";
        }
    }
