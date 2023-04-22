function validform(){
		
		              /*name*/
	          var Name=document.myform.name1.value
	   
	           if(Name=="null"||Name==""||Name==[	   ]){
			          alert("enter a proper name")
			          return false
			   }
			   
	   
	   
	                 /*email*/
					 
	         var Email=document.myform.email.value
			 var atposition=Email.indexOf("@")
			 var dotposition=Email.lastIndexOf(".")
	   
	     if(atposition<1 || dotposition<atposition+2 || dotposition+2>=Email.length){
		 
		      alert("enter a proper email")
			  return false
		    }
		 
	             /* date*/
	  
	        var currentdate=new Date()
	        var dob=new Date(document.myform.date.value)
			
		 if(dob>=currentdate){
		 alert("enter a correct date")
		 return false
		 }
		 
		  /*mobile number*/
			  
	        var Number=document.myform.mobile.value
			
		if(Number.length == 10){
		    return true
		
		}	else{
		    alert("enter 10 digit number")
			return false
		
		}
       	       /*password*/
			   
		  var password=document.myform.pass1.value  
	          var cpassword=document.myform.pass2.value
	   
	       if(password.length<6){
		         alert("Enter minimum 6 digits")
		         return false
		   }
		   
		   
		  if(password==cpassword){
		       return true
             }
          else{
		   alert("password & confirm-password must be same")
		    return false 
		   } 
	       }
	        