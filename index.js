const rating = document.querySelector("span");
const rates  = document.querySelectorAll(".node");


let container = [];
let visited = 0;
for (let i = 0; i < rates.length; i++) {
    let rate = rates[i];

    rate.addEventListener("click", function(){
        console.log(container);
        if(container.length===0){
            container.push(rate.innerHTML);
            rate.classList.add("clicked");


        }else if(!container.includes(rate.innerHTML) && container.length>0){
            container.push(rate.innerHTML);
            visited = container.shift();
            rates[visited-1].classList.remove("clicked");
            rate.classList.add("clicked");
            
        }else if(container.includes(rate.innerHTML)){
            container.pop();
            rate.classList.remove("clicked");
        }else{
            container.push(rate.innerHTML);
        }
        console.log(container);

        rating.innerHTML = rate.innerHTML;
    });
}

function redirect(){
    if(container.length==0){
        $("small").html("Please select a rating first")
    }else{
        $("small").hide();
        $(".container").hide();
        $(".redirect").show();
    }
}

