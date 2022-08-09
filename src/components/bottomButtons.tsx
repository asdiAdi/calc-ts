type BottomButtonsProp = {
    height: string
}

function BottomButtons({height}: BottomButtonsProp) {
 
    return (
        <div id="bottom-button" className={"w-auto flex justify-center items-center"} style={{height: height}}>
            <div id='mid-grid' className='grid grid-cols-5 h-full w-[84.9265%] place-items-center text-center text-button-color-text-black text-3xl'>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>CONST</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>7</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>CONV</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>8</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>CLR</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>9</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>INS</div>
                    <div className='bg-button-color-orange w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold text-2xl'>DEL</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>OFF</div>
                    <div className='bg-button-color-orange w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold text-2xl'>AC</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>MATRIX</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>4</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'>VECTOR</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>5</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs'></div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>6</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>nPr</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>X</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>nCr</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>÷</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>STAT</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>1</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>COMPLX</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>2</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>BASE</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>3</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>Pol</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>+</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>Rec</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>-</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>Rnd</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>0</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs text-left'>&nbsp;Ran#</div>
                    <div className='text-text-red w-[50%] h-[27.5%] text-xs text-right'>RanInt&nbsp;</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>.</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs text-left'>&nbsp;π</div>
                    <div className='text-text-red w-[50%] h-[27.5%] text-xs text-right'>e&nbsp;</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold text-2xl'>
                        <div className='h-full flex justify-center'>x10<div className='self-start text-sm leading-3'>x</div></div>
                    </div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '>DRG►</div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold text-2xl'>Ans</div>
                </div>
                <div className='w-[90.9091%] h-full flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[27.5%] text-xs '></div>
                    <div className='bg-button-color-white w-full h-[72.5%] rounded-[15%15%40%40%/20%20%60%60%] font-semibold'>=</div>
                </div>
            </div>
        </div>
    )
}
export default BottomButtons