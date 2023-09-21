import { newItemFormHandler, printerHandler, recordFormHandler } from "./core/handler";
import { productItemRender, productOptionRender } from "./core/product";
import { newItemForm, printer, recordForm } from "./core/selector";

export default class Invoice{

    initialRender(){
        productOptionRender();
        productItemRender();


    }

    listener ()  {
        recordForm.addEventListener("submit",recordFormHandler);
        newItemForm.addEventListener("submit",newItemFormHandler);
        printer.addEventListener("click",printerHandler);
    }

    init(){


        console.log("THIS IS INVOICE APP");
        this.initialRender();

        this.listener()
    }
    
}