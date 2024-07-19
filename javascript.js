//array slicing

function func() {
    let arr = [23, 56, 87, 32, 75, 13];
    let new_arr = arr.slice(2, 4);
    console.log(new_arr);
}
func();

//array flattening
const Arr = [[1,2],[3,4],[5,6]];

const newArr = Arr.flat();
console.log(newArr);


//Array destructing
let num= [25, 5 , 45, 100];
console.log(num[0]); 
console.log(num[3]);

//array joining and splitting
const fruits = ["Apple", "Mango"];
        let text = fruits.join(" and ");
        console.log(text);
        let text1 = "computer";
        console.log(text1.split(""));


   //array manipulation with slice()
function func() {
    let arr = [23, 56, 87, 32, 75, 13];
    let new_arr = arr.slice(2, 4);
    console.log(new_arr);
}
func();