import React,{useState} from 'react'
import data from '../data'
import TestimonialsCards from '../components/TestimonialsCards';

function Testimonials() {
const [radioBtn,setRadioBtn]=useState(1);
const [people,setPeople]=useState(data);

const handleToggle=(e)=>{
    setRadioBtn(parseInt(e.target.id))
     if(e.target.id==='1')
        document.querySelector('.test-carousel').style.marginLeft='0px';
    else if(e.target.id==='2')
        document.querySelector('.test-carousel').style.marginLeft='-25%';
    else if(e.target.id==='3')
         document.querySelector('.test-carousel').style.marginLeft='-50%';
    else if(e.target.id==='4')
         document.querySelector('.test-carousel').style.marginLeft='-75%';
     
}

    return (
        <div className='features'>
            <h3>Testimonials</h3>
            <div className='test-carousel'>  
                {people.map(person=>{
                    return  <TestimonialsCards key={person.id} src={person.image} name={person.name} title={person.title} info={person.info}/>
                })}
            </div>
            <div className='navigation-manual'>
                <div id='1'className={radioBtn===1?'manual-btn manual-active':'manual-btn'} onClick={(e)=>handleToggle(e)}/>
                <div id='2' className={radioBtn===2?'manual-btn manual-active':'manual-btn'} onClick={(e)=>handleToggle(e)}/>
                <div id='3' className={radioBtn===3?'manual-btn manual-active':'manual-btn'} onClick={(e)=>handleToggle(e)}/>
                <div id='4' className={radioBtn===4?'manual-btn manual-active':'manual-btn'}  onClick={(e)=>handleToggle(e)}/>
            </div>
        </div>
    )
}

export default Testimonials
