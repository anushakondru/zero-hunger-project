function validateForm() {
    let x = document.forms["f"]["name"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
    }
   }
   function validateEmail(inputText)
   {
   var mailformat = 
   /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
   if(inputText.value.match(mailformat))
    {
    alert("Valid email address!");
   document.form1.text1.focus();
   return true;
    }
   else
    {
    alert("Invalid email address!");
   document.form1.text1.focus();
   return false;
    
   }
   }
  
  
   function incrementValue()
  {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
  }
    
  
    
  
   
   
  function show() {
 
    
    let image = document.getElementById("image");
  
    image.src ="food.jpg"
  
    document.getElementById("btnID")
            .style.display = "none";
  }
  
  function show2() {
   
    let image = document.getElementById("image");
  
    image.src ="beverages.jpg"
  
    document.getElementById("btnID")
            .style.display = "none";
  }
   