import React from "react";
import { Footer, Form } from "../../components";

export const SeccionFour = ({}) => {
    return(
        <div className="relative bg-brown-600 pt-10">
            <div className="md:flex md:justify-end lg:mr-48">
                <div className=" lg:m-20 w-full p-4 lg:p-0 lg:w-1/2 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31815.66990576169!2d-74.145054!3d4.601413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f77d36669d7%3A0x311cf1540437869e!2sCl.%2043a%20Sur%20%2372b-15%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1688522314106!5m2!1sen!2sus" className="w-full" width="600" height="450"  loading="lazy"></iframe>
                </div>
                <Form type='general'/>
            </div>
            <Footer/>
        </div>

    );
}

