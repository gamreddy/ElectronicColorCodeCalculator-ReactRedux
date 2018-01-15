import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Electronic Color Code Calculator</h1>
                <p>The electronic color code is used to indicate the values or ratings of electronic components, usually for resistors, but also for capacitors, inductors, diodes and others. This web application provides a web interface for Electronic Color Code Calculator.</p>
                <Link to="https://en.wikipedia.org/wiki/Electronic_color_code" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;