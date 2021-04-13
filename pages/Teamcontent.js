import React from 'react'

import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Files from './Files';
import Navteam from './Navteam';
import Posts from './Posts';


const Teamcontent = () => {
    return (
        <div>
                <BrowserRouter>
                <Navteam/>
                <Posts/>
                <Switch>
                    {/* <Route path="/posts" component={Posts}></Route> */}
                    <Route path="/files" component={Files}></Route>
                    </Switch>
                </BrowserRouter>
        </div>
    )
}

export default Teamcontent
