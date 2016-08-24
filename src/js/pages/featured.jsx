import React from 'react';
import Article from '../components/article';

class Featured extends React.Component{
  render(){
    let data = [{
      id: 1,
      title: "Fake Title",
      description:"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."
    },{
      id: 2,
      title: "Fake Title2",
      description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.2"
    },{
      id:3,
      title: "Fake Title3",
      description:"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.3"
    },{
      id:4,
      title: "Fake Title4",
      description:"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.4",
    }]
    console.log(data)
    return(
      <div>
      <div className="jumbotron">
        <h1 className="display-3">Welcome</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>
      <div className="row marketing">
        <div className="col-lg-6">
          {data.map((data) =>{
             return <Article data={data} key={data.id} />
          })}
        </div>
      </div>
      </div>
    )
  }
}
export default Featured;
