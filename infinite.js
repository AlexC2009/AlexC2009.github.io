function typeObject(){
    this.myProperty = 1;
    this.myMethod = function(){
        console.log("Method!");
    }
}

//The eval() operator takes stuff and evaluates it as code
for(var i = 0; i < 10; i++){
    eval("var value" + i + "= new typeObject()")
}

value9.myMethod;