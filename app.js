const screen=document.querySelector('.screen');
const buttons=document.querySelectorAll('button');
let content=[];
let accumlatedContent;


function buttonClicked(button){

    let value=button.textContent;

    if(value==="CLEAR")
    {   screen.textContent="000";
        content=[];
    
    }

    else if(value=="=")
    {
        screen.textContent = eval(accumlatedContent);

    }

    else
    {
    //    console.log(button.textContent);
    //    value=button.textContent;
       content.push(value);
       // console.log(content);
       accumlatedContent= content.join('');
       screen.textContent=accumlatedContent;

    }}

buttons.forEach((button)=>button.addEventListener('click',()=>buttonClicked(button)
))