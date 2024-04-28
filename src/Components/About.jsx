import { useState } from "react"

const Section = ({title, description,isVisible, setIsVisible}) => {
// const [ isVisible , setIsVisible] = useState(false);


return(
    <div className="border border-black p-2 m-2">
        <h3>{title}</h3>
          {
            isVisible ?  (<button onClick={()=> setIsVisible(false)} className="cursor-pointer underline text-green-800 m-2" > Hide </button> ):   (<button onClick={()=> setIsVisible(true)} className="cursor-pointer underline text-blue-800" > Show </button>)
          
          }
      { isVisible &&  <p>  {description} </p>}
    </div>
)
}



const About = ()=>{
const [visibleSection , setVisibleSection ]=useState("");

return(
    <>
    <h1 className="font-bold text-3xl p-2 m-2 ">About Page</h1>
    <Section
     title={"About"}
     description ={'orem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor possimus sit enim debitis, praesentium obcaecati provident quidem recusandae quibusdam, hic libero amet odit sapiente. Recusandae voluptate ab iste esse cumque, at amet laudantium odit eligendi perferendis repellendus officia illo reiciendis, magnam est ullam doloribus dicta animi, quia minus ad.'} 
     isVisible ={visibleSection === "About"} 
     setIsVisible={()=> setVisibleSection(
        visibleSection === "About" ? false : "About")}
     
     />
    
    <Section
     title={"Team"}
     description ={'orem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor possimus sit enim debitis, praesentium obcaecati provident quidem recusandae quibusdam, hic libero amet odit sapiente. Recusandae voluptate ab iste esse cumque, at amet laudantium odit eligendi perferendis repellendus officia illo reiciendis, magnam est ullam doloribus dicta animi, quia minus ad.'} 
     
     isVisible ={visibleSection === "Team"} 
     setIsVisible={()=> setVisibleSection(
        visibleSection === "Team" ? false : "Team")}/>
    <Section
     title={"Careers"}
     description ={'orem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor possimus sit enim debitis, praesentium obcaecati provident quidem recusandae quibusdam, hic libero amet odit sapiente. Recusandae voluptate ab iste esse cumque, at amet laudantium odit eligendi perferendis repellendus officia illo reiciendis, magnam est ullam doloribus dicta animi, quia minus ad.'}
     isVisible ={visibleSection === "Careers"} 
     setIsVisible={()=> setVisibleSection(
        visibleSection === "Careers" ? false : "Careers")}
     />
    
    
    </>
)
}

export default About;

