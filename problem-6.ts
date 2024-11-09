interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updates: Partial<Profile>) : Profile => {
    return {...profile, ...updates}
}
const myProfile = {name: 'tasrif', age: 28, email: 'tasriffahim@gmail.com'}
console.log(updateProfile(myProfile, {age: 29}))