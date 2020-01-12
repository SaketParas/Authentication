import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div class="card text-center mt-5">
                    <div class="card-header">
                        
                    </div>
                    <div class="card-body">
                        <Link to="/Add" class="btn btn-outline-success mt-3 ml-5">Add Vehicle</Link>
                        <Link to="/Table" class="btn btn-outline-success mt-3 ml-5">View All Vehicle</Link>
                    </div>
                    <div class="card-footer text-muted">
                       
                    </div>
                </div>

            </div>

        )
    }
}
export default Home