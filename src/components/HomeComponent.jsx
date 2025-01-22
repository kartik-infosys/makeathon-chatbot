import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Tooltip from '@mui/material/Tooltip';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


export const HomeComponent = WrappedComponent => {
    function ComponentWithState() {

        const [open, setOpen] = useState(false);
        const [questions, setQuestions] = useState([]);

        const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
        };

        const DrawerList = (
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {questions.map(({ id, question }) => (
                        <ListItem key={id} disablePadding>
                            <ListItemButton>
                                <Tooltip title={question}>
                                    <ListItemText className="question-list" primary={question} />
                                </Tooltip>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );

        const theme = createTheme({
            palette: {
                primary: {
                    main: '#f0f4f9',
                },
            },
        });

        useEffect(() => {
            setQuestions([
                {
                    id: 1,
                    question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
                },
                {
                    id: 2,
                    question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
                },
                {
                    id: 3,
                    question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, animi?",
                },
            ]);
        }, [])

        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
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
                    {DrawerList}
                </Drawer>
                <WrappedComponent />
            </div>
        )
    }

    return ComponentWithState;
}