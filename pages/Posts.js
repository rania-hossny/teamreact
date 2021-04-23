import React, { Fragment } from 'react'
import { Col, Card, Nav, Row } from 'react-bootstrap';
import { BiImageAdd } from "react-icons/bi";
import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { ImReply } from "react-icons/im";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./teamcontent.module.css"


const Posts = () => {
    return (
        <Fragment>        
            <Card className={styles.cardposts} >
  <Card.Body>
    <Row className={styles.Postheader}>
        <Col md={4}>
            <div className={styles.photop}>
               <Row>
                    <Col md={4}><img src={photo}></img></Col> 
                    <Col md={8}>
                        <p> <b>Rania hossny</b> <br/> <span>post date</span></p>     
                    </Col>
               </Row>     
            </div>
        </Col >
        
      <a className={styles.dotsedit} type="button">  <BiDotsVerticalRounded /></a>
    </Row>

    <Row className={styles.postbody}>
    <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur</p>
    <div className={styles.linePost}></div>

    <div className={styles.reply}>
    <ImReply />
    <a type="button" >Reply</a>
    </div>
    </Row>
    
  </Card.Body>
</Card>


  
<Card className={styles.cardposts}>
  <Card.Body>
    <Row className={styles.Postheader}>
        <Col md={4}>
            <div className={styles.photop}>
               <Row>
               <Col md={4}><img src={photo}></img></Col> 
                <Col md={8}>
                    <p> <b>Eman mohamed</b> <br/> <span>post date</span></p>     
                </Col>
               </Row>     
            </div>
        </Col >
        <a className={styles.dotsedit} type="button">  <BiDotsVerticalRounded /></a>

    </Row>

    <Row className={styles.postbody}>
    <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur</p>
    <div className={styles.linePost}></div>
    
    <div className={styles.reply}>
    <ImReply />
    <a type="button" >Reply</a>
    </div>
    </Row>
    
  </Card.Body>
</Card>
        </Fragment>
    )
}

export default Posts

