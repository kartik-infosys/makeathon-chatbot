import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useEffect, useState } from "react";
import ChatComponent from "./ChatComponent.jsx";

import { GoogleGenerativeAI } from "@google/generative-ai";
// import { v4 as uuidv4 } from "uuid";

import { HomeComponent } from './HomeComponent.jsx';

import Skeleton from '@mui/material/Skeleton';

const key = "AIzaSyBHxz1-awqlPJnnb5QBxnCKR6npqhJEYjA";

// const genAI = new GoogleGenerativeAI(key);

const ChatFeed = () => {
    const [chats, setChats] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);


    async function handleSubmit(event) {
        event.preventDefault();

        // const his = history.map(({ role, textInput }) => ({ role, parts: [{ text: textInput }] }))

        // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // const chat = model.startChat({
        //     history: [],
        //     generationConfig: {
        //         maxOutputTokens: 500
        //     }
        // });

        setIsLoading(true);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    ...history,
                    {
                        parts: [
                            {
                                text: `${textInput} give answer only in JSON format without extra text and create ticket
                                     with only title, description, priority, status, openDate, closeDate (if closed)`
                            }
                        ],
                        role: "user"
                    }
                ]
            })
        }

        try {
            const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBHxz1-awqlPJnnb5QBxnCKR6npqhJEYjA",
                requestOptions
            )
            const data = await response.json();

            console.log(data.candidates[0].content);

            setHistory([
                ...history,
                {
                    parts: [
                        {
                            text: textInput
                        }
                    ],
                    role: "user"
                },
                data.candidates[0].content
            ])

            const newContent = [
                {
                    parts: [
                        {
                            text: `${textInput}`
                        }
                    ],
                    role: "user"
                },
                data.candidates[0].content
            ]

            setChats([...chats, ...newContent]);

            localStorage.setItem("chats", JSON.stringify([...chats, ...newContent]));
        } catch (error) {
            console.log(error);
        }

        // const result = await chat.sendMessage(textInput);

        //  

        // const textResult = result.response.text();

        // const currentChat = {
        //     id: uuidv4(),
        //     question: textInput,
        //     answer: textResult.replace("```", "").replace("json", "").replace("```", "")
        // };

        setIsLoading(false);

        const scrollHeight = document.querySelector(".chat-feed").scrollHeight;
        window.scrollTo(scrollHeight, scrollHeight);

        setTextInput("");

        // console.log("textResult", textResult)
        // const allChats = [...chats, currentChat];
        // localStorage.setItem("chats", JSON.stringify(allChats));
    }

    useEffect(() => {
        const chatsFromStorage = JSON.parse(localStorage.getItem("chats"));
        if (chatsFromStorage && chatsFromStorage.length) {
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
                                        type="submit"
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