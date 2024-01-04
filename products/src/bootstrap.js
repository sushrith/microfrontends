import faker from 'faker';

// This will handle multiple situations. load immediate or load on click 
// isolated running application
// or running inside container it will work in all situations.

let mount = (el)=>{
    let products = '';

    for(let i=0;i<25;i++){
        const name = faker.commerce.productName();
        products +=`<div>${name}</div>`
    }
    
    el.innerHTML = products;
    
}

if (process.env.NODE_ENV === "development"){
    const el = document.querySelector('#dev-products');

    if(el){
        mount(el);
    }
}


// console.log(products);
export {mount};