/* import React, { useState } from 'react'
import SectionContainer from './SectionContainer'
import Header from './Header'

const App = () => {
  console.log(navigator.connection.effectiveType);

  const [loading, setLoading] = useState(true);
  const preloading = document.getElementById('preloading');
  if(preloading){
    setTimeout(()=>{
      preloading.style.display = 'none';
      setLoading(false);
    },2000)
  }
  return (
    //!loading && (
      <>
      <Header>
      <a href="#firstPage" className=" mx-5 hover:text-[#C44D58]">Section Oneee</a>
      <a href="#secondPage" className=" mx-5  hover:text-[#C44D58]">Section Twooo</a>
      <a href="#thirdPage" className=" mx-5  hover:text-[#C44D58]">Section Threeee</a>
      </Header>
      <SectionContainer/>
    </>
    )
  )
}

export default App */

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;


const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  "#3c3b5a",
  "#32324c",
  "#3c3b5a"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section 1"
        },
        {
          text: "Section 2"
        },
        {
          text: "Section 3"
        }
      ]
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100
        }}
      ></div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["firstPage", "secondPage", "thirdPage"]}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
             {/*  {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                </div>
              ))} */}
              <div className={SEL}>
                <div className="slide">
                  <First/>
                </div>
                <div className="slide">
                  <Second/>
                </div>
                <div className="slide">
                  <Third/>
                </div>
            </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App