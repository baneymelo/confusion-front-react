import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Container} from 'reactstrap';

function RenderDish({dish}) {

/*     if(dish != null){ */
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
/*     }else{
        return (
            <div></div>
        )
    } */
} 
function RenderComments({comments}) {
    /* if(comments != null){ */
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <li>
                    { 
                    
                    comments.map((comment) => {
                        return(
                          <div key={comment.id} className="mt-3 text-left">
                              <div>{comment.comment}</div>
                              <div className="mt-1">-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                          </div>
                        )
                    })

                    }
                    </li>
                </ul>
            </div>
        );
/*     }else{
        return(
            <div></div>
        )
    } */
}


const  DishDetail = (props) => {

    if(props.dish){

        return (
            <div className='container'>
            <div className="row">
                <div className="col-12 col-md-5 col-xl-5 mt-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 col-xl-5 mt-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
}

export default DishDetail;