import classes from './Designer.module.css';

function SizeSelector(props) {
    
    function plusClickHandle(){
        props.onSelectedSizeChange(f => f + 2);
    }
    function minusClickHandle(){
        props.onSelectedSizeChange(f => f === 10 ? f : f - 2);
    }

    return (
        <div className={`${classes.SizeChange} ${classes.Selector}`}>
            <button className={classes.SizeChangeBtn} onClick={plusClickHandle}>+</button>
            <input type="number" 
            value={props.selectedSize} 
            className={classes.SizeChangeBtn}
            readOnly min="10"/>
            <button className={classes.SizeChangeBtn} onClick={minusClickHandle}>-</button>
        </div>
    )
}

export default SizeSelector