var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

//formula

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //meter to kilometer
    if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
    result.value = Number(input.value) * 0.001;
    }
    //meter to centimeter
    else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter"){
     result.value = Number(input.value) * 100;
    }
    //meter to meter
    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        result.value = input.value
    }

    
    //kilometer to meter
    if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 1000;
     }
    //kilometer to Centimeter
     else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter"){
     result.value = Number(input.value) * 100000;
     }
     //kilometer to kilometer
    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
    result.value = input.value
    }


     //Centimeter to kilometer
     if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.00001;
     }
    //Centimeter to meter
     else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter"){
     result.value = Number(input.value) * 0.01;
     }
     //Centimeter to Centimeter
    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
    result.value = input.value
    }
}