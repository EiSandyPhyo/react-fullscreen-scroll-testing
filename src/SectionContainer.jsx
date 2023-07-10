import React from 'react'
import Fullpage, { FullPageSections, FullpageSection , FullpageNavigation} from '@ap.cx/react-fullpage'

const SectionContainer = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div>
      <Fullpage>
        <FullpageNavigation style={{ color: 'white'}}/>
        <FullPageSections>
          <FullpageSection style={{...SectionStyle, backgroundColor: '#3c3b5a'}}>
            <h3>Section One</h3>
          </FullpageSection>
          <FullpageSection style={{...SectionStyle, backgroundColor: '#32324c'}}>
            <h3>Section Two</h3>
          </FullpageSection>
          <FullpageSection style={{...SectionStyle, backgroundColor: '#3c3b5a'}}>
            <h3>Section Three</h3>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  )
}

export default SectionContainer