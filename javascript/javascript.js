let countEl = document.getElementById("count-el");
let prevEl = document.getElementById("prev-el");
let iceCreamContainer = document.getElementById("ice-cream-container");
let makeIceCream = document.getElementById("make-ice-cream");
let count = 0;
let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquad : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};



function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    prevEl.textContent += count + " - ";
    count = 0;
}

function iceCreamAdd(text){
    let ele = document.createElement("h2");
    ele.classList.add("ice-ele")
    ele.textContent = text;
    iceCreamContainer.appendChild(ele);
}

function iceCreamClear(){
    let ele = document.getElementsByClassName("ice-ele");
    for(let i = ele.length - 1; i > -1; i--){
        iceCreamContainer.removeChild(ele[i]);
    }
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout( ()=>{
                resolve( work() )
            }, time )
            
        }
        else{
            reject( iceCreamAdd("shop is closed") )
        }
    } )
}

makeIceCream.addEventListener("click", ()=>{
    order(2000, ()=>iceCreamAdd(`${stocks.fruits[1]} was selected`))

    .then(()=>{
        return order(0000, ()=>iceCreamAdd("production has started"))
    })

    .then(()=>{
        return order(2000, ()=>iceCreamAdd("the fruit was cut"))
    })

    .then(()=>{
        return order(1000, ()=>iceCreamAdd(`${stocks.liquad[0]} and ${stocks.liquad[1]} was added`))
    })

    .then(()=>{
        return order(1000, ()=>iceCreamAdd("the machine was started"))
    })

    .then(()=>{
        return order(2000, ()=>iceCreamAdd(`ice cream was placed in ${stocks.holder[1]}`))
    })

    .then(()=>{
        return order(3000, ()=>iceCreamAdd(`${stocks.toppings[0]} was added`))
    })

    .then(()=>{
        return order(2000, ()=>iceCreamAdd("ice cream is ready!"))
    })

    .catch(()=>{
        iceCreamAdd("customer left")
    })
})

