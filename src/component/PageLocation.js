import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {useLocation} from "react-router-dom";

function PageLocation() {

    const location = useLocation().pathname
    const pathname = location.split("/").filter(p => p).map(p => p.charAt(0).toUpperCase() + p.slice(1))

    if (pathname.length > 0) {
        return (
            <Breadcrumb className="m-1">
                <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
                {pathname.map((path, idx) => (
                    <Breadcrumb.Item href={"#/" + pathname.slice(0, idx + 1).join("/").toLowerCase()} key={idx} active={idx === pathname.length - 1}>{path}</Breadcrumb.Item>
                ))}
            </Breadcrumb>
        );
    }
}

export default PageLocation;