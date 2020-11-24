
console.log("HELLO");

var form = document.querySelector('form');

const API='http://localhost:3000/'




form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //console.log("CLICKED")
    const name=document.getElementsByName('first')[0].value;
    const text=document.getElementsByName('second')[0].value;
    console.log(name);
    console.log(text);
    const mew ={
        name,
        text
    }
    fetch(API,{
        method:'POST',
        body:JSON.stringify(mew),
        headers:{
            'content-type':'application/json'
        }

    })
})

showalldata();

function showalldata(){
fetch(API).then(response=>response.json()).then(data=>console.log(data))


}