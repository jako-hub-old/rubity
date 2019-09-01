import React from 'react';

/**
 * This component renders the songs list wrapper, you can add 
 * logic or components that you want.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default ({children}) => (
    <div className = "w-full flex justify-center">
        <div className = "px-16 w-full md:w-8/12">
            { children }
        </div>
    </div>
);