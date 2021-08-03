import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setteing } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
    {
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/user_management",
        exact: true,
        children: <UserManagement />
    },
    {
        path: "/setting",
        exact: true,
        children: <Setteing />
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />
    },
];