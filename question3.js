
let submit = document.querySelector('#submit')
let formheader = document.querySelector('.formheader')
 function checkForm()
{
  

   let passWord = document.getElementById('password');
   let pass =12345678;

     if(passWord.value.match(pass)) {
        alert('Your password is correct');
        
      }
      else {
        alert('Your password is incorrect');
      }
      formheader.innerText = 'The information in the form is correct';
  }
   
   
   
   
 

