import { useState } from "react";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import Tooltip from "@mui/material/Tooltip";
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ListItemIcon from '@mui/material/ListItemIcon';

// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const key = "AIzaSyBHxz1-awqlPJnnb5QBxnCKR6npqhJEYjA";

// const genAI = new GoogleGenerativeAI(key);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const HomeComponent = WrappedComponent => {
    function ComponentWithState() {

        // const [open, setOpen] = useState(false);
        // const [questions, setQuestions] = useState([]);

        // const toggleDrawer = (newOpen) => () => {
        //     setOpen(newOpen);
        // };

        // const prompt = "create a ticket for laptop keyboard issue in JSON format with properties like title, description, priority, status and current date and time";

        // const result = await model.generateContent(prompt);

        // const DrawerList = (
        //     <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
        //         <List>
        //             <Button className="ms-2" sx={{ borderRadius: 28 }} variant="outlined" startIcon={<AddIcon />}>
        //                 New Question
        //             </Button>
        //             <hr />
        //             {questions.map(({ id, question }) => (
        //                 <ListItem key={id}>
        //                     <ListItemButton>
        //                         <Tooltip title={question}>
        //                             <ListItemIcon>
        //                                 <ChatBubbleOutlineIcon />
        //                             </ListItemIcon>
        //                             <ListItemText className="question-list" primary={question} />
        //                         </Tooltip>
        //                     </ListItemButton>
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </Box>
        // );

        // const theme = createTheme({
        //     palette: {
        //         primary: {
        //             main: '#f0f4f9',
        //         },
        //     },
        // });

        return (
            <div>
                {/* <Box sx={{ flexGrow: 1 }}>
                    <ThemeProvider theme={theme}>
                        <AppBar position="fixed">
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <FormControl fullWidth sx={{ maxWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label">Select Version</InputLabel>
                                    <NativeSelect
                                        defaultValue={10}
                                    >
                                        <option value={10}>Alpha</option>
                                        <option value={20}>Beta</option>
                                    </NativeSelect>
                                </FormControl>
                            </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                </Box>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <div className="mt-4">
                        {DrawerList}
                    </div>
                </Drawer> */}
                <WrappedComponent />
            </div>
        )
    }

    return ComponentWithState;
}