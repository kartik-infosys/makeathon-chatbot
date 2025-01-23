import LinearProgress from '@mui/material/LinearProgress';

const ChatComponent = (props) => {
    const { question, answer, isLoading } = props.chat;
    return (
        <div className="my-5 row w-100">
            {isLoading === 0 ? <p>Loading</p> : 
            <div className="d-flex justify-content-end"> <p className="chat-question ms-2">{question}</p></div>}
            <div className="chat-answer">
                <img src="https://cdn-icons-png.flaticon.com/512/13330/13330989.png" alt="ai-icon" 
                height={25} width={25} /> <span>{answer}</span>
            </div>
        </div>
    )
}

export default ChatComponent;