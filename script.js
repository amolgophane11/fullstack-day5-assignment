====================================
//sum of all numbers from array with annonymous function.

let array=[10,12,23,45,11,24,20]

let sumOfArrays=function(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
}

console.log(sumOfArrays(array));
output: 145

//sum of all numbers from array with IIFE

let array=[10,12,23,45,11,24,20]

let sumOfArrays=(function(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
})(array)

console.log(sumOfArrays);
//output: 145



=================================================

//odd nuber from given array with anonymous function

let array=[10,12,23,45,11,24,20]
let OddNumber =function(x) {
    let odd=[];
    for(let i=0;i<x.length;i++)
    {
        if(x[i]%2!==0)
        {
            odd.push(x[i]);
        }
    }
    return odd.join(',');;
}
console.log(OddNumber(array))

output:23,45,11

//odd nuber from given array with IIFE function

let array=[10,12,23,45,11,24,20]
let odd=(function(array){
    let odd1=[];
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                          odd1.push(array[i])
                        } 
                  }
                  return odd1
             })(array)
             
             console.log(odd.join(","))

output:23,45,11

============================
    

//prime numbers form array with anonymous function

let array=[10,12,23,45,11,24,20]
  let primeNumber=function(x) {
        let prime=[];
      for(let i=0;i<x.length;i++){
          let isprime=true;
        for (let j=2;j<x[i];j++)
      { //console.log(x[i])
        if(x[i]%j==0&&x[i]!=2)
        { 
            isprime=false;
          break;
        }
        //break;
     }
    if(isprime)
        {
             prime.push(x[i]);
            
        }}
  return prime;
}

console.log(primeNumber(array))

output=[ 23, 11 ]

//prime numbers form array with iife function


x=[10,12,23,45,11,24,20,2]
let primeNumber=(function(x) {
     let prime=[];
      for(let i=0;i<x.length;i++){
          let isprime=true;
        for (let j=2;j<x[i];j++)
      { //console.log(x[i])
        if(x[i]%j==0&&x[i]!=2)
        { 
            isprime=false;
          break;
        }
        //break;
     }
    if(isprime)
        {
             prime.push(x[i]);
            
        }}
  return prime;
})(x)



console.log(primeNumber)

output:[ 23,11 ]

=========================================================

//remove duplicate elements from the array with annonymous function

let array=[2,10,2,23,45,11,45,20]

var removeDuplicate=function(x)
{
    return x.filter((item,
        index) => x.indexOf(item) === index)
}

console.log(removeDuplicate(array));

//output: [ 2, 10, 23, 45, 11, 20 ]

//remove duplicate elements from the array with

let array=[2,10,2,23,45,11,45,20]

var removeDuplicate=(function(x)
{
    return x.filter((item,
        index) => x.indexOf(item) === index)
})(array)

console.log(removeDuplicate);

//output: [ 2, 10, 23, 45, 11, 20 ]


=========================================================

//to title caps from array with  anonymous function

let strAr=["guvi","is","good","for","education"]

 var titleCaps=function(str) {
  for (var i=0;i<str.length;i++) {
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  str = str.join(" ");
  return str;
}

console.log(titleCaps(strAr))

//output: Guvi Is Good For Education


//to title caps from array with IIFE

let strAr=["guvi","is","good","for","education"]

 var titleCaps=(function(str) {
  for (var i=0;i<str.length;i++) {
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  str = str.join(" ");
  return str;
})(strAr)

console.log(titleCaps)

//output:Guvi Is Good For Education


==============================================================================


//median of two sorted array of same size with anonymous functio
let arr1=[2,5,7,9];
let arr2=[1,3,4,8]
  
    let midianOfSortedArray=function(x,y)
    {  let arr=x.concat(y).sort();

        if(arr.length%2==0)
        {
            return(arr[arr.length/2-1]+arr[arr.length/2])/2
        }
    }
     console.log(midianOfSortedArray(arr1,arr2))

    // output: 4.5
    


//median of two sorted array of same size with anonymous function
let arr1=[2,5,7,9];
let arr2=[1,3,4,8]
  
    let midianOfSortedArray=(function(x,y)
    {  let arr=x.concat(y).sort();

        if(arr.length%2==0)
        {
            return(arr[arr.length/2-1]+arr[arr.length/2])/2
        }
    })(arr1,arr2)
     console.log(midianOfSortedArray)

    // output: 4.5

===========================================================

// array shifted by k times with annonymous function

let Array1 = [1, 2, 3, 4, 5];
//let k = 7;

let rightShiftedArray =function(Array,K)
{

let x=Array.splice(Array.length-K)

return x.concat(Array)
}

console.log(rightShiftedArray(Array1,7))

//output [ 4, 5, 1, 2, 3 ]//shifted by 7 //eventully only by 2 because array length is 5


//array shifted by k times with IIFE


let Array1 = [1, 2, 3, 4, 5];
//let k = 7;

let rightShiftedArray =(function(Array,K)
{

let x=Array.splice(Array.length-K)

return x.concat(Array)
})(Array1,7)

console.log(rightShiftedArray)

//output: [ 4, 5, 1, 2, 3 ]//shifted by 7 //eventully only by 2 because array length is 5


//====================================================

//all palindrome stings from array with annonymous function.

let array1=['NAYAN','AMOL','MALAYALAM','paper','ABCBA']

var palindrome=function(arr)
{  let arr1=[];
    for(let j=0;j<arr.length;j++)
    {
        let isPalndrome=true;
        for(let i=0;i<arr[j].length/2;i++)
          {
              if(arr[j].charAt(i)!=arr[j].charAt(arr[j].length-i-1))
              {
                  isPalndrome=false;
                  break;
              }
              
          }
          if(isPalndrome)
              {
                arr1.push(arr[j])
              }

      
    }
    return arr1;
    
}

console.log(palindrome(array1));

//output: [ 'NAYAN', 'MALAYALAM', 'ABCBA' ]

//all palindrome stings from array with IIFE

let array1=['NAYAN','AMOL','MALAYALAM','paper','ABCBA']

var palindrome=(function(arr)
{  let arr1=[];
    for(let j=0;j<arr.length;j++)
    {
        let isPalndrome=true;
        for(let i=0;i<arr[j].length/2;i++)
          {
              if(arr[j].charAt(i)!=arr[j].charAt(arr[j].length-i-1))
              {
                  isPalndrome=false;
                  break;
              }
              
          }
          if(isPalndrome)
              {
                arr1.push(arr[j])
              }

      
    }
    return arr1;
    
})(array1)

console.log(palindrome);

//output:[ 'NAYAN', 'MALAYALAM', 'ABCBA' ]

//===================================================================

question:2 use arrow function

usinf arrow function print odd number form array


let array=[10,12,23,45,11,24,20]
    let odd=(array)=>{
        let odd1=[];
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                          odd1.push(array[i])
                        } 
                  }
                  return odd1
             }
             
             console.log(odd(array).join(','))


   //output:23,45,11

//=================================
//to title caps from array with arrow function

let strAr=["guvi","is","good","for","education"]

 var titleCaps=(str)=> {
  for (var i=0;i<str.length;i++) {
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  str = str.join(" ");
  return str;
}

console.log(titleCaps(strAr))

//output:Guvi Is Good For Education
//======================================
//sum of all numbers from array with arrow function.

let array=[10,12,23,45,11,24,20]

let sumOfArrays=(x)=>{
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
}

console.log(sumOfArrays(array));

//output:145

//==================================================

//odd number from array with arrow function

let x=[10,12,23,45,11,24,20,2]
let primeNumber=(x)=> {
     let prime=[];
      for(let i=0;i<x.length;i++){
          let isprime=true;
        for (let j=2;j<x[i];j++)
      { //console.log(x[i])
        if(x[i]%j==0&&x[i]!=2)
        { 
            isprime=false;
          break;
        }
        //break;
     }
    if(isprime)
        {
             prime.push(x[i]);
            
        }}
  return prime;
}

console.log(primeNumber(x))

//output: [ 23, 11, 2 ]

//==================================
//all palindrome stings from array witharrow function.

let array1=['NAYAN','AMOL','MALAYALAM','paper','ABCBA']

var palindrome=(arr)=>
{  let arr1=[];
    for(let j=0;j<arr.length;j++)
    {
        let isPalndrome=true;
        for(let i=0;i<arr[j].length/2;i++)
          {
              if(arr[j].charAt(i)!=arr[j].charAt(arr[j].length-i-1))
              {
                  isPalndrome=false;
                  break;
              }
              
          }
          if(isPalndrome)
              {
                arr1.push(arr[j])
              }

      
    }
    return arr1;
    
}

console.log(palindrome(array1));

//output: [ 'NAYAN', 'MALAYALAM', 'ABCBA' ]




