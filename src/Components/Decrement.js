import { twoadd } from "../Redux/actions/twoAction"
import { twominus } from "../Redux/actions/twoAction"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { twoReducer } from "../Redux/Reducer/tworeducer"

const Decrement=()=>{
    const val=useSelector(state=>state.twoReducer)
    const dispatch=useDispatch()
    console.log(val)
    return <>
                <p class="mt-5 bg-[white] p-[20px] m-5">{val}</p><br/>
    <button onClick={()=>dispatch(twoadd())} class="px-[20px] py-[10px] my-[5px]  rounded-[5px] bg-[yellow] mx-[5px] hover:bg-[white] active:scale-[1.1]" >Increment</button>
    <button onClick={()=>dispatch(twominus())} class="px-[20px] py-[10px] my-[5px]  rounded-[5px] bg-[yellow] mx-[5px] hover:bg-[white] active:scale-[1.1]" >Decrement</button>
    </>
}

export default Decrement