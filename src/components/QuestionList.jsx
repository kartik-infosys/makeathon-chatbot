import { useEffect, useState } from "react";

import Tooltip from '@mui/material/Tooltip';

const QuestionList = ({ handleRouteChange }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions([
            {
                id: 1,
                question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
            },
            {
                id: 2,
                question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
            },
            {
                id: 3,
                question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
            },
        ]);
    }, [])
    return (
        <div className="question-list">
            {questions.map(({id, question}) => {
                return (
                    <Tooltip title={question} key={id}>
                        <p onClick={() => handleRouteChange(id)}>{question}</p>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default QuestionList;