import { onedecrement } from "../constatnt"
import { onceincrement } from "../constatnt"

const oneValue=0


export const oneReducer=(state=oneValue,action)=>
{ 
    switch(action.type)
    {  
        case onceincrement:
            console.log("011")
            return ++state
        case onedecrement:
            console.log("023011")
            return --state
        default:return state
    }
}