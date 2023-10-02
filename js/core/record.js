import Swal from "sweetalert2";
import Toastify from  "toastify-js"
import { records, totalCost } from "./selector";

export const createRecord = (product, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("row-product-id", product.id);
  tr.classList.add("record-row");
  const cost = product.price * quantity;
  tr.innerHTML = ` 
    <td class='row-num'></td>
    <td>${product.name}</td>
    <td class="text-end ">${product.price}</td>
    <td class="text-end row-quantity-control"><i class="bi bi-dash row-quantity-decrement"></i><span class=" row-quantity">${quantity}</span><i class="bi bi-plus row-quantity-increment"></i></td>
    <td class="text-end row-control "><span class="row-cost">${cost}</span><button class="btn btn-sm btn-primary row-delete"> <i class="bi bi-trash3"></i> </button> </td>`;

  const deleteRecord = () => {
    // console.log(tr);

    // if (confirm("Are Your Sure To Delete ?")) {
    //   tr.remove();
    // }

    Swal.fire({
      title:"Are U Sure?",
      text:"It will permanent delete.",
      icon:"question",
      showCancelButton:true,
      confirmButtonColor:"#333",
      cancelButtonColor:"gray",
      confirmButtonText:"Yes delete it!"
    }).then((result) => {
      if(result.isConfirmed){
        tr.remove()
        Toastify({
          text:"List deleted.",
          duration: 3000,
        }).showToast();
        // Swal.fire(
        //   "Delete!",
        //   "Your list has been deleted",
        //   "success"

        // )



        
      }
      
    })
  };

  const rowDelete = tr.querySelector(".row-delete");
  rowDelete.addEventListener("click", deleteRecord);
  const recordQuantityIncrement = tr.querySelector(".row-quantity-increment");
  recordQuantityIncrement.addEventListener("click", () => {
    updateRecord(product, 1);
  });

  const recordQuantityDecrement = tr.querySelector(".row-quantity-decrement");
  recordQuantityDecrement.addEventListener("click", () => {
    const row = document.querySelector(`[row-product-id ="${product.id}"]`);

    const currentRowQuantity = row.querySelector(".row-quantity");
    currentRowQuantity.innerText > 1 && updateRecord(product, -1);
  });

  return tr;
};

export const addRecord = (product, quantity) => {
  records.append(createRecord(product, quantity));
};

export const updateRecord = ({ id, price }, quantity) => {
  const row = document.querySelector(`[row-product-id ="${id}"]`);

  const currentRowQuantity = row.querySelector(".row-quantity");
  const currentRowCost = row.querySelector(".row-cost");

  currentRowQuantity.innerText =
    parseFloat(currentRowQuantity.innerText) + parseFloat(quantity);
  currentRowCost.innerText = currentRowQuantity.innerText * price;

};

export const calculateRecordCostTotal = () => {
  totalCost.innerText = [...document.querySelectorAll(".row-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerHTML),
    0
  );
};

export const recordObserver=() => {
  console.log("record observer start");

  const observerOptions = {
    childList: true,
    subtree: true,
  };
  
  const observer = new MutationObserver(() => {
    calculateRecordCostTotal();
  });
  observer.observe(records, observerOptions);
}
