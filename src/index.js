import imagesPromise from "./apiService.js";
import template from "./template.hbs";
const refs = {
    bodyEl: document.querySelector('body'),
    inputEl: document.querySelector('input'),
}
let page = 1;


const insertImages = (e) =>{

    const ulEl = document.querySelectorAll('ul');
    ulEl.forEach( ul => ul.remove() );

    if(e.target.value !== ''){
    console.log(imagesPromise(e.target.value, page));
    imagesPromise(e.target.value, page)
    .then( datas =>{ 
       return datas.hits.map( data =>{
           //console.log(data.pageURL);
           //console.log(data);
           refs.bodyEl.insertAdjacentHTML('beforeend', template(data));
           //return data.pageURL;
       });
    })
    .then( smth =>{
        page = page + 1;
        console.log(page);
        return page;
    });
    // page += 1;
    // console.log(page);
    }
    else{
        const ulEll = document.querySelectorAll('ul');
        ulEll.forEach( ul => ul.remove() );

        page = 1;
        console.log(page);
         imagesPromise(e.target.value, page)
         .then( datas =>{ 
          //return datas.hits.map( data =>{
            //console.log(data.pageURL);
            //console.log(data);
    //        refs.bodyEl.insertAdjacentHTML('beforeend', template(data));
            //return data.pageURL;
          const ulEll = document.querySelectorAll('ul');
          ulEll.forEach( ul => ul.remove() );
          page = 1;
          console.log(page);
          return page;
        });
    // });
    }
}


// insertImages('flowers', 1);
// const inputText = e =>{
//     console.log(e.target.value);
//     return e.target.value;
// }
//refs.inputEl.addEventListener('input', inputText);
refs.inputEl.addEventListener('input', insertImages);
//refs.bodyEl.insertAdjacentHTML('afterbegin', insertImages('flowers', 1));
console.log("hi");