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

filterList= (e) => {
  let updatedList = this.state.senators
  updatedList = updatedList.filter((senator) => {
    return senator.toLowerCase().search(
      e.target.value.toLowerCase()) !== -1
  })
  this.setState({senator: updatedList})
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
      
      <Senators poets={this.state.filteredSenators} match={this.props.match} onChange={this.filterSenate} />

      </div>
  );
}

