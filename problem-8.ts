const validateKeys = <T>(object: T, keys: (keyof T)[]): boolean => {
        for (let key of keys) {
            if(!(key in object)) return false;
        }
        return true;
    }
    
    const person = {name: 'tasrif', age:'28', home: 'dhaka'};
    console.log(validateKeys(person, ['name', 'phone']));
    console.log(validateKeys(person, ['name', 'age']));
