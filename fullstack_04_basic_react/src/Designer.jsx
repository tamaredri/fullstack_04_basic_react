import React from 'react';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import BoldSelector from './BoldSelector';
import ItalicSelector from './ItalicSelector';
import UnderlineSelector from './UnderlineSelector';
import classes from './Designer.module.css';

function Designer(props) {
   
    return (
        <div className={classes.Designer}>
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

            <UnderlineSelector
            isUnderline={props.isUnderlineSelected}
            onSelectedUnderlineChange={props.onSelectedUnderlineChange}         
            />
        </div>
        
    )
}

export default Designer