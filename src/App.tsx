import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex items-center justify-center  md:h-[58rem] h-[36rem]'>
      {/* h-screen  md:h-[58rem] h-[36rem]*/}
      <div id='outer-shell' className=" bg-outer-violet aspect-[282/570] rounded-[40%40%50%50%/3%3%9%8%] h-[95%] flex items-center justify-center">
        <div id='outer-shell2' className="bg-background h-[97.52%] w-[97.52%] rounded-[40%40%50%50%/3%3%9%8%]">
          <div id="top-text" className="bg-red-900 h-[13.52%] w-auto flex items-center justify-center flex-wrap text-center">
            <div>CASIO</div>
            <div className='w-1/6'></div>
            <div>fx-570ES PLUS</div>
            <div className='w-full'>NATURAL-V.P.A.M.</div>
          </div>
          <div id="display" className="bg-red-700 h-[19.75%] w-auto flex items-center justify-center">
            <div id='screen-border' className='bg-green-200 w-[86.76%] h-full rounded-[6%6%12%12%/10%10%15%15%] flex justify-center'>
              <div id="screen" className='bg-blue-200 w-[91.10%] h-[77.48%] rounded-[4%/10%] mt-[2.12%]'>
              </div>
            </div>

          </div>
          <div id="upper-button" className="bg-inner-gray h-[9.25%] w-auto flex justify-center items-center">
            <div className='w-[12.5%] h-[71.15%] flex justify-center content-between flex-wrap'>
              <div className='text-text-brown h-[29.73%] text-xs align-text-top'>Shift</div>
              <div className='bg-outer-violet w-full h-[70.27%]  rounded-[50%] rotate-[9deg] flex justify-center before:bg-inner-gray before:w-[80%] before:h-[123.08%] before:rounded-[50%] before:translate-y-[-9.38%] before:translate-x-[90%]'>
              </div>
            </div>



          </div>
          <div id="b" className="bg-red-200 h-[23.67%] w-auto shadow shadow-black opacity-100">

          </div>
          <div id="c" className="bg-blue-200 h-[33.81%] w-auto">

          </div>

        </div>
      </div>
















      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
