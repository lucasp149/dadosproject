

var n;
var options = ["url(/img/one.png)", 'url(/img/two.png)', 'url(/img/three.png)', 'url(/img/four.png)', 'url(/img/five.png', 'url(/img/six.png)'];
var lista = ["one","two", "three","four"];


function dados(){
    let select = document.getElementById("numberOf");
    let howMany = select.options[select.selectedIndex].value;
    console.log(howMany);
    let one = document.getElementsByClassName("one")[0];
    let two = document.getElementsByClassName("two")[0];
    let three = document.getElementsByClassName("three")[0];
    let four = document.getElementsByClassName("four")[0];
    let mesa = document.getElementById("mesa");
    if(howMany ==="1"){
        one.style.display = "block";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
    }
    if(howMany ==="2"){
        one.style.display = "block";
        two.style.display = "block";
        three.style.display = "none";
        four.style.display = "none";
    }
    if(howMany ==="3"){
        one.style.display = "block";
        two.style.display = "block";
        three.style.display = "block";
        four.style.display = "none";
        mesa.classList.add("mesaMini");
    }
    if(howMany ==="4"){
        one.style.display = "block";
        two.style.display = "block";
        three.style.display = "block";
        four.style.display = "block";
    }  
}
// This function give us a pretty random numer between low and high
function getRandomNumber() {
    let r = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return r;
  }

// n is the random number (will pass a functions directly). d is the dado's number aka how many times the function has to throw and how many dado's are involved.



var veces=0;

function createPromise(ms) {
    return promise = new Promise (function(resolve,reject){
        setTimeout(()=> { resolve("ok")}, ms);
    });
    }

    function throwing(d){
        console.log("working");
        n= getRandomNumber();
        console.log("movimiento del dado " + n);   
        d.style.backgroundImage = options[n-1];
        console.log(d.style.backgroundImage); 
        console.log(d.style.display); 
    };

async function show(){
    let select = document.getElementById("numberOf");
    let howMany = select.options[select.selectedIndex].value;
    var suma = 0;
    veces++;
     

    for(let i=0 ;i<howMany;i++){
        let dado = document.getElementsByClassName(lista[i])[0];
        let tira = document.getElementById("tira");
        let exito = document.getElementById("exito");
        tira.play();
        


        // CHANGING DADO EFFECT    
        let one = await createPromise(100);
        throwing(dado)
        let two = await createPromise(100);
        throwing(dado);
        two = await createPromise(100);
        throwing(dado);
        two = await createPromise(100);
        throwing(dado);
        two = await createPromise(100);
        throwing(dado);
        two = await createPromise(100);
        throwing(dado);


        // END OF CHANGING DADO EFFECT  
        suma += n;          

        console.log(n);
        console.log(howMany);

        if(suma == howMany*6){
            console.log("Si");
            tira.pause();
            exito.play();
        }
        
   }

    // MOSTRAR LA SUMA TOTAL DE LOS DADOS Y LAS VECES QUE FUERON TIRADOS
        let parrafoSuma = document.getElementById("suma");
        let parrafoVeces = document.getElementById("veces");
       
        parrafoSuma.innerHTML = `La suma total de los dados es: ${suma}`;

        if(howMany==="1"){
            parrafoVeces.innerHTML = `El dado fue lanzado ${veces} veces`;
           
        }
        else{
            parrafoVeces.innerHTML = `Los dados fueron lanzados ${veces} veces`;
            
        }
       
        
}