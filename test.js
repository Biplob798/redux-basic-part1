// const array = ['a', 'b', 'c']
// console.log(array);
// // array.push('d')
// const array2=[...array,'d']
// console.log(array2);
// array.pop()
// const array3=array.filter(item=>item!=='a')
// console.log(array3);
// console.log(array);

// Function currying
const add = (a) => {
    return (b) => {
        return (c) => {
            // return a + b + c;
            return a + (b * c);
        }
    }
}
const level = add(1);
console.log(level(2)(2));
console.log(level(3)(2));
console.log(level(5)(7));
console.log(level(9)(4));

