import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Container} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (
                <div></div>
            );
        }
    } 
    renderComments(dish){
        if(dish != null){
            const comments = dish.comments.map((comment) => {
                return(
                  <div key={comment.id} className="mt-3 text-left">
                      <div>{comment.comment}</div>
                      <div className="mt-1">-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                  </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <li>{ comments }</li>
                    </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
    render(){
        return (
            <div className='container'>
            <div className="row">
                <div className="col-12 col-md-5 col-xl-5 mt-1">
                    { this.renderDish(this.props.dish) }
                </div>
                <div className="col-12 col-md-5 col-xl-5 mt-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
            </div>
        );
    }
}

export default DishDetail;