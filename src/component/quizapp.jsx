import React from 'react'

import { useState } from 'react';

import '../App.css';

const QuizApp = () => {

const [index, setIndex] =useState(0)
const [score, setScore] =useState(0)
const [scoreDisplay, setScoreDisplay] =useState(false)
const [quizQuestions,setQuizQuestions] = useState([
        {
            question:"meter is the unit of  ____________",
            options:["Distance","time","mass","light"],
            correctOption:["Distance"]
        },
         {
            question:"Second is the Unit Of ____________",
            options:["Distance","time","mass","light"],
            correctOption:["time"]
        },
        {
            question:"kg is the unit of ____________",
            options:["Distance","time","mass","light"],
            correctOption:["mass"]
        },
        {
            question:"Candle is the unit of ____________",
            options:["Distance","time","mass","light"],
            correctOption:["light"]
        },
        {
            question:"who is the foreign minister of PAKISTAN",
            options:["shah Mehmood","Bilawal Bhutto","Aitazaz Hussain","Ali Bakir"],
            correctOption:["Bilawal Bhutto"]
        }
    ])



const options = (item,index) => {
        return quizQuestions[index].options.map(item => <div key={item} className='mt-5'><button className='btn btn-outline-success btn-lg' style={{width:"250px"}} onClick ={() => {indexIncrement(item)}} >{item}</button></div>)
}

const indexIncrement = (item) => {
    let indexIncrementSpread = index;
    indexIncrementSpread++;
    if(item == quizQuestions[index].correctOption){
        setScore(score + 1)
    }
    if(indexIncrementSpread < quizQuestions.length )
    { 
        setIndex(indexIncrementSpread)
    }
    else{
        setScoreDisplay(true)
    }
}


 const length = quizQuestions.length;
  return (
    <section > 
        <div className="container  ">
            <div className={(!scoreDisplay) ? "my-1 w-50  m-auto  bdyColor text-white rounded  bdposition " : "disaplyNone "}  style = {{height:"84vh"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{height:"40vh"}}>
                            <h3>Question {index+1}/{length}</h3>
                            <p>{quizQuestions[index].question}</p> 
                            </div>
                        </div>
                        <div className="col-md-12">
                            {options(quizQuestions,index)}    
                        </div>
                    </div>

    
                  
            </div>
        {scoreDisplay && <div className='marginTop' ><h1 className='text-dark'>Your Score is {score} </h1></div>} 
        </div>
    </section> 
  )
}

export default QuizApp;
