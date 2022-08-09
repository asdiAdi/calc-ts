import React from "react";
type DisplayProp = {
    height: string
}

function Display({height}: DisplayProp) {
    // React.useEffect(()=>{
    //     if(document.getElementById('display')) document.getElementById('display')!.style.height = height;
    // },[])
    return (
        <div id="display" className={"w-auto flex items-center justify-center"} style={{height: height}}>
            <div id='screen-border' className='bg-display-gray w-[86.76%] h-full rounded-[6%6%12%12%/10%10%15%15%] flex justify-center'>
              <div id="screen" className='bg-display-inner w-[91.10%] h-[77.48%] rounded-[4%/10%] mt-[2.12%]'>
              </div>
            </div>
        </div>
    )
}
export default Display