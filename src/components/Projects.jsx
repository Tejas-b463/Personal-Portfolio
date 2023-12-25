import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/food.png";
import projImg2 from "../assets/img/shoppiecommerce.png";
import projImg3 from "../assets/img/cinehub.png";
import projImg4 from "../assets/img/blog.png"
import projImg5 from "../assets/img/todolist.png";
import projImg6 from "../assets/img/shoppiUi.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "InstantEats - Food Delivery",
      description: "React Js, Tailwind CSS, Swiggy Live API",
      imgUrl: projImg1,
      github :"https://github.com/Tejas-b463/FoodDelivery",
      live:"https://www.linkedin.com/feed/update/urn:li:activity:7127546328993193984/"
    },
    {
      title: "Shoppi Ecommerce ",
      description: "React Js, User Authentication",
      imgUrl: projImg2,
      github:"https://github.com/Tejas-b463/Shoppi-E-commerce",
      live:"https://shoppi-e-commerce.vercel.app/"
    },
    {
      title: "CineHub - Netflix Clone",
      description: "React Js, Scss, TMDB API",
      imgUrl: projImg3,
      github:"https://github.com/Tejas-b463/Netflix-GPT",
      live:"https://netflix-gpt-nine.vercel.app/"
    },
    {
      title: "DevDepth - Blog",
      description: "React Js, CSS",
      imgUrl: projImg4,
      github:"https://github.com/Tejas-b463/Blog",
      live:"https://blog-theta-umber-99.vercel.app/"
    },
    {
      title: "Todo List",
      description: "HTML, CSS, Javascript",
      imgUrl: projImg5,
      github:"https://github.com/Tejas-b463/TodoList",
      live:"https://tejas-b463.github.io/TodoList/"
    },
    {
      title: "Shoppi UI",
      description: "HTML, CSS, Boostrap",
      imgUrl: projImg6,
      github:"https://github.com/Tejas-b463/shoppi",
      live:"https://tejas-b463.github.io/shoppi/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Some Things I’ve Built</h2>
                <p>My projects makes use of vast variety of latest technology tools. My best experience is to create Front End projects and deploy them to web applications using React Js.</p>
                <Row>
                 {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
