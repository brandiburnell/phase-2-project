import App from "./components/App";
import AllHuts from "./components/AllHuts";
import History from "./components/History";
import HutForm from "./components/HutForm";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AllHuts />
            },
            {
                path: "/history",
                element: <History />
            },
            {
                path: "/newhut",
                element: <HutForm />
            }
        ]
    }
];

export default routes;