import React ,{useState} from "react";
import {Col, Row ,Modal} from 'react-bootstrap';

const Editform = ({editstate,nameslist}) => {
    

    const [state,setState]=useState(nameslist);
    const handleChange=(e)=>{
        setState({...state,[e.target.id]:e.target.value});
        console.log(state);
    }

    const handleSubmit=(e)=>{
        // e.preventDefault();
        editstate([state]);
        // setState([{
        //     name:"",
        //     email:"",
        //     address:"",
        //     specialist:""}]);
    }

    return (
        <div>
            <Modal.Body>
                
            <Row>
      <Col md={3} className="info"> <p>Name</p> </Col>
      <Col md={6} className="Detail inputeffect">
          <input type="text" id="name" className="effect" onChange={handleChange} value={nameslist.name}></input>
          <span className="focus-border"></span>
          </Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>Email</p> </Col>
      <Col md={6} className="Detail">
            <input type="email" id="email" className="effect" onChange={handleChange} value={nameslist.email}></input>
            <span className="focus-border"></span>
      </Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>Address</p> </Col>
      <Col md={6} className="Detail">
          <input type="text" id="address" className="effect" onChange={handleChange} value={nameslist.address}></input>
      <span className="focus-border"></span>
      </Col>
  </Row>
  <Row>
      <Col md={3} className="info"> <p>specialist</p> </Col>
      <Col md={6} className="Detail">
          <input type="text" id="specialist" className="effect" onChange={handleChange} value={nameslist.specialist}></input>
      <span className="focus-border"></span>
      </Col>
  </Row>
  </Modal.Body>

  <Modal.Footer>
        <button className="btn savebtn" onClick={handleSubmit}>
          Save Changes
        </button>
      </Modal.Footer>
        </div>
    )
}

export default Editform
