import faker from 'faker';

let mount = (el)=>{
    const cartText = `<div>you have ${faker.random.number()} items in your cart</div>`
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development"){
    const el = document.querySelector('#dev-cart');
    if(el){
        mount(el);
    }
}

// console.log(products);
export {mount};

