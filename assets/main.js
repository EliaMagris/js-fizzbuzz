let NumberId = document.getElementById("Container");

let element = document.createElement("div");

element.classList.add('text-white',"fs-4", "p-5", "bg-danger");

NumberId.classList.add("bg-warning")

NumberId.append(element);


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`);
        element.innerHTML += `<p class= "bg-warning text-center text-black">${i} FIZZBUZZ</p>`;
    
    }else if(i % 3 == 0){
        console.log(`${i} FIZZ`);
        element.innerHTML += `<p class= "bg-secondary text-black">${i} FIZZ</p>`;
    
    }else if (i % 5 == 0){
        console.log(`${i} BUZZ`);
        element.innerHTML += `<p class= "bg-primary text-black">${i} BUZZ</p>`;
    
    }else{
        console.log(`${i}`);
        element.innerHTML += `<p class= "bg-info text-black">${i}</p>`;
    }
} 

