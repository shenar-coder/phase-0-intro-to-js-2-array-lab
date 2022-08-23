const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
 cats.push(name);
}
function destructivelyPrependCat(name){
cats.unshift(name);
}

function  destructivelyRemoveLastCat(){
cats.pop();
}

function destructivelyRemoveFirstCat(){
 cats.shift();  
}

function appendCat(name){

const copyOfcats = [...cats, name];

return copyOfcats

}
function prependCat(name){

    const copyOfcats = [name, ...cats];
    
    return copyOfcats
    
    }

    function removeLastCat(){

       
        const copyOfcats = cats.slice(0, cats.length -1);
    
        return copyOfcats;
    }
    function removeFirstCat(){

       
        const copyOfcats = cats.slice(1);
    
        return copyOfcats;
    }