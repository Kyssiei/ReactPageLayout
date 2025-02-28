import EmployeeListItem from "./EmployeeListItem.jsx"

function EmployeeList() {
    return(
        <div style={{border: "2px solid red"}}>
            <EmployeeListItem name="James King" title="President and CEO"></EmployeeListItem>
            <hr />
            <EmployeeListItem name="Julie Taylor" title="VP of Marketing"></EmployeeListItem>
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