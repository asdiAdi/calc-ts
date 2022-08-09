import React from "react";

type MiddleButtonsProp = {
    height: string
}

function MiddleButtons({height}: MiddleButtonsProp) {
    React.useEffect(()=>{
        if(document.getElementById('middle-button')) document.getElementById('middle-button')!.style.height = height;
    },[])
    return (
        <div id="middle-button" className={"h-["+ height +"] w-auto flex justify-center items-center"}>
            <div id='mid-grid' className='grid grid-cols-6 h-full w-[84.9265%] place-items-center text-center'>
                {/* 1st row */}
                {/* CALC */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;SOLVE </div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>=&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>CALC</div>
                </div>
                {/* Integral */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;d/dx </div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>:&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>
                        <div className='h-full flex justify-center text-base'>∫<div className='self-end text-sm'>□</div><div className='self-start text-sm leading-3'>□</div><div className='self-center text-sm'>▬</div></div>
                    </div>
                </div>
                {/* space */}
                <div className='col-span-2'></div>
                {/* X ^ -1 */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-full h-[30%] text-xs text-center'>x!</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>
                        <div className='h-full flex justify-center'>x<div className='text-sm leading-5'>&nbsp;-1</div></div>
                    </div>
                </div>
                {/* log a base b */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-full h-[30%] text-xs text-center'>Σ</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>
                        <div className='h-full flex justify-center text-center text-base'>log<div className='self-end text-xs'>■</div>▯</div>
                    </div>
                </div>
                {/* 2nd row */}
                {/* fraction */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-full h-[30%] text-xs text-center'>■/</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>/</div>
                </div>
                {/* square root */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-full h-[30%] text-xs text-center'>∛■</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>√■</div>
                </div>
                {/* exponent 2 */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;x^3</div>
                    <div className='text-text-green w-[50%] h-[30%] text-xs text-right'>DEC&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>
                        <div className='h-full flex justify-center text-center'>x <div className='leading-5 text-sm'>&nbsp;2</div></div>
                    </div>
                </div>
                {/* exponent */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;□√■</div>
                    <div className='text-text-green w-[50%] h-[30%] text-xs text-right'>HEX&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>
                        <div className='h-full flex justify-center text-center'>x <div className='leading-5 text-sm'>&nbsp;■</div></div>
                    </div>
                </div>
                {/* log10 */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;10■ </div>
                    <div className='text-text-green w-[50%] h-[30%] text-xs text-right'>BIN&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>log</div>
                </div>
                {/* natural logarithm */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;e■ </div>
                    <div className='text-text-green w-[50%] h-[30%] text-xs text-right'>OCT&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>ln</div>
                </div>
                {/* negative sign */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;∠</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>A&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>(−)</div>
                </div>
                {/* degree */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;←</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>B&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>°' ''</div>
                </div>
                {/* hyp */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;Abs</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>C&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>hyp</div>
                </div>
                {/* sin */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;sin^-1</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>D&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>sin</div>
                </div>
                {/* cos */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;cos^-1</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>E&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>cos</div>
                </div>
                {/* tan */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;tan^-1</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>F&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>tan</div>
                </div>
                {/* RCL */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-center'>STO</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>RCL</div>
                </div>
                {/* ENG */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;← </div>
                    <div className='text-violet-800 w-[50%] h-[30%] text-xs text-right'>i&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>ENG</div>
                </div>
                {/* Open parenthesis */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-center'>%</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>(</div>
                </div>
                {/* Closed Parenthesis */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;,</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>X&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>)</div>
                </div>
                {/* Transform */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;a⇔b</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>Y&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>S⇔D</div>
                </div>
                {/* Memoplusgold */}
                <div className='w-[90.9091%] h-[90.2256%] flex justify-center flex-wrap'>
                    <div className='text-text-brown w-[50%] h-[30%] text-xs text-left'>&nbsp;M-</div>
                    <div className='text-text-red w-[50%] h-[30%] text-xs text-right'>M&nbsp;</div>
                    <div className='bg-button-color-black w-full h-[70%] rounded-[17%17%35%35%/25%25%45%45%] text-button-color-white text-xl'>M+</div>
                </div>

            </div>
        </div>
    )
}
export default MiddleButtons