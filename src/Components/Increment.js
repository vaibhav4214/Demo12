import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { oneadd } from "../Redux/actions/oneAction"
import { oneminus } from "../Redux/actions/oneAction"

const Increment=()=>{
    const val=useSelector(state=>state.oneReducer)
    const dispatch=useDispatch()
   
    return <>  <p class="mt-5 bg-[white] p-[20px] m-5">{val}</p><br></br>
    <button onClick={()=>dispatch(oneadd())}  class="px-[20px] py-[10px] my-[5px]  rounded-[5px] bg-[blue] mx-[5px] hover:bg-[white] active:scale-[1.1]" >Increment</button>
    <button onClick={()=>dispatch(oneminus())} class="px-[20px] py-[10px] my-[5px]  rounded-[5px] bg-[yellow] mx-[5px] hover:bg-[white] active:scale-[1.1]" >Decrement</button>
    </>
}

export default Increment