// -----------------------Toast--------
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));
function showtost(){
toastList[0].show();
}

// ---------tolltip------------------
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// -----------form validation--------------------
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// --------------------------------------------------
  function gotoproduct(){
   
    window.location.href="./product.html";
  }



//----------------------------------------------login---------------------------
function gotohome(){
  var email=document.querySelector("#email").value;
  var pwd=document.querySelector("#password").value;
   if(email=="rohit@gmail.com" && pwd=="1234"){
     window.location.assign("./demo.html");
     alert("login sucessfull!!")
   }else{
     alert("invalid credential");
     return;
  }
}
  

  // --------------modal-----------------
  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')
  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})