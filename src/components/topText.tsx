// prop: {brand: string, model: string, screenModel: string, children:any}
type TopTextProp = {
    height: string,
    brand: string, 
    model: string, 
    screenModel: string
    children ?: any
}

function TopText({height, brand, model, screenModel, children }: TopTextProp) {
    return (
        <div id="top-text" className={"w-auto flex items-center justify-center flex-wrap text-center"} style={{height: height}}>
            <div>{brand}</div>
            <div className='w-1/6'></div>
            <div>{model}</div>
            <div className='w-full'>{screenModel}</div>
            {children}
        </div>
    )
}
export default TopText