import React from 'react';

function MainMenu() {
    return (
        <div className="bg-customBlueLight rounded-xl flex justify-between items-center border-b-2 border-l-2 border-customBlueDark p-4 h-16">
            <div className="logo flex">
                {/* <img src="logoSmall.png" alt="logo" className="h-14 w-auto" /> */}
            </div>
            <div className="flex-grow flex justify-center space-x-20">
                <p className="text-xl text-customBlueDark hover:text-customWhiteOff">Resources</p>
                <p className="text-xl text-customBlueDark hover:text-customWhiteOff">About</p>
                <p className="text-xl text-customBlueDark hover:text-customWhiteOff">Contact</p>
            </div>
        </div>
    );
}
  

export { MainMenu };