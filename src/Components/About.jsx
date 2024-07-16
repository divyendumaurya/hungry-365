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

<div className='p-20'>
      
      <p class="mt-10  mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Hungry365 is a dynamic food ordering app designed to satisfy your cravings with a wide range of cuisines. Featuring a user-friendly interface, it allows you to browse menus, place orders, and track deliveries with ease. Enjoy exclusive deals and a seamless ordering experience anytime, anywhere. Hungry365 - your go-to app for delicious meals delivered fast!</p>
      <p class="text-gray-500 dark:text-gray-400">With Hungry365, you can explore a variety of restaurants and discover new dishes tailored to your taste. Our secure payment system ensures a hassle-free transaction every time. Experience quick and reliable food delivery with Hungry365, where convenience meets culinary delight..</p>
      
          </div>
    
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

