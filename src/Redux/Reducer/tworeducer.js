import { twodecrement } from "../constatnt"
import { twoincrement } from "../constatnt"

const twoValue=0


export const twoReducer=(state=twoValue,action)=>
{ 
    switch(action.type)
    {  
        
        case twoincrement:
            console.log("011")
            return ++state
        case twodecrement:
            console.log("023011")
            return --state
        default:return state
    }
}