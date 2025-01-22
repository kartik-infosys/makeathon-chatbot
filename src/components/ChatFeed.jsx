import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useEffect, useState } from "react";
import ChatComponent from "./ChatComponent.jsx";
import { HomeComponent } from "./HomeComponent.jsx";

const ChatFeed = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        setChats([]);
    }, []);

    return (
        <>
            <div className={`${"chat-feed"} ${chats.length ? "container" : "d-flex justify-content-center align-items-center"}`}>
                {chats.length ? chats.map((chat) => <ChatComponent key={chat.id} chat={chat} />) : <h3>Hi User, how can I help you?</h3>}
            </div>
            <div id="input-box">
                <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-input-box"
                        type="text"
                        placeholder="Ask me anything"
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
            </div>
        </>
    )
}

export default HomeComponent(ChatFeed);