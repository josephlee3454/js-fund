
// problem 1
console.log(hello);                                   
var hello = 'world';   
// var hello
// console.log(hello);
// hello = 'world'   

// undefined because the var is assigned after the console.log 


// problem 2 
var needle = 'haystack';
    test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle ||it first sees the the var needle
//needle = 'haystack' ||the string haystack 
// test()  ||this is the function call this is basically the result of the function that is going to be called 
// function test||
// var needle ||it first see the varibke designation 
// needle = 'magnet' ||string magnet will be assigned to the varible needle 
// console.log(needle) ||will out put the value of the varible needle which is the string magnent



//problem 3


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan || it first sees the varible brendan 
// brendan = 'super cool' || assign the string super cool to brendan 
// function print || the function is named and holds the stuff you wantt to do 
// brendan = 'only okay ' || 'only okay' is assigned to the var brendan 
// console.log(brendan) || if the function is called the console log will output 'only okay' since that is the var local to the function
// console.log(brendan) || this will log the global var which is 'super cool; 



// problem 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food || var food is declared 
// food = 'chicken' || the string chicken is assigned to food 
// console.log(food) || going to console log the string chicken 
// eat() || the function call for eat is called and will be the result of the function eat 
// fundtion eat() || the function is named eat 
// food = 'half-chicken' || the string half chicken is assigned to the var food 
// console.log(food) || will log the local varible food to the function in the console log which is the string half-chicken
// var food || var food is declared 
// food = 'gone' || the string gone is assigned to the var food 
// the final out put is 'chicken' , and the function oputput 'half-chicken'





// problem 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean()|| it errors out because the function dosnt exist its not a real function



// problem 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre)||this will print undefined becuase the genre isnt defined yet
// var genre || the var genre is declared 
// rewind() || the function call it logs 'rock' first then it logs 'r&b' 
// genre = 'rock' || assigns the string rock to the var genre 
// console.log(genre) || logs the value of genre which is the local var 'rock'
// var genre = 'r&b' || assigns the string r&b to var genre 
// console.log(genre)|| logs the value of genre which is the new local var r&b


// problem 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = 'san jose' || assigns the string san jose to dojo 
// console.log(dojo) || logs the the string sand jose which is the global var
// learn()|| fucnction cal that will log 'seattle' and 'burbank' 
// console.log(dojo)|| logs the san jose string which is the gloabl dojo 


// problem 8 



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
functioncopy makeDojo(name, students){
    let dojo = {}; // originally it had  const changing it to let will git rid of the arrow
    dojo.name = name; // assigns the name to the dictonary
    dojo.students = students; // assigns the students to the dictioanry students 
    if(dojo.students > 50){// if the dictionary students value is less than 50 hiring boolean becomes true 
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){ // else if the dict students is less than or eqaul to 0 log closed for now 
        dojo = "closed for now";
    }
    return dojo;
}

