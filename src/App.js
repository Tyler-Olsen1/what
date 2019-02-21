import React, { Component, Fragment } from 'react';


class Home extends Component {

    state = {
        senators: []
    }

getSenators = async () => {
    await fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
        .then(results => {
        return results.json()
        })
        .then(data => {
        this.setState({senators: data})
        });
    }
//function does a fetch; we call that fetch 'data'; we bind that data to a state
      
async componentWillMount () {
    await this.getSenators()
    }

  render() {
      console.log(this.state.senators)
    return (
      <div>
        
           {this.state.senators.map((senator, index) => (
               <div key={index}>
                  <h1>Name: {senator.name}, </h1>
                    Party: {senator.party}
               </div>
           ))}
       
        </div>
    );
  }
}
{/* <home /> */}
export default Home