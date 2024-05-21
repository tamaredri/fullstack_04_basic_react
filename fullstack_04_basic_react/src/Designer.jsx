import React from 'react';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import ItalicSelector from './ItalicSelector';

function Designer(props) {
   
    return (
        <div>
            <FontSelector 
            selectedFont={props.selectedFont} 
            onSelectedFontChange={props.onSelectedFontChange}
            />

            <ColorSelector 
            selectedColor={props.selectedColor}  
            onSelectedColorChange={props.onSelectedColorChange} 
            />
            
            <SizeSelector 
            selectedSize={props.selectedSize} 
            onSelectedSizeChange={props.onSelectedSizeChange} 
            />

            <ItalicSelector 
            isSelectedItalic={props.isSelectedItalic}
            onSelectedItalicChange={props.onSelectedItalicChange}
            />

        </div>
        
    )
}

export default Designer