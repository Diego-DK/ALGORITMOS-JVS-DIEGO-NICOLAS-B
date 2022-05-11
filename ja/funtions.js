//document.body.onload=function(){
//    alert("hola mundo")
//}
    
function operaciones(){
    var a=0;
    var b=0;
    var suma=0;

    alert("este algoritmo realiza una suma de dos valores ingresado por el ususario");
    a=parseFloat(prompt("por favor ingrese el primer valor"));
    b=parseFloat(prompt("por favor ingrese el segundo valor"));

    suma=a+b;

    alert("el resultado de la suma es:"+suma);

    var a=0;
    var b=0;
    var resta=0;

    alert("resta")
    a=parseFloat(prompt("por favor ingrese el primer valor"));
    b=parseFloat(prompt("por favor ingrese el segundo valor"));

    resta=a-b;

    alert("el resultado de la suma es:"+resta);

    var a=0;
    var b=0;
    var mul=0; 

    alert("multiplicacion")
    a=parseFloat(prompt("por favor ingrese el primer valor"));
    b=parseFloat(prompt("por favor ingrese el segundo valor"));

    mul=a*b;

    alert("el resultado de la suma es:"+mul);

    var a=0;
    var b=0;
    var div=0;

    alert(divicion)
    a=parseFloat(prompt("por favor ingrese el primer valor"));
    b=parseFloat(prompt("por favor ingrese el segundo valor"));

    div=a/b;

    alert("el resultado de la suma es:"+div);
}

function mayor(){

    alert("este algoritmo va a comparar dos nueros y tirar el que es mayor");

    var a=0;
    var b=0;
    var pro=0;

    a=prompt("por favor ingrese el primer dato");
    b=prompt("por favor ingrese el segundo dato")

    pro=a>b

    if(a>b){
        alert("el primer valor es mayor "+a);
     }
    else{
         alert("el segundo valor es mayor "+b);
     }
}

function menor(){
    var A=0
    var B=0
    var C=0
    

    A=prompt("por favor ingrese el primer valor");
    B=prompt("por favor ingrese el segundo valor");
    C=prompt("por favor ingrese el tercer valor");

    if (A<B){
        alert("el primer valor es menor "+A);
    } else if (B<C){
        alert("el segundo valor es menor "+B);
    } else {
        alert("el tercer valor es menor "+C);
    }
}


 function par(){
     var A=0

     A=prompt("ingrese el valor a comprovar");

     if (A % 2 == 0){
         alert("el numero " + A + " es par");
     } else {
         alert("el numero "+ A + "es impar");
     }

}

function  cuadrado(){
    var A=0
    var B=0

    A=prompt("por favor ingrese el numero para la operaciion");
    
    A = Math.pow(A,2)

    alert("el cuadrado del numero ingresado es: "+A)
}

function triangulo(){
    var A=0
    var B=0
    var H=0

    A=parseFloat(prompt("por favor ingrese la altura del triangulo"));
    B=parseFloat(prompt("por favor ingrese la base del triangulo"));

    H=A*B/2

    alert("el area del triangulo es: "+H+" cm")
}

function cm(){
    var cm=0;
    var m=0;

    m=prompt("por favor ingrese la mediad en M");

    cm=m*100

    alert("la convercion en cm es: "+cm+"cm");
}

function edad(){
    var E=0
    var A=0
    var N=0

    E=prompt("INGRESE SU EDAD");
    A=prompt("INGRESE EL AÑO ACTUAL");

    N=A-E

    alert("USTED NACIO EN EL AÑO"+N);
}

function INVERCION(){
    var I=0
    var T=0
    var G=0

    I=parseFloat(prompt("INGRESE SU CAPIATAL"));
    T=parseFloat(prompt("INGRESE EL TIEMPO QUE VA A DURAR"));

    G=(I*0.2)*T
    

    alert("SU GANANCIA VA A SER "+G);
}

function notas(){
    var n1=0;
    var n2=0;
    var n3=0;
    var n4=0;
    var n5=0;
    var pro=0;
    var n=0;

    n1=parseFloat(prompt("dijite la primera nota"));
    n2=parseFloat(prompt("dijite la primera nota"));
    n3=parseFloat(prompt("dijite la primera nota"));
    n4=parseFloat(prompt("dijite la primera nota"));
    n5=parseFloat(prompt("dijite la primera nota"));

    pro=n1+n2+n3+n4+n5
    n=pro/5

    alert("su promedio es: "+n);

    if (n<29){
        alert("usted perdio la asignatura");
    }else{
        alert("usted aprobo la asignatura");
    }



    
}