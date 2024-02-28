import { classNames } from 'shared/aliases/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import React from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>aboutPage</AppLink>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>mainPage</AppLink>
    </div>
);
