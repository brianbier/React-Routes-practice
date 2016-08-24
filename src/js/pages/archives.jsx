import React from 'react';

class Archives extends React.Component{
  render(){
    console.log(location)
    console.log(this.props)
    return(
      <div>
      <h1>Archives Page {this.props.params.articles? this.props.params.articles: "" } </h1>
      </div>
    )
  }
}
export default Archives;
