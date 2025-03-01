// img + name + job title 
// import PropTypes from 'prop-types'


function EmployeeListItem({name, title, img}){

    
    
    return(
        <div style={{display: "flex", flexDirection: "row", gap: "0px"}}>
        <img src={img || EmployeeListItem.defaultProps.img} alt="profile picture" style={{width:"50px", height: "50px", borderRadius: "50%"}}></img>
        
        <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: "100", margin: "0px", paddingLeft: "10px"}}>{name || EmployeeListItem.defaultProps.name}</p>
            <p style={{fontFamily: "arial, sans-serif", color: "grey", fontSize: "14px", margin: "0px", paddingLeft: "10px"}}>{title || EmployeeListItem.defaultProps.title}</p>
        </div>
    </div>
)
};

EmployeeListItem.defaultProps = {
    name: "Name",
    title: "Title",
    img: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
    
};


export default EmployeeListItem;