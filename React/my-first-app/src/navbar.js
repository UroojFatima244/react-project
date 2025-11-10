import react from "react";
function NAV()
{
    const student ={
        name : 'Urooj',
        age  :   '23',
        class : 'BSCS',
    }
     const mystyles = {
    color: "yellow",
    fontSize: "20px",
    backgroundColor: "Brown",
     };
{
 
 }
    return(
        <>
        <h1>Hello </h1>
        <h1>{student.name}</h1>
        <h1>{student.age}</h1>
        <h1>{student.class}</h1>
        <h1 style={mystyles}>MY CAR</h1> 

        <ul>
            <li> home</li>
            <li> services</li>
<ol>
             <li>Javascript Course</li>
             <li>Artificial Inteligence</li>
             <li>Office Menagement</li>
</ol>
             <li>About us </li>
             <li>Contact us </li>
        </ul>
         
        </>
    );
}
export default NAV;
