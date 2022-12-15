import React ,{useState} from 'react'
import copy from "copy-to-clipboard"; 

export default function TextForm(props){
    const [text,SetText] = useState('');
    const [copyText,SetCopyText] = useState({
        msg:"Copied!",
        // err_msg:"OOP's You have Selected Nothing"
    });
    const changeToUpper = ()=> SetText(text.toUpperCase());
    const changeToLower = ()=> SetText(text.toLowerCase());
    const onChangeHandler = (e)=> SetText(e.target.value);
    const changeToReverse = (e)=> {
        let removeSpace = text.trim();
        let reverseCharcter = '';
        for(let i=removeSpace.split(" ").length;i>=0;i--){
            if(removeSpace.split(" ")[i] !== undefined){
                for(let x=removeSpace.split(" ")[i].length;x>=0;x--){
                    if(removeSpace.split(" ")[i][x] !== undefined){ 
                        reverseCharcter += removeSpace.split(" ")[i][x];
                    }
            
                }
                reverseCharcter += " ";
            }
        }

         SetText(reverseCharcter);
    }
    const clearText = ()=> SetText('');
    const copyToClipboard = (e)=> { 
        if(text === ''){
             SetCopyText({
                msg:"OOP's You have Selected Nothing",
                alert_msg:"danger"
             })
        }else{
            SetCopyText({
                msg:"Copied!",
                alert_msg:"success"
             }) 
             e.target.focus();
             copy(text);
        }
        document.getElementById('popupModal').style.display = 'block';
        setTimeout(()=>{
            document.getElementById('popupModal').style.display = 'none';
        },1000);
    }

    const minToRead = ()=>{
        let min = 0.008 * text.length;
        let hours =  Math.floor(min/60);
        if(min > 0){
            min =    Math.floor(0.008 * text.length)% 60; 
        }else{
            min =   0.008 * text.length % 60;
        }
        return `${hours} Hours ${min}`
    }
    const removeExtraSpace = ()=>{
       let repText =  text.split(/[ ]+/);
       SetText(repText.join(" "));
    }
    return (
        <>
         <div className="container my-3">
                 <div style={{height:"50px"}} >
                    <div id="popupModal"  style={{display:"none",height:"50px"}} className={`alert alert-${copyText.alert_msg}`} role="alert">
                            <p>{copyText.msg}</p>
                    </div> 
                </div>
            <div style={{color:`${props.mode.textColor}`}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} id="formControlTextarea" rows="8"></textarea>
                </div>            
                <button disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} onClick={changeToUpper} >Upper Case</button>
                <button disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} onClick={changeToLower} >Lower Case</button>
                <button disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} onClick={changeToReverse} >Reverse</button>
                <button type="button" disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} data-toggle="modal" data-target="#popupModal" onClick={copyToClipboard} >Copy to Clipboard</button>
                <button disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} onClick={removeExtraSpace} >Remove Extra Spaces</button>
                <button disabled={text.length ===0} className={`btn btn btn-${(props.mode.colorValue === 'dark')?'danger':(props.mode.colorValue === 'blue')?'warning':(props.mode.colorValue === 'yellow')?'dark':'primary'} mx-2 my-2`} onClick={clearText} >Clear</button>
        
                <div className="container my-3">
                {text.split(/\s+/).filter((element)=> { return element.length !== 0}).length} Words {text.length} Charcater
                </div>
                <div className="container my-3">
                {minToRead()} Minutes Read
                </div>
                <div className="container my-3">
                    <h2>Preview</h2>
                    {(text.length>0)?text:'Nothing Preview!'} 
                </div>
            </div>
        </div>
       </>
    )
}