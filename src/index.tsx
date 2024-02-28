
import "./app/styles/index.scss"
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
import "shared/config/i18n/i18n";

root.render(
    <>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </>
)