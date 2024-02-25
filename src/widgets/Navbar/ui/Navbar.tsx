import cls from "./Navbar.module.scss"
import {classNames} from "shared/aliases/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import React from "react";
interface NavbarProps {
    className?:string
}
export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>aboutPage</AppLink>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>mainPage</AppLink>
        </div>
    );
};

