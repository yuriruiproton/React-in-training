
export default  () =>{
    const subject = "Me livrei da Maldicao"
    const status = true
    return (
    <h2  style={{color: status ? "#00ff9f" : "red"}}> 
        Current status: {status ? "ON" : "OFF"} <br/> {subject}
     </h2>
    )
    
}