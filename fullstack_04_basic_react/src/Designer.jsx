import React from 'react';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';

function Designer(props) {
   
    return (
        <div>
            <FontSelector selectedFont={props.selectedFont} onSelectedFontChange={props.onSelectedFontChange}/>
            <ColorSelector selectedColor={props.selectedColor}  onSelectedColorChange={props.onSelectedColorChange} />

            {/* <SizeSelector>
            </SizeSelector> */}

        </div>
        
    )
}

export default Designer