import React, {FC} from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillGrid3X2GapFill } from "react-icons/bs";


const Sidebar: FC = () =>{
  return (
<div className='flex flex-col h-1/2 justify-between '>
    <div className="flex  justify-center ">
      <AiOutlineQuestionCircle color='gray' size={"24"} className="shadow-md" />
    </div>
    <div className="flex  justify-center transform rotate-90">
      <BsFillGrid3X2GapFill color="gray" size={"24"} />
    </div>
</div>
  )
}

export default Sidebar
