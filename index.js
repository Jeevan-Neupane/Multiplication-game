const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);


const question=document.querySelector("#question");
const form=document.querySelector("#form");
const input=document.querySelector("#input");
const score=document.querySelector("#score")


question.innerText=`What is ${num1} multiply by ${num2} ?`

const correctAns=num1*num2;
let scores=JSON.parse( localStorage.getItem("scores"));

if(!scores){
     scores=0;
}
score.innerText=`score:${scores}`
form.addEventListener("submit",(e)=>{
    // e.preventDefault();
   const userAns=+input.value;
   console.log(userAns,typeof userAns)
   if(correctAns===userAns){
    scores++;
    updateLocalStorage();
}
else{
    scores--;
     updateLocalStorage();
   }

})
function updateLocalStorage(){
    localStorage.setItem("scores",JSON.stringify(scores))
}





