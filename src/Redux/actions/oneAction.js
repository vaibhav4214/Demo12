import { onedecrement } from "../constatnt";
import { onceincrement } from "../constatnt";

export const oneadd=()=>
{
    return {
        type:onceincrement
    }
}
{}

export const oneminus=()=>
{

    return{
        type:onedecrement
    }
}