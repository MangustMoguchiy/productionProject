import React, { type ReactElement, Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/aliases/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import Navbar from 'widgets/Navbar';

const App = (): ReactElement => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <button onClick={() => {
                    toggleTheme();
                }}
                >
                    click
                </button>
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
