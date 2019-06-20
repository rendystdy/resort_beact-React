import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktail",
          info: "Pariatur velit magna dolore laboris irure."
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "Pariatur velit magna dolore laboris irure."
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "Pariatur velit magna dolore laboris irure."
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info: "Pariatur velit magna dolore laboris irure."
        }
      ]
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
         {this.state.services.map((item, key) => {
            return(
               <article className="service" key={key}>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
               </article>
            )
         })}
        </div>
      </section>
    );
  }
}
