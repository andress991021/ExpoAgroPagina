import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, QuienesSomos, Blog, Contacto} from "../pages"
import { Menu } from "../containers"




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu> <Home /> </Menu>
    },
    {
        path: '/¿Quienes-Somos?',
        element: <Menu> <QuienesSomos /> </Menu>
    },
    {
        path: '/Blog',
        element: <Menu> <Blog/> </Menu>
    },
    {
        path: '/Contacto',
        element: <Menu> <Contacto/> </Menu>
    },

]);

