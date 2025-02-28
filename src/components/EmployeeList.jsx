import EmployeeListItem from "./EmployeeListItem.jsx"

function EmployeeList() {
    return(
        <div style={{border: "2px solid red"}}>
        <EmployeeListItem name="James King" />
        <EmployeeListItem name="Julie Taylor"/>
        <EmployeeListItem name="Eugene Lee"/>
        </div>
    )
}

export default EmployeeList