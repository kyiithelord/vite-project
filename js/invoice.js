import { inventoryBtnHandler, newItemFormHandler, printerHandler, recordFormHandler } from "./core/handler";
import { productItemRender, productOptionRender } from "./core/product";
import { recordObserver } from "./core/record";
import { inventoryBtn, newItemForm, printer, recordForm } from "./core/selector";

export default class Invoice{

    observer(){
        recordObserver()

    }

    initialRender(){
        productOptionRender();
        productItemRender();


    }

    listener ()  {
        recordForm.addEventListener("submit",recordFormHandler);
        newItemForm.addEventListener("submit",newItemFormHandler);
        printer.addEventListener("click",printerHandler);
        inventoryBtn.addEventListener("click",inventoryBtnHandler)
    }

    init(){


        console.log("THIS IS INVOICE APP");
        this.observer();

        this.initialRender();

        this.listener();

    }
    
}