let NumberId = document.getElementById("Container");

let element = document.createElement("div");

element.classList.add('text-black',"fs-4", "p-5");

NumberId.classList.add("bg-warning")

NumberId.append(element);



for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`);
        element.innerHTML += `<p>${i} FIZZBUZZ</p>`;
    
    }else if(i % 3 == 0){
        console.log(`${i} FIZZ`);
        element.innerHTML += `<p>${i} FIZZ</p>`;
    
    }else if (i % 5 == 0){
        console.log(`${i} BUZZ`);
        element.innerHTML += `<p">${i} BUZZ</p>`;
        element.classList.add("bg.warning")
    
    }else{
        console.log(`${i}`);
        element.innerHTML += `<p>${i}</p>`;
    }
} 

