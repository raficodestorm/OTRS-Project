import { Outlet } from "react-router";
import UserFooter from "../components/UserFooter";
import UserNavbar from "../components/UserNavbar";

function MasterUser() {
    return(
        <>
            <UserNavbar/>
                <div>
                    <Outlet/>
                </div>
            <UserFooter/>
        </>
    )
}
export default MasterUser;