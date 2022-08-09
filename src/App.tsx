// import React from 'react';
import BottomButtons from "./components/bottomButtons";
import Display from "./components/display";
import MiddleButtons from "./components/middleButtons";
import TopText from "./components/topText";
import UpperButtons from "./components/upperButtons";

function App() {
  return (
    <div className='flex items-center justify-center md:h-[58rem] h-[36rem]'>
      {/* h-screen md:h-[58rem] h-[36rem]*/}
      <div id='outer-shell' className=" bg-outer-violet aspect-[282/570] rounded-[50%50%150%150%/20%20%30%30%] h-[95%] flex items-center justify-center">
        <div id='inner-shell' className="bg-inner-gray h-[97.52%] w-[97.52%] rounded-[50%50%150%150%/20%20%30%30%]">
          <TopText height="13.52%" brand="CASIO" model="fx-570ES PLUS" screenModel="NATURAL-V.P.A.M."/>
          <Display height="19.75%"/>
          <UpperButtons height="9.25%"/>
          <MiddleButtons height="23.67%"/>
          <BottomButtons height="28.11%"/>
          <div className='h-[5.7%] w-auto'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
