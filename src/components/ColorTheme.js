import React from 'react'

 function ColorTheme(props) {
    const colorThemeArr = ['Light','Dark','Blue','Yellow'];
  return (
   
    <div className="nav-item dropdown" >
    <a  style={{color:`${props.mode.textColor}`}} className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Enable Theme
    </a>
    <ul style={{backgroundColor:(props.mode.colorValue === 'dark')?'black':(props.mode.colorValue === 'light')?"white":`${props.mode.colorValue}`}} className="dropdown-menu" aria-labelledby="navbarDropdown">
          {
           
          colorThemeArr.map((color,key) => ( 
            <li key={key}>
             <div className="form-check form-switch mx-3">
          
               <input className="form-check-input" data-value= {key} value={color.toLowerCase()} onChange={props.changeColor} type="checkbox"/>
               <label style={{color:`${props.mode.textColor}`}} className="form-check-label">{color}</label>
             </div>
           </li>
           ))
           
          
          }

    </ul>
</div>

  )
}

export default ColorTheme