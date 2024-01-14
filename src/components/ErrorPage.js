import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css"

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <main>
                <h1>
                    Uh oh! Something went wrong!
                </h1>
                <img className="center" src="https://live.staticflickr.com/5558/15132604568_0b4153cec2_b.jpg" alt="broken down shack"></img>
            </main>
        </>
    );
}

export default ErrorPage;