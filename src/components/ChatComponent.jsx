const ChatComponent = (props) => {
    const { question, answer, isLoading } = props.chat;
    return (
        <div className="my-5 row w-100">
            {isLoading === 0 ? <p>Loading</p> :
                <div className="d-flex justify-content-end"> <p className="chat-question ms-2">{question}</p></div>}
            <div className="chat-answer">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {JSON.stringify(JSON.parse(answer), null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default ChatComponent;