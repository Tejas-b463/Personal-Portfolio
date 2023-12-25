import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';
import link from "../assets/img/link.svg"


export const ProjectCard = ({ title, description, imgUrl,github,live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> 
          <div className="project-icons">
          <a href={github} target="_blank"><img className="project-img" src={navIcon2} alt="" /></a>
          <a href={live} target="_blank"><img className="project-img" src={link} alt="" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
