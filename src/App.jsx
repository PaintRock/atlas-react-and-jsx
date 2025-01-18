import React from "react";
import Header from "./components/Header";
import Section from './components/Section';

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
    </div>
  );
};
