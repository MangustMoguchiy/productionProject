import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/aliases/classNames";
import {AppRouter} from "app/providers/router";
import Navbar from "widgets/Navbar";

const App = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames("app",{},[theme])}>
            <button onClick={()=>{
                toggleTheme()
            }}>
                click
            </button>
            <Navbar/>
            <AppRouter>
            </AppRouter>
        </div>
    );
};

export default App;