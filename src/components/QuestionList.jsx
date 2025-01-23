import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";

const QuestionList = ({ handleRouteChange }) => {
    const [questions] = useState([]);

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