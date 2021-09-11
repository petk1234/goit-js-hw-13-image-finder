import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
import imagesPromise from "./apiService.js";
import template from "./template.hbs";
import "./styles.css";
import buttonEl from "./button-creation";
const refs = {
    bodyEl: document.querySelector('body'),
    inputEl: document.querySelector('input'),
    ulEl: document.querySelector('ul'),
    //photoCardEl: document.querySelector('.photo-card'),
}
let page = 1;
// refs.bodyEl.appendChild(buttonEl);

const deleteUl = () =>{
    const divEl = document.querySelectorAll('div');
    divEl.forEach( div => div.remove() ); 
}

const insertImages = (e) =>{

    deleteUl();

    if(e.target.value !== ''){
      console.log(imagesPromise(e.target.value, page));
      imagesPromise(e.target.value, page, 12)
      .then( datas =>{ 
          if(e.target.value !== ''){   
            datas.hits.map( data =>{
                //console.log(data.pageURL);
                //console.log(data);
                refs.ulEl.insertAdjacentHTML('afterbegin', template(data));
                //return data.pageURL;
            });
            //page = page + 1;
            console.log(page);
          }

          else{
               deleteUl();
               page = 1;
               console.log('promise else: ', page);
          }
      })
    }
     
    else{
         const ulEll = document.querySelectorAll('ul');
         ulEll.forEach( ul => ul.remove() );
         page = 1;
         console.log('outside else: ', page);
    }
}
let n = 0;
const scrollingNextImgs = e =>{
    //console.log(refs.inputEl.value);
    console.log(imagesPromise(refs.inputEl.value, page, 6));
    imagesPromise(refs.inputEl.value, page, 6)
      .then( datas =>{ 
            datas.hits.map( data =>{
                refs.ulEl.insertAdjacentHTML('beforeend', template(data));
            });
            
            window.scrollBy({ 
                top: window.innerHeight / 1.5,
                behavior: "smooth",
            });
            page = page + 1;
            console.log(page);
            n = n + 1;
      });
}

const openImgLightbox = e =>{
    const instance = basicLightbox.create(`
    <img src=${e.target.src} width="800" height="600">`,{
        closable: true,
    });
    instance.show();
    console.log('hello');
}

refs.inputEl.addEventListener('input', insertImages);
refs.bodyEl.append(buttonEl);
buttonEl.addEventListener('click', scrollingNextImgs);
refs.ulEl.addEventListener('click', openImgLightbox);