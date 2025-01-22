const ChatComponent = (props) => {
    const { question, answer } = props.chat;
    return (
        <div className="my-5 row w-100">
            <p className="d-flex justify-content-end"> <span className="chat-question ms-2">{question}</span></p>
            <p className="chat-answer"><img src="https://cdn-icons-png.flaticon.com/512/13330/13330989.png" alt="ai-icon" 
                height={25} width={25} /> <span>{answer}</span></p>
        </div>
    )
}

export default ChatComponent;