import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How doy you use React",
    content: "You use React by creating component",
  },
];

const options = [
  {
    label: "red",
    value: "red",
  },
  {
    label: "green",
    value: "green",
  },
  {
    label: "blue",
    value: "blue",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") return <Accordion items={items} />;
// };
//
// const showList = () => {
//   if (window.location.pathname === "/list") return <Search />;
// };
//
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") return <Dropdown />;
// };
//
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") return <Translate />;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  //
  // return (
  //   <div>
  //     <button onClick={() => setShowDropdown(!showDropdown)}>Toggle</button>
  //     {showDropdown ?
  //       <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label='Select a color'/>
  //       : null
  //     }
  //   </div>
  // );
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setShowDropdown(!showDropdown)}>Toggle</button>
        {showDropdown ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            label="Select a color"
          />
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
