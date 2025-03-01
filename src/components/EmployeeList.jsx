import EmployeeListItem from "./EmployeeListItem.jsx";
import sampleImage from "../assets/heart-default-pfp.jpg";

function EmployeeList() {
    return(
        <div style={{border: "2px solid red", padding: "10px"}}>
            <EmployeeListItem name="James King" title="President and CEO" img={sampleImage}></EmployeeListItem>
            {/* <EmployeeListItem><img src="" alt="" /></EmployeeListItem> */}
            <hr />
            <EmployeeListItem name="Julie Taylor" title="VP of Marketing" img={sampleImage}></EmployeeListItem>
            <hr />
            <EmployeeListItem name="Eugene Lee" title="CFO"/>
            <hr />
            <EmployeeListItem name="John Wiiliams" title="VP of Engineering"></EmployeeListItem>
            <hr />
            <EmployeeListItem name="Ray Moore" title="VP of Sales"></EmployeeListItem>
            <hr />
            <EmployeeListItem name="Paul Jones" title="QA Manager"></EmployeeListItem>
            <hr />
        
        </div>
    )
}

export default EmployeeList