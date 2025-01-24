import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useEffect, useState } from "react";
import ChatComponent from "./ChatComponent.jsx";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from "uuid";

import { HomeComponent } from './HomeComponent.jsx';

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

        const result = await model.generateContent(`${textInput} give answer only in JSON without extra text 
            and create ticket with only title, description, priority, status, openDate, closeDate (if closed)`);
        const textResult = result.response.text();

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

        const allChats = [...chats, currentChat];
        localStorage.setItem("chats", JSON.stringify(allChats));
    }

    useEffect(() => {
        const chatsFromStorage = JSON.parse(localStorage.getItem("chats"));
        if(chatsFromStorage && chatsFromStorage.length) {
            setChats(chatsFromStorage);
        }
    }, []);

    function handleKeyUp(event) {
        const { value } = event.target;
        setTextInput(value);
    }

    return (
        <>
            <div className={`${"chat-feed"} ${chats && chats.length ? "container" : "d-flex justify-content-center align-items-center"}`}>
                {chats && chats.length ? chats.map((chat) => <ChatComponent key={chat.id} chat={chat} isLoading={isLoading} />) : <h3>Hi User, how can I help you?</h3>}
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
                        />
                    </FormControl>
                </form>
            </div>
        </>
    )
}

export default HomeComponent(ChatFeed);