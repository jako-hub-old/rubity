import React from 'react';
import Navigation from '../../core/Navigation'

/**
 * This component allows you to add general behaviour or common components for
 * the entire application.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default () => (
    <div className = "flex justify-center w-full items-start main-layout">
        { /* If you want to add a general behaviour or styles write it here */ }
        <Navigation 
        />
    </div>
);