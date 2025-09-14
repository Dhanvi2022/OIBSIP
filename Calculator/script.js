document.addEventListener("DOMContentLoaded",()=>
{
let input_field=document.getElementById("inputs");
let buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        let value=btn.innerText;

        if(value==="C"){
            input_field.value=""
        }
        else if(value==="Back"){
            input_field.value=input_field.value.slice(0,-1);
        }
        else if(value==="="){
            try{
                let experssion=input_field.value;
                let result=eval(experssion);
                input_field.value=experssion+"\n"+result;
            }
            catch{
                alert("invalid experssion");
            }
        }
        else{
            input_field.value+=value;
        }
    });
});
});