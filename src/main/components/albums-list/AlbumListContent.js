import React from 'react';

/**
 * This component renders the list wrapper, any common style or logic
 * to hide the children can be applied here.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default ({children}) => (
    <div className = "w-full flex justify-start flex-wrap">
        { children }
    </div>
);