import "../scss/app.scss";
import Invoice from "./invoice";
import * as bootstrap from "bootstrap"


const invoiceApp=new Invoice;
invoiceApp.init()
console.log(invoiceApp);


// const myModal=document.querySelector("#exampleModal")
// const bsModal=new bootstrap.Modal(myModal)
// console.log(myModal);
// console.log(bsModal);
// bsModal.toggle()
// window.setTimeout(() => {
//     bsModal.toggle()
    
// },5000)