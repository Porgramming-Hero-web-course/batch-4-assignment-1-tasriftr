const getProperty = <T,K extends keyof T>(object: T, key:K): T[K]=>{
    return object[key];
}
const person = {name: 'tasrif', age:'28'}
console.log(getProperty(person, 'name'));