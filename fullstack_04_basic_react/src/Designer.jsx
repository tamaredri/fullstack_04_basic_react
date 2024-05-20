import React from 'react';
import SizeSelector from './SizeSelector';

function Designer(props) {
   
    return (
        <div>
            {/* <FontSelector selectedFont={props.selectedFont} onSelectedFontChange={props.onSelectedFontChange} /> */}
            <SizeSelector selectedSize={props.selectedSize} onSelectedSizeChange={props.onSelectedSizeChange} />
            {/* <ColorSelector>
            </ColorSelector>*/}

        </div>
        
    )
}

export default Designer