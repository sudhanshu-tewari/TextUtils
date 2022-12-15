import React ,{ useState } from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {

      const [mode,setMode] = useState({colorValue:'light',isChecked:false,textColor:'black'});

      const onOffColorSwitches = (e,flg,textColor='',bgColor)=> {
        let getSwithes = document.getElementsByClassName('form-check-input');
          if(e.target.checked){
          //  e.target.checked = true;
            let indexValue = parseInt(e.target.dataset.value);
            for (let index = 0; index < getSwithes.length; index++) {
                  if(indexValue !== index){
                    getSwithes[index].checked = false;
                  }
             }
             document.body.style.backgroundColor = bgColor;
             setMode({
              colorValue:e.target.value,
              isChecked:flg,
              textColor:textColor
            });
          }else{
            getSwithes[0].checked = true;
            document.body.style.backgroundColor = 'white';
            setMode({
              colorValue:'light',
              isChecked:flg,
              textColor:'black'
            });
           
          }
      }
      const changeColor = (e)=>{
          let txtColor = '';
          let bgColor = '';
          if(e.target.value === 'light'){
            bgColor = 'white';
            txtColor = 'black';
            onOffColorSwitches(e,true,txtColor,bgColor)
          }else if(e.target.value === 'yellow'){
              bgColor = e.target.value;
             txtColor = 'black';
             onOffColorSwitches(e,false,txtColor,bgColor)
          }
          else if(e.target.value === 'dark'){ 
            bgColor = 'black';
            txtColor = 'white';
            onOffColorSwitches(e,false,txtColor,bgColor)
          }
          else if(e.target.value === 'blue'){ 
            bgColor = e.target.value;
            txtColor = 'yellow';
            onOffColorSwitches(e,false,txtColor,bgColor)
          }
         
      }


  return (
    <Router>
        <>
        
            <Navbar titleText="TextUtils" aboutText='About' mode={mode} enableColor={changeColor}/>
            <Routes>
              <Route path='/' element={<TextForm heading="Enter the Text to Analyze Below" mode={mode}/>}/>
              <Route exact path='/about' element={ <About/>}/>
            </Routes>
         
        </>
        </Router>
     );
}

export default App;
