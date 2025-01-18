import React from "react";
import Header from "./components/Header";
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function App() {
  return( <div className="app">
    <Header />
    <Section title="What is React?">
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p>
    </Section>

    <Section title="Benefits of React?">
      <ul>
        <li>Declarative</li>
        <li>Component-Based</li>
        <li>Learn Once, Write Anywhere</li>
      </ul>
    </Section>

    <Section title="Helpful Resources">
      <HelpfulResource 
      label="React Official Documentation" 
      link="https://reactjs.org/docs/getting-started.html" 
      />
      <HelpfulResource 
      label="React Tutorial: Tic-Tac-Toe Game" 
      link="https://react.dev/learn/tutorial-tic-tac-toe" 
      />
      <HelpfulResource 
      label="React Hooks Documentation" 
      link="https://react.dev/reference/react"
      />
    </Section>
    <AboutMe />
    <Footer />
    </div>
  );
};
