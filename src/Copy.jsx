import React from 'react'
import Fullpage, { FullPageSections,FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage'

const App = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections style={{overflow: 'hidden', touchAction: 'none'}}>
        {/* <FullpageSection style={SectionStyle}> */}
        <FullpageSection style={{...SectionStyle, zIndex: '3', backgroundColor: '#3c3b5a', transform: 'translate3d(0px, 0px, 0px)'}}>
          <h1>screen 1</h1>
        </FullpageSection>
        <FullpageSection style={{...SectionStyle, zIndex: '2', backgroundColor: '#32324c'}}>
          <h1>screen 2</h1>
        </FullpageSection>
        <FullpageSection style={{...SectionStyle, zIndex: '1', backgroundColor: '#3c3b5a'}}>
          <h1>screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default App

/* const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection content={"Slide down!"}/>
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </div>
        // <div>
        //   <div content={"Slide down!"} style={{height: "100vh"}}></div>
        //   <div content={"Keep going!"} style={{height: "100vh"}}></div>
        //   <div content={"Slide up!"} style={{height: "100vh"}}></div>
        // </div>
      );
    }}
  />
); */