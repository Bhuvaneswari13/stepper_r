import React, { Component } from 'react';

import Stepper from 'react-stepper-horizontal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: [{
        title: 'Step One',
        href: 'http://example1.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 1)
        }
      }, {
        title: 'Step Two',
        href: 'http://example2.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      }, {
        title: 'Step Three',
        href: 'http://example3.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 3)
        }
      }, {
        title: 'Step Four',
        href: 'http://example4.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 4)
        }
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = { background: '#4F96FF', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

    return (
      <div>
        <Stepper steps={ steps } activeStep={ currentStep }  />  {/*disabledSteps={ [] }*/}
        <div style={ buttonStyle } onClick={ this.onClickNext }>Next</div>
      </div>
    );
  }
};


export default App;
//ReactDOM.render(<App />, document.getElementById('content'));