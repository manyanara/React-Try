export default function ProjectCard({title, description, gitUrl, imageUrl}){
    return (
        <div className="projectCard"> 
            <img src={imageUrl} width={300} height={300} alt="" />
            <h2>
            {title}
            </h2>
 
        </div>
    )
}