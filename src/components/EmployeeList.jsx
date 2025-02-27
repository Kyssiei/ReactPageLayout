import EmployeeListItem from "./EmployeeListItem"

function EmployeeList() {
    return(
        <div style={{border: "2px solid red"}}>
        <EmployeeListItem/>
        <EmployeeListItem/>
        <EmployeeListItem/>
        </div>
    )
}

export default EmployeeList