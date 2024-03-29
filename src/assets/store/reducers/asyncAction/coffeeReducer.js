import axios from "axios"

export const getCoffee=()=>{
    return async (dispatch)=>{
try {
    const {data}=await axios('https://api.sampleapis.com/coffee/hot')
} catch(err){
    console.log(err);
}
    }
    
}
const addCoffeePending=()=>{
    return {
        type:'ADD_COFFEE_PENDING'
    }
}
const addCoffeeSuccess =(data) =>({
    type: "ADD_COFFE_SUCCESS",
    payload:data,
});
const addCoffeeError =(err) => ({type:"ADD_COFFEE_ERROR", payload:data})