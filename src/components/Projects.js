import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume1 from "../assets/resume1.png"; // Ensure this path is correct
import resume2 from "../assets/resume2.png"; // Ensure this path is correct
import colorSharp2 from "../assets/img/color-sharp2.png"; // Ensure this path is correct

export const Projects = () => {

  const projectCategories = [
    {
      key: "data-analysis",
      title: "Data Analysis",
      projects: [
        {
          title: "Customer Segmentation for E-commerce Platform (Python| AWS)",
          details: [
            "Utilized Python's pandas and scikit-learn libraries for data preprocessing and analysis, achieving a 95% efficiency in handling customer data.",
            "Leveraged AWS EC2 instances for scalable computing power, enabling efficient processing of large datasets with a 90% improvement in performance. Applied K-means clustering algorithm to segment customers based on purchasing behavior, resulting in a 85% accuracy. .",
            "Visualized segmentation results using matplotlib, yielding actionable insights for targeted marketing strategies. "
          ]
        },
        {
          title: "Sccoer Match Prediction (Python| Power BI |Google Colab)",
          details: [
            "Built a predictive model using machine learning algorithms to forecast soccer match outcomes.",
            "Utilized historical match data for training the model.",
            "Improved prediction accuracy by 15% through feature engineering and model tuning."
          ]
        },
        {
          title: "Sales Data Analysis (Python| Power BI |Tableau)",
          details: [
            "Spearheaded a sales data analysis initiative, leveraging Python, Tableau, and Power BI to uncover trends and customer preferences, driving actionable insights that led to improved sales and inventory management, while also employing time-series analysis and EDA to forecast sales with 95% accuracy, achieving a 20% boost in sales efficiency and a 15% cut in inventory expenses. ",
            "Crafted intuitive dashboards and reports facilitating data-driven decisions, markedly improving marketing strategies and enhancing customer satisfaction, as demonstrated by a 10% increase in customer loyalty metrics.",
          ]
        },
        {
          title: "Gold Price Prediction (Power BI|Google Analytics|Google Colab|MS Excel|MySQL|Python)",
          details: [
            "Developed dynamic Power BI reports to visualize and predict gold price trends, enhancing data insights, while also utilizing Microsoft Excel and Tableau for KPI and performance metric optimization to refine predictive model accuracy. ",
            "Utilized Google Analytics for gathering web traffic and user behavior data on gold-related content, supporting model refinement and insight generation",
          ]
        }
      ]
    },
    {
      key: "design-development",
      title: "Software Development",
      projects: [
        {
          title: "Diabetic Retinopathy Detection",
          details: [
            "Analyzed retinal images after noise elimination through CNN architecture to diagnose both non-DR and DR cases.",
            "Achieved a 90% accuracy in detecting DR, leading to more effective early-stage intervention and treatment.",
            "Attained a classification accuracy of 95% by integrating CNN models like Resnet50 and Alexnet, further enhanced through Ensemble learning techniques, resulting in a significant improvement in model performance compared to alternative methods. "
          ]
        },
        {
          title: "Customer Segmentation for E-commerce Platform (Python| AWS) ",
          details: [
            "Utilized Python's pandas and scikit-learn libraries for data preprocessing and analysis, achieving 95% efficiency in handling customer data. ",
            "Leveraged AWS EC2 instances for scalable computing power, enabling efficient processing of large datasets with a 90% improvement in performance. Applied K-means clustering algorithm to segment customers based on purchasing behavior, resulting in an 85% accuracy.",
            " Visualized segmentation results using Matplotlib, yielding actionable insights for targeted marketing strategies."
          ]
        },
        {
          title: "E-commerce Website (HTML|CSS|JavaScript|Python|Django|React)",
          details: [
            "Led the development of a full-stack e-commerce website using Django and React. Designed intuitive and visually appealing user interfaces for Pages",
            "Authored comprehensive system and user requirements to ensure alignment with client and user needs. Integrated payment gateways and implemented user authentication.",
            "Optimized website performance and ensured mobile responsiveness.Produced technical diagrams (Class and Sequence Diagrams) to enhance design clarity and project documentation"
          ]
        }
      ]
    },
    
  ];

  const workExperiences = [
    {
      title: "Software Developer Intern, Bandhouse Music Group, USA -- (May 2024 – Present)",
      description: [
        "Enhanced user adoption by 20% through the development of intuitive GUIs with Tkinter.",
        "Streamlined data management via Persistent Database Connectivity (PDBC) with SQLite3.",
        "Created a sports analytics model using Python (Pandas, NumPy), SQL, and Excel for basketball performance analysis."
      ]
    },
    {
      title: "R&D Engineering Intern, Indian Central Railway, Mumbai -- (June 2022 - July 2022)",
      description: [
        "Directed the adoption of CentOS, achieving significant cost savings and enhanced system performance.",
        "Established robust communication protocols and configured networking hardware to optimize data exchange and security.",
        "Spearheaded the creation of a comprehensive Passenger Management System using Python and MySQL."
      ]
    },
    {
      title: "Python Developer Intern, Trivia Softwares, Mumbai -- (Dec 2020 – Feb 2021)",
      description: [
        "Enhanced user adoption by 20% through the development of intuitive GUIs with Tkinter.",
        "Streamlined data management via Persistent Database Connectivity (PDBC) with SQLite3.",
        "Created a sports analytics model using Python (Pandas, NumPy), SQL, and Excel for basketball performance analysis."
      ]
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2></h2>
                  <Tab.Container id="main-tabs" defaultActiveKey="projects">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="projects">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="resume">Resume</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="work-experience">Work Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="main-content" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="projects">
                        <Tab.Container id="projects-sub-tabs" defaultActiveKey="data-analysis">
                          <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="sub-pills-tab">
                            {projectCategories.map(category => (
                              <Nav.Item key={category.key}>
                                <Nav.Link eventKey={category.key}>{category.title}</Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                          <Tab.Content id="sub-content" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            {projectCategories.map(category => (
                              <Tab.Pane eventKey={category.key} key={category.key}>
                                {category.projects.length ? (
                                  category.projects.map((project, index) => (
                                    <div key={index} className="mb-4">
                                      <h3>{project.title}</h3>
                                      <p className="mb-2">{project.description}</p>
                                      <ul>
                                        {project.details.map((point, idx) => (
                                          <li key={idx}>{point}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))
                                ) : (
                                  <p>No projects available in this category.</p>
                                )}
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Tab.Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="resume">
                        <Tab.Container id="resume-sub-tabs" defaultActiveKey="resume1">
                          <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="sub-resume-pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="resume1">Data Analyst</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="resume2">Software Developer</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content id="sub-resume-content" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="resume1">
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
                                <img src={resume1} alt="Resume 1" style={{ maxWidth: '70%', maxHeight: '70%' }} />
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="resume2">
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
                                <img src={resume2} alt="Resume 2" style={{ maxWidth: '70%', maxHeight: '70%' }} />
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="work-experience">
                        {workExperiences.map((experience, index) => (
                          <div key={index} className="mb-4">
                            <h3>{experience.title}</h3>
                            <p className="mb-2">{experience.date}</p>
                            <ul>
                              {experience.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
