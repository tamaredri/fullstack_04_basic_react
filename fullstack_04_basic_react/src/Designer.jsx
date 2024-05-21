import React from 'react';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import BoldSelector from './BoldSelector';

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

            <BoldSelector
             isBold={props.isBold}
             onBoldChange={props.onBoldChange}
            />

        </div>
        
    )
}

export default Designer