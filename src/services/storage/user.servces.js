import { get, save } from "./context.services";



// creating variable for user api

// const url ="http://localhost:3002/user/";
const url ="http://localhost:3000/users/";

// function to get registered user data
export function getUser(){
    return get(url)
}

// export function to get user data

export function saveUser(data){
    return save(url,data);
}