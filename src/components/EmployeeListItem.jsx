// img + name + job title 



function EmployeeListItem(props){
return(
    <div style={{display: "flex", flexDirection: "row", gap: "0px"}}>
        <img src={props.img || "https://via.placeholder.com/150"} alt="profile picture" style={{width:"50px", height: "50px", borderRadius: "50%"}}></img>
        
        <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: "100", margin: "0px"}}>{props.name}</p>
            <p style={{fontFamily: "arial, sans-serif", color: "grey", fontSize: "14px", margin: "0px"}}>{props.title}</p>
        </div>
    </div>
)
}



export default EmployeeListItem