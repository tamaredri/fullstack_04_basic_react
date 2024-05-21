import React from 'react';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import BoldSelector from './BoldSelector';
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

            <BoldSelector
            isBold={props.isBold}
            onBoldChange={props.onBoldChange}
            />
            
            <ItalicSelector 
            isItalic={props.isSelectedItalic}
            onSelectedItalicChange={props.onSelectedItalicChange}
            />
        </div>
        
    )
}

export default Designer