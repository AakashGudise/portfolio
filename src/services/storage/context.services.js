import axios from "axios";


// get
export function get(url){
    return axios.get(url);

}


// save

export function save(url,data){
    return axios.post(url,data);
}

// update --->put/patch action verb

export function update(url,data){
    return axios.put(url+data.id,data);
}

// delete ---->delete action verb

export function deleteItem(url){
    return axios.delete(url);
}