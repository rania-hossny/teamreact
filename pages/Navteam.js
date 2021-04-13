import React from 'react'
import { Nav } from 'react-bootstrap'

const Navteam = () => {
    return (
        <div>
            <Nav variant="pills" defaultActiveKey="#first" className="navteam">
             <Nav.Link href="#disabled" disabled>
             Team Name
        </Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/Teamcontent/:id">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/files">Files</Nav.Link>
                </Nav.Item>
                </Nav>
        </div>
    )
}

export default Navteam
