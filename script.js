function calculate(){
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    if(a < 0 || b < 0 || c < 0){
        document.getElementById("result").innerText = `Triangle does not exist. Please provide a valid input.`;
    }
    else if (isNaN(a)){
        c = c*c;
        b = b*b;
        a = Math.sqrt(c-b);
        if(a<=0 || isNaN(a)){
            document.getElementById("result").innerText = `Triangle does not exist`;
        }
        else{
            document.getElementById("result").innerText = `Side A = ${a}`;
        }
    }
    else if (isNaN(b)){
        c = c*c;
        a = a*a;
        b = Math.sqrt(c-a);
        if(b<=0 || isNaN(b)){
            document.getElementById("result").innerText = `Triangle does not exist`;
        }
        else{
            document.getElementById("result").innerText = `Side B = ${b}`;
        }
    }
    else if (isNaN(c)){
        b = b*b;
        a = a*a;
        c = Math.sqrt(a+b);
        if(c<=0 || isNaN(c)){
            document.getElementById("result").innerText = `Triangle does not exist`;
        }
        else{
            document.getElementById("result").innerText = `Side C = ${c}`;
        }
    }
}