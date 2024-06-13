const sumOfTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};

const findMaxNumber = (array: number[]): number => {
  let max = 0;
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
};

const reverseString = (str: string): string => {
  let reversStr = "";
  for (let index = str.length - 1; (index = 0); index--) {
    reversStr = reversStr + str[index];
  }
  return reversStr;
};

const isPalindrome = (strChar: string): boolean => {
  let reverse = "";

  for (let i = strChar.length - 1; i >= 0; i--) {
    reverse += strChar[i];
  }

  return strChar === reverse;
};

const filterEvenNumber = (arr: number[]): number[] => {
  // return arr.filter((ele: number) => ele % 2 === 0);

  const filterArray: number[] = [];

  arr.forEach((ele: number) => {
    if (ele % 2 === 0) {
      filterArray.push(ele);
    }
  });

  return filterArray;
};

const findFactorial = (num: number): number => {
  // const arr: number[] = [];
  // for (let index = 0; index < num; index++) {
  //   const value = index + 1;
  //   arr.push(value);
  // }

  // return arr.reduce((acc, curr) => {
  //   return acc * curr;
  // }, 1);

  let result: number = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

const isPrime = (num: number): boolean{
  if (num === 1) {
    return false;
  }
  for (let i: number = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

const findPrimeInRange = (start: number, end: number): number[] => {
  const primeNumbers: number[] = []
  start = Math.max(start, 2)

  for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break
      }
    }

    if (isPrime) {
      primeNumbers.push(i)
    }
  }
  return primeNumbers
}

const findCharacterCount = (str: string): {} => {
  let obj: { [keywj: string]: number, [key: number]: number } = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1
    }
    else {
      obj[str[i]] = 1
    }
  }
  return obj
}

const toTitleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const removeDuplicateElements = (arr: number[]): number[] => {

  const uniqueArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true

    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false;
        break
      }
    }
    if (isUnique) {
      uniqueArr.push(arr[i])
    }

  }
  return uniqueArr
}

const findUniqueElements = (arr: number[]): number[] => {
  const uniqueArr: number[] = [];

  let frequency: any = {}

  for (let i = 0; i < arr.length; i++) {

    if (frequency[arr[i]]) {
      console.log("cond1")
      frequency[arr[i]] = frequency[arr[i]] + 1
    }
    else {
      frequency[arr[i]] = 1
    }
  }
  for (let num of arr) {
    if (frequency[num] === 1) {
      uniqueArr.push(num)
    }
  }
  return uniqueArr
}

const findDuplicateElements = (arr: number[]): number[] => {

  const frequency: { [key: number]: number } = {};
  const duplicateArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    const property = arr[i];
    if (frequency[property]) {
      frequency[property] = frequency[property] + 1;
    }
    else {
      frequency[property] = 1
    }
  }

  for (const prop in frequency) {
    if (frequency[prop] > 1) {
      duplicateArr.push(Number(prop))
    }
  }
  return []
}

const filterUniquenElements = (arr: number[]): number[] => arr.filter((itm: number): boolean => arr.indexOf(itm) === arr.lastIndexOf(itm))

const filterDuplicateElements = (arr: number[]): number[] => {

  const result = arr.filter((itm: number): boolean => {
    return arr.indexOf(itm) !== arr.lastIndexOf(itm)
  })

  const set = new Set(result);
  return Array.from(set)

}

const data = [12, 45, 23, 51, 19, 8]

const sortAsc = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // console.log(i,j,"ij")
      console.log(i, j);

      // if (arr[j] > arr[j + 1]) {
      //   // Swap elements
      //   let temp = arr[j];
      //   arr[j] = arr[j + 1];
      //   arr[j + 1] = temp;


      // }
    }
  }
  return arr;
};

const selectionSort = (arr: number[]): number[] => {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)

  return arr
}

const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp

      }
    }
  }
  console.log(arr)
  return arr
}

const countElement=(arr:number[],element:number):number=>{
let count=0;
for(let i=0;i<arr.length;i++){
  let currentElement=arr[i];
  if(currentElement===element){
    count++;
  }
} 
 return count
}

const fizzBuzz=(num:number):string=>{
let str=""
  for(let i=1;i<=num;i++){
    if(i%3===0){
str+="Fizz "
    }
    if(i%5===0){
      str+="Buzz "
    }
    if(i%3===0&&i%5===0){
      str+="FizzBuzz "
    }
    if(i%3!==0&&i%5!==0){
      str+=`${i} `
    }
    
  }
  return str
}

const generateRandomString=(num:number):string=>{

  const characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  let str="";

  for(let i=0;i<=num;i++){
    const randomIndex = Math.floor(Math.random() * characters.length); 
    str=str+characters.charAt(randomIndex)
  }

  console.log(str)

  return str
}

const mergeAlternating=(arr1:number[], arr2:number[]):number[] =>{
    let minLength = Math.min(arr1.length, arr2.length);
    let mergedArray = [];

   
    for (let i = 0; i < minLength; i++) {
        mergedArray.push(arr1[i]);
        mergedArray.push(arr2[i]);
    }

    if (arr1.length > minLength) {
        mergedArray = mergedArray.concat(arr1.slice(minLength));
    }
    if (arr2.length > minLength) {
        mergedArray = mergedArray.concat(arr2.slice(minLength));
    }

    return mergedArray;
}

const findIndex=(arr:number[],element:number):number=>{
    for(let i=0;i<arr.length;i++){
        let currentElement=arr[i];
        if(element===currentElement){
            return i;
        }
    }
    return -1
}

