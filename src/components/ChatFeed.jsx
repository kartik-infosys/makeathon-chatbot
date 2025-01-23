import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useState } from "react";
import ChatComponent from "./ChatComponent.jsx";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from "uuid";
import parse from 'html-react-parser';


import Skeleton from '@mui/material/Skeleton';

const key = "AIzaSyBHxz1-awqlPJnnb5QBxnCKR6npqhJEYjA";

const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ChatFeed = () => {
    const [chats, setChats] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();


        setIsLoading(true);

        const result = await model.generateContent(textInput);
        const textResult = parse(formatText(result.response.text()));

        const currentChat = {
            id: uuidv4(),
            question: textInput,
            answer: textResult
        };

        setIsLoading(false);

        const scrollHeight = document.querySelector(".chat-feed").scrollHeight;
        window.scrollTo(scrollHeight, scrollHeight);
        
        setChats([...chats, currentChat]);
        setTextInput("");
    }

    function formatText(text) {
        let formattedText = text.replace(/# (.*?)\n/g, '<h1>$1</h1>'); // h1 headers
        formattedText = formattedText.replace(/## (.*?)\n/g, '<h2>$1</h2>'); // h2 headers

        // Bullet points
        formattedText = formattedText.replace(/\* (.*?)\n/g, '<ul><li>$1</li></ul>');

        // Paragraph
        formattedText = formattedText.replace(/([^\n#\*][^\n]*)\n/g, '<p>$1</p>');

        // Bold
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        return formattedText;
    }

    function handleKeyUp(event) {
        const { value } = event.target;
        setTextInput(value);
    }

    return (
        <>
            <div className={`${"chat-feed"} ${chats.length ? "container" : "d-flex justify-content-center align-items-center"}`}>
                {chats.length ? chats.map((chat) => <ChatComponent key={chat.id} chat={chat} isLoading={isLoading} />) : <h3>Hi User, how can I help you?</h3>}
                {isLoading ? <div className="d-flex justify-content-center">
                    <Skeleton variant="rectangular" width={"100%"} height={60} />
                </div> : <></>}
            </div>
            <div id="input-box" onSubmit={(e) => handleSubmit(e)}>
                <form autoComplete="off">
                    <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-input-box"
                            type="text"
                            placeholder="Ask me anything"
                            value={textInput}
                            onChange={(e) => handleKeyUp(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <ArrowUpwardIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </form>
            </div>
        </>
    )
}

export default ChatFeed;