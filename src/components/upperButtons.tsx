type UpperButtonsProp = {
  height: string
}

function UpperButtons({height}: UpperButtonsProp) {
  return (
    <div id="upper-button" className={"w-auto flex justify-center items-center"} style={{height: height}}>
      <div className='w-[12.5%] h-[71.15%] flex justify-center flex-wrap'>
        <div className='text-text-brown h-[29.73%] text-xs'>Shift</div>
        <div className='bg-outer-violet w-full h-[70.27%] rounded-[50%] rotate-[9deg] flex justify-center before:bg-inner-gray before:w-[80%] before:h-[123.08%] before:rounded-[50%] before:translate-y-[-9.38%] before:translate-x-[90%]'>
        </div>
      </div>

      <div className='w-[12.5%] h-[71.15%] flex justify-center flex-wrap'>
        <div className='text-text-red h-[29.73%] text-xs '>Alpha</div>
        <div className='bg-outer-violet w-full h-[70.27%] rounded-[50%] rotate-[9deg] flex justify-center before:bg-inner-gray before:w-[80%] before:h-[123.08%] before:rounded-[50%] before:translate-y-[-9.38%] before:translate-x-[90%]'>
        </div>
      </div>

      <div className='w-[26.1%] h-full bg-outer-violet z-20 rounded-full text-center flex items-center justify-center text-button-color-black'>Replay</div>

      <div className='w-[12.5%] h-[71.15%] flex justify-center flex-wrap'>
        <div className='text-text-black w-[50%] h-[29.73%] text-[0.50rem] text-center '>Mode</div>
        <div className='text-text-brown w-[50%] h-[29.73%] text-[0.50rem] text-center '>Setup</div>
        <div className='z-10 bg-outer-violet w-full h-[70.27%] rounded-[50%] rotate-[-9deg] flex justify-center before:bg-inner-gray before:w-[80%] before:h-[123.08%] before:rounded-[50%] before:translate-y-[-9.38%] before:translate-x-[-90%]'>
        </div>
      </div>

      <div className='w-[12.5%] h-[71.15%] flex justify-center flex-wrap'>
        <div className='text-text-brown h-[29.73%] text-xs '>On</div>
        <div className='bg-outer-violet w-full h-[70.27%] rounded-[50%] rotate-[-9deg] flex justify-center before:bg-inner-gray before:w-[80%] before:h-[123.08%] before:rounded-[50%] before:translate-y-[-9.38%] before:translate-x-[-90%]'>
        </div>
      </div>

    </div>
  )
}
export default UpperButtons