import { Outlet } from "react-router-dom";
import FormNavbar from "./formComponents/formNavbar";

const FromsAll = () => {
    return (
        <div>
            <FormNavbar/>
            <Outlet /> {/* This will render LoginForm or RegisterNew based on the URL */}
        </div>
    );
};


export default FromsAll;