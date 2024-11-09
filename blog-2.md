How to handle asynchronous operations using async/await over callback/promise TypeScript

Over last decades there was a wide range of usage of callback/promise. As applications are getting more complex day by day people are trying to find out the way to optimize the code on every aspect.As a result in modern programming async/await replaced old fashioned callback/promise.

I case of callback/promise we use to write our code with .then....then

fetch(url) .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

Now in case of async/await we use the try catch block to get the things done

async function fetchData() { try { const response = await fetch(url); const data = await response.json(); console.log(data); } catch (error) { console.error(error); } }

There are multiple benefits of using async/await over callback/promise such as Improved Readability, Better Error Handling and Type safety. Code with async/await is maintainable asynchronous code.
