import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, QuienesSomos, Blog, Contacto,Noticia1, Noticia2, Noticia3, Noticia4 } from "../pages"
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
    {
        path: '/Noticia1',
        element: <Menu> <Noticia1 /> </Menu>
    },
    {
        path: '/Noticia2',
        element: <Menu> <Noticia2 /> </Menu>
    },
    {
        path: '/Noticia3',
        element: <Menu> <Noticia3 /> </Menu>
    },
    {
        path: '/Noticia4',
        element: <Menu> <Noticia4 /> </Menu>
    }
]);

