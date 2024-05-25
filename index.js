const email = document.querySelector("#user-email");
const psw = document.querySelector("#psw");
const btn = document.querySelector("#btn");
const alrt = document.querySelector("#e-msg");

const alrt3 = document.querySelector("#sucess")



email.addEventListener("change", detectInput);
psw.addEventListener("change", detectPass);
btn.addEventListener("click", checkValue)



function detectInput (){
  let mail = email.value;
  console.log(mail)
  if((mail.length<3) || mail.indexOf("@") == -1 || mail.indexOf(".") == -1){
    
    alrt.innerHTML = "Make sure email is more than 3 characters and has @ and ."
    alrt.className = "error"
    
    return;

  }
  }

  function detectPass(){
    let input = psw.value;
    if(input.length<8){
      alrt3.innerText = "password length should be more 7";
      alrt3.className = "error"
    }else{
      alrt3.innerText = "Good to go";
      alrt3.className = "sucess";
    }
  }

  function checkValue(){
    let mail = email.value;
    let input = psw.value;
  if(!((mail.length<3) || mail.indexOf("@") == -1 || mail.indexOf(".") == -1) && !(input.length<8) ){
    confirm('Do you want to submit the form?')
    alert("signup sucessfull")
    btn.preventDefault();

  }
  
  }