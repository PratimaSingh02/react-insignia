import React,{useState} from 'react'
import FeaturesCards from '../components/FeaturesCards'
import feature1 from '../assets/feature1.PNG'
import feature2 from '../assets/feature2.PNG'
import feature3 from '../assets/feature3.PNG'

function Features() {
const [radioBtn1,setRadioBtn1]=useState(true);
const [radioBtn2,setRadioBtn2]=useState(false);

const toggleBtn=()=>{
    setRadioBtn1(radioBtn2);
    setRadioBtn2(radioBtn1);
    if(radioBtn1){
        document.querySelector('.carousel').style.marginLeft='-50%';
    }
    else{
        document.querySelector('.carousel').style.marginLeft='0px';
    }
}

    return (
        <div className='features'>
        <h3>Features</h3>
        <div className='carousel'>
            <FeaturesCards src={feature1} h1='Search Data' p='Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.'/>
            <FeaturesCards src={feature2} h1='Print Out' p='Print out service gives you convenience if someday you need print data, just edit it all and just print it.'/>
            <FeaturesCards src={feature3} h1='Security Code' p='Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.'/>
        </div>
        <div className='navigation-manual'>
            <div className={radioBtn1?'manual-btn manual-active':'manual-btn'} onClick={toggleBtn}/>
            <div className={radioBtn2?'manual-btn manual-active':'manual-btn'}  onClick={toggleBtn}/>
        </div>
        </div>
    )
}


export default Features
