console.log('Client side javascript file is loaded!')

const msg1=document.querySelector("#msg1");
const msg2=document.querySelector("#msg2");
const loc=document.querySelector("input");
const wform=document.querySelector('form');

if(wform){
    wform.addEventListener('submit',(e)=>{
        e.preventDefault();
        const add=loc.value
        msg1.textContent="Loading..."
        msg2.textContent=""
        fetch('/weather?address='+add).then((response) => {
        response.json().then(
        (data) => {
        if (data.error) {
            msg1.textContent=data.error
        } else {
            msg1.textContent=data.address
            msg2.textContent=data.data
        }
    })
})
})
}