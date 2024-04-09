import projects from '../utils/projects';
import ProjectCard from './ProjectCard';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Projects(){
    return (
        <Row xs={1} md={2} className="g-4">
        <div>
            {projects.map((project, index)=> {
                return (
                    <Col key={index}>
                        <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <ProjectCard {...project} />
                        </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </div>    
        </Row>
        
    )
};