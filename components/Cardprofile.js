import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row ,Modal} from 'react-bootstrap';
import '../pages/profile.css';
import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { BiImageAdd } from "react-icons/bi";
import Editform from "../components/Editform";

const Cardprofile = ({nameslist,editstate}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [state,setState]=useState([{
        
    //         name:"",
    //         email:"",
    //         address:"",
    //         specialist:""
    //     }]);

    // const changefunc=(data)=>{
    //     // console.log(data);
    //     setState([data]);
    //     editstate(state);

    //     // console.log(state);
    //     // setState([{
    //     //     name:"",
    //     //     email:"",
    //     //     address:"",
    //     //     specialist:""}])

    // }
    const cards=nameslist.map(({name,email,address,specialist},index)=>
        (
        
            <div key={index}>

<Card style={{ width: '60rem', marginLeft:'300px' }} >
<Row>
  <Col md={4}>
      <div className="img-profile">
          <Card.Img style={{marginTop:"50px"}} variant="top" src={photo} />
          <div className="layer">
              <div className="layer-input">
              <BiImageAdd style={{color: "white", fontSize: "20px"}} />
                  <input type="file" id="file" accept="image/*"></input>
                  <label for="file"> choose a photo</label>
                 
                  
                  </div>
          </div>
          </div> 
      </Col>
  <Col md={8} style={{marginTop:"16px"}}>
  <Card.Body>
  {/* <Card.Title>Card Title</Card.Title> */}
  <Row>
      <Col md={3} className="info"> <p>Name</p> </Col>
      <Col md={6} className="Detail"><p>{name}</p></Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>Email</p> </Col>
      <Col md={6} className="Detail"><p> {email}</p></Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>Address</p> </Col>
      <Col md={6} className="Detail"><p> {address}</p></Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>specialist</p> </Col>
      <Col md={6} className="Detail"><p>{specialist}</p></Col>
  </Row>
  <Row style={{justifyContent:"flex-end"}}><button  onClick={handleShow}  className="Editbtn btn">Edit profile</button></Row>
  
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      
            <Editform editstate={editstate} nameslist={nameslist}/>
     
      
    </Modal>
</Card.Body>
 </Col>
</Row>


</Card>


</div> )
       
    )
    
    return (
        <div>
                {cards}
        </div>
        
    )
}

export default Cardprofile
