import React from 'react';

export default ({children}) => (
    <div className = "w-full flex justify-center">
        <div className = "px-16 w-full md:w-8/12">
            { children }
        </div>
    </div>
);