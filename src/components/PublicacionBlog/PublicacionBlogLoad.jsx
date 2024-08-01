import React from "react";
import { PublicacionBlog } from "./PublicacionBlog";


export const PublicacionBlogLoad = ({ title, text, date, image, link, moreinfo }) => {
    return (
        <div>
            <PublicacionBlog title={title} text={text} date={date} image={image} link={link} moreinfo={moreinfo} />
        </div>
    );
}