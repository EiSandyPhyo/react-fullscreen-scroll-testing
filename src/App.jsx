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

// import React, { useState } from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
// import First from './Components/First';
// import Second from './Components/Second';
// import Third from './Components/Third';
// import Header from './Header'
// // import "./styles.css";
// const SEL = "custom-section";
// const SECTION_SEL = `.${SEL}`;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         fullpages: [
//           {
//             text: <First/>
//           },
//           {
//             text: <Second/>
//           },
//           {
//             text: <Third/>
//           }
//         ]
//       }
//   }

//   render() {
//     const { fullpages } = this.state;
//     if (!fullpages.length) {
//       return null;
//     }

//     const anchors = ["firstPage", "secondPage", "thirdPage"];

//     return (
//       <div className="App">
//         <Header/>
//         <ReactFullpage
//           debug
//           licenseKey={"YOUR_KEY_HERE"}
//           navigation
//           anchors={anchors}
//           sectionSelector={SECTION_SEL}
//           onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//           navigationTooltips={anchors}
//           sectionsColor={["#3c3b5a", "#32324c", "#3c3b5a"]}
//           render={(comp) => (
//           <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <div className="">
//                     {text}
//                   </div>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

// export default App

import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Header from "./Header";
// import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const App = () => {
  const { fullpages } = {
    fullpages: [
      {
        component: <First />,
      },
      {
        component: <Second />,
      },
      {
        component: <Third />,
      },
    ],
  };
  if (!fullpages.length) {
    return null;
  }
  const anchors = ["firstPage", "secondPage", "thirdPage"];
  return (
    <div className="App">
      <Header />
      <ReactFullpage
        debug
        licenseKey={"YOUR_KEY_HERE"}
        navigation
        anchors={anchors}
        sectionSelector={SECTION_SEL}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        navigationTooltips={anchors}
        sectionsColor={["#3c3b5a", "#32324c", "#3c3b5a"]}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ component }) => (
              <div key={component} className={SEL}>
                {component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;
