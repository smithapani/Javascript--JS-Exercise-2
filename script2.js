/*1
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.
Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ 
and​ ​last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.


let num = +prompt("enter first number of elements : ",'');
const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
if(num <= FRUITS.length){
    var citrus = FRUITS. slice(0, num);
    alert(citrus);
}
else if(num > FRUITS.length){
    alert(FRUITS);
}
else{
    alert('');
}

let n = Number(prompt("enter last number of elements : ",''));
const FRUITSS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

if(n == 1){
    var last = FRUITSS[FRUITSS.length - 1]
    alert(last);
}

else{
    var citruss = FRUITSS.slice(FRUITSS.length,-n);
    alert(citruss);
}
*/




//-------------------------------------------------------------------------



/*2
Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​​ as​ ​ input​ ​ and​ ​ insert​ ​ 
dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.


const num=+prompt("Enter the number",'');
const str = num.toString();
const result = [];
  
for(let x=0; x<str.length; x++)
  {
    if((str[x]%2 === 0)&&(str[x+1]%2 === 0))
     {
      result.push(str[x],'-');
     }
    else
     {
      result.push(str[x]);
     }
  }
alert(result.join(''));
*/





//-------------------------------------------------------------------------





/*3
Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.

let array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
var count = 1;
var m = 0;
var item;
for (var i=0; i<array.length; i++)
{
    for (var j=i; j<array.length; j++)
    {
        if (array[i] == array[j])
            m++;
            if (count<m)
            {
                count=m; 
                item = array[i];
            }
        }
    m=0;
}
alert(item+" ( " +count +" times ) ") ;

*/





//-------------------------------------------------------------------------





/*4
Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​array.


function shuffle(arr) {
    var len = arr.length;
    var temp, index;

    while (len > 0) {

        index = Math.floor(Math.random() * len);
        len--;

        temp = arr[len];
        arr[len] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
var arr= [0, 1, 2, 3, 4, 5, 6, 7, 9];
alert(shuffle(arr));





//-------------------------------------------------------------------------






*/

/*5
Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript 
 function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.



let arr1 = [0,1,2];
let arr2 = [2,3,4];

alert("union : " +[...new Set(arr1.concat(arr2))]);
alert("diff 1-2 : "+ arr1.filter(i => !arr2.includes(i)));
alert("diff 2-1 : "+ arr2.filter(i => !arr1.includes(i)));
alert("intersec : "+ arr1.filter(x => arr2.includes(x)));

*/






//-------------------------------------------------------------------------






/*6
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.


let arr = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
function num_string(start,end,n){
    let answer = [];
    let t1 = arr.indexOf(start);
    let t2 = arr.indexOf(end);
    for(let i=t1;i<t2;++i){
        answer.push(arr[i]);
    }
    return answer;
}
while(true){
    n = +prompt("enter number",2);
    if(isFinite(n) && n>0){
        alert(num_string('a','z',n));
        break;
    }
}
*/



//-------------------------------------------------------------------------




/*7
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ from​ ​ a ​ ​ particular​ ​ date.


function monthname(dt){
    monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthlist[dt.getMonth()];
}
alert(monthname(new Date("08/01/2020")));
*/



//-------------------------------------------------------------------------




/*8
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.


var today = new Date(01,07,2018)
var past = new Date(03,05,2020) 

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message
    }

var ans = calcDate(today,past)
alert(ans);
*/






//-------------------------------------------------------------------------






/*9
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.



function Unix_timestamp(t)
{
    var dt = new Date(t*1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return dt + ':' + hr + ':' + m + ':' + s;  
}

alert(Unix_timestamp(1607518718));
*/





//-------------------------------------------------------------------------






/*10
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.


let d1 = new Date(01,07,2018).getTime();
let d2 = new Date(03,05,2020).getTime();

alert(weeksDiff(d1,d2));

function secondsDiff(d1, d2) {
    let millisecondDiff = d2 - d1;
    let secDiff = Math.floor( ( d2 - d1) / 1000 );
    return secDiff;
 }

 function minutesDiff(d1, d2) {
    let seconds = secondsDiff(d1, d2);
    let minutesDiff = Math.floor( seconds / 60 );
    return minutesDiff;
}

function hoursDiff(d1, d2) {
    let minutes = minutesDiff(d1, d2);
    let hoursDiff = Math.floor( minutes / 60 );
    return hoursDiff;
 }
 function daysDiff(d1, d2) {
    let hours = hoursDiff(d1, d2);
    let daysDiff = Math.floor( hours / 24 );
    return daysDiff;
 }

 function weeksDiff(d1, d2) {
    let days = daysDiff(d1, d2);
    let weeksDiff = Math.floor( days/ 7 );
    return weeksDiff;
 }
 

 function yearsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}

function monthsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let years = yearsDiff(d1, d2);
    let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;
    return months;
  }

  alert(monthsDiff(d1,d2));
  */





  //-------------------------------------------------------------------------







/*11
 Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).


  let str = "This is a sample string";
  let pos = 3;
  let insertstr = "Insert me";

  function insert(str,pos,insertstr){
      return str.slice(0,pos-1) + insertstr + str.slice(pos);
  }
  alert(insert(str,pos,insertstr));
*/





//-------------------------------------------------------------------------





/*12
Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.


function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = [];
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
  
    return chunks
  }
  alert(chunkSubstr('RapidO',2));
*/





//-------------------------------------------------------------------------





/*13
 Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.


let input="1023165454197";
const pos=3;
let out=[];

for (let i=input.length-4;i>=0;i-=3)
{
    out.push(i) 
}
alert(out);
for (let i=0;i<out.length;i++)
{
        input=input.slice(0,out[i]+1)+","+input.slice(out[i]+1);
}
alert(input);
*/




//-------------------------------------------------------------------------




/*14
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:


  let array=[{ id:1 ,name: "smit", age: 21 },
         { id:2 ,name: "keval", age: 22 },
         { id:3 ,name: "manish", age: 23 }]
        
  array.sort( Age);
  console.log(array);

  console.log("-----------------");

  let array1=[{ id:1 ,name: "smit", age: 21 },
         { id:2 ,name: "keval", age: 22 },
         { id:3 ,name: "manish", age: 23 }]

  array1.sort( Name);
  console.log(array1);

 function Age( a, b ) {
    if ( a.age < b.age ){
      return -1;
    }
    if ( a.age> b.age ){
      return 1;
    }
    return 0;
  }

  function Name( a, b ) {
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name< b.name ){
      return 1;
    }
    return 0;
  }

*/





//-------------------------------------------------------------------------





/*15
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.


let action;
while(true)
    {
        action=+prompt("please enter 1 for delete and 2 for insert","1");
        if(action==1 || action== 2)
        {
            break;
        }
    }
    let pos=+prompt("please enter position of delete or insert","1");

    array = [  {name:  "smit" , age : 21}, 
               {name:  "manish" , age : 22},  
               {name:  "keval" , age : 23} ];

    if(action==1)
    {
        if(pos < array.length && pos >=0)
        {
            array.splice(pos,1)
            console.log("element deleted");
            console.log(array);
        
        }
        else{
            console.log("please enter valid position");
        }
    }
    else{
        if(pos <= array.length && pos >=0)
        {
            let name=prompt("please enter name","");
            let age=+prompt("please enter age","");
            let user={
                name:name,
                age:age,
            }
            array.splice(pos,0,user);
            console.log("element inserted");
            console.log(array);
        }
        else{
            console.log("please enter valid position");
        }
    }
    */