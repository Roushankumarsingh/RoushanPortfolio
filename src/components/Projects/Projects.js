import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import SaiStore from "../../Assets/Projects/SaiStore.png";
import weatherApp from "../../Assets/Projects/WeatherApp.png"
import HotelBooking from "../../Assets/Projects/HotelBooking.png"
import TicTacToe from "../../Assets/Projects/TicTacToe.png"
import currency from "../../Assets/Projects/currency.png"
import foodRecipe from "../../Assets/Projects/FoodRecipe.png"
import AnalogClock from "../../Assets/Projects/AnalogClock.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SaiStore}
              // isBlog={false}
              title="Sai Store"
              description="Sai Store is a React-based online grocery and general store with user authentication, product search, add-to-cart, and order placement features. It offers a seamless and convenient shopping experience with a clean and responsive interface"
              ghLink="https://github.com/Roushankumarsingh/Grocerywebsite"
              demoLink="https://saistoregrocerry.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HotelBooking}
              // isBlog={false}
              title="Hotel Booking"
              description="The Hotel Booking Website is an easy-to-use online platform that allows users to search, explore, and book hotels across various locations. It offers detailed information about hotels, including amenities, pricing, photos, room availability, and guest reviews."
              ghLink="https://github.com/Roushankumarsingh/Hotel-Booking"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodRecipe}
              // isBlog={false}
              title="Food Recipe Searching App"
              description="The Food Recipe Searching App is an easy-to-use platform where users can discover a wide variety of recipes based on the ingredients they have or the dishes they want to cook. The app allows users to search for recipes, view detailed cooking instructions, ingredients lists, and preparation times."
              ghLink="https://github.com/Roushankumarsingh/FoodRecipe" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              // isBlog={false}
              title="TicTacToe Game"
              description="The Tic Tac Toe Game is a classic two-player game built using HTML, CSS, and JavaScript. It features a simple and interactive 3x3 grid where players take turns marking X and O. The game checks for winning conditions after each move and highlights the winner or declares a draw if the grid is full."
              ghLink="https://github.com/Roushankumarsingh/TicTacToe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              // isBlog={false}
              title="Currency Converter"
              description="The Currency Converter is a web application that allows users to quickly and accurately convert amounts between different currencies. Built with a user-friendly interface, it lets users select the source and target currencies, enter the amount, and instantly see the converted value based on real-time exchange rates."
              ghLink="https://github.com/Roushankumarsingh/CurrencyConverter"
            />
          </Col>

          

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnalogClock}
              // isBlog={false}
              title="Analog Clock"
              description="The Analog Clock is a real-time clock application designed using HTML, CSS, and JavaScript. It visually represents time with moving hour, minute, and second hands, just like a traditional wall clock."
              ghLink="https://github.com/Roushankumarsingh/AnalogClock"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              // isBlog={false}
              title="Weather App"
              description="The app provides real-time weather updates for your current location or any place you search, powered by API calls. Users can easily access detailed weather reports with a smooth and responsive interface."
              ghLink="https://github.com/Roushankumarsingh/Weather-App"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
