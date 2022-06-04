function calc(a,b) {
    return (a+b);
}

console.log(calc(4,3));
console.log(calc(5,3));
console.log(calc(10,3));
console.log(calc(4,6));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);







const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black'
        
    }
}

console.log(options.name);

delete options.name;
console.log(options);

for (let key in options){
    console.log (`Свойство ${key} is ${options[key]}`);
}