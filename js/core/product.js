import { itemLists, productSelect } from "./selector"
import { products } from "./variaes"


export const productOptionRender=() => {
    products.forEach(({name,id}) => productSelect.append(new Option(name,id)))
};

export const productItemRender =() => {
    products.forEach(({name,price}) =>   itemLists.append(createItem({name,price})));


    
};

export const createItem =  ({name,price})   => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML=`
    <div class="d-flex justify-content-between">
       <p class="mb-0">${name}</p>
        <p class="text-black-50 mb-0"><span>${price}</span>MMk</p>
  
   </div>`;
   return li
  }