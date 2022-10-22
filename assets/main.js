

for (let i = 1; i <= 100; i++) {

    let NumberId = document.getElementById("numberList");

    let element = document.createElement("li");

    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`);
        element.innerHTML += `${i} FIZZBUZZ`;
        element.style.backgroundColor = "blue"
        element.style.color = "white"
    
    }else if(i % 3 == 0){
        console.log(`${i} FIZZ`);
        element.innerHTML += `${i} FIZZ`;
        element.style.backgroundColor = "red"
    
    }else if (i % 5 == 0){
        console.log(`${i} BUZZ`);
        element.innerHTML += `${i} BUZZ`;
        element.style.backgroundColor = "lightblue"
    
    }else{
        console.log(`${i}`);
        element.innerHTML += `${i}`;
        element.style.backgroundColor = "yellow"
    }

    NumberId.append(element);
} 

