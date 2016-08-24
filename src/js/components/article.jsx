import React from 'react';

class Article extends React.Component {
  render() {
    let data = this.props.data
    return (
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    )
  }
}

export default Article;
