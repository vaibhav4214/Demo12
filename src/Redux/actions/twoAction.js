import {  twoincrement } from "../constatnt";
import { twodecrement } from "../constatnt";

export const twoadd=()=>
{
    return {
        type:twoincrement
    }
}

export const twominus=()=>
{

    return{
        type:twodecrement
    }
}