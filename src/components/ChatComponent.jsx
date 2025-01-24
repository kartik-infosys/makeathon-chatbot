const ChatComponent = (props) => {
    const { isLoading, parts, role } = props.chat;
    return (
        <div className="my-5 row w-100">
            {role === "model" ? <div className="chat-answer">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {JSON.stringify(parts[0].text).replace("```", "").replace("json", "").replace("```", "")}
                </pre>
            </div> : isLoading === 0 ? <p>Loading</p> :
                <div className="d-flex justify-content-end"> <p className="chat-question ms-2">{parts[0].text}</p></div>}
        </div>
    )
}

export default ChatComponent;