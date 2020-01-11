import React, { Component } from 'react';
import {connect} from 'react-redux';
import {company_data} from './../Redux/Action';
import { Link} from 'react-router-dom';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model:'',
            type:'',
            mileage:'',
            speed:'',
            cost:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000)*1000);
        let data = {
            model:this.state.model,
            type:this.state.type,
            mileage:this.state.mileage,
            speed:this.state.speed,
            cost:this.state.cost,
            company_id: random_number
        }
        console.log(data);
        this.props.form_data(data);
    }
    
    render() {
        return (
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        <h5>Enter company Details</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    Model Name :<input type="text" class="form-control" placeholder="Model Name" name="model" value={this.state.model} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Vehicle Type :<input type="text" class="form-control" placeholder=" Vehicle Type" name="type" value={this.state.type} onChange={this.input_change}/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Mileage:<input type="text" class="form-control" placeholder="Mileage" name="mileage" value={this.state.mileage} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                   Top Speed :<input type="text" class="form-control" placeholder="Top Speed" name="speed" value={this.state.speed} onChange={this.input_change}/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Cost :<input type="text" class="form-control" placeholder="Cost" name="cost" value={this.state.cost} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                   Top Speed :<input type="text" class="form-control" placeholder="Top Speed" name="speed" value={this.state.speed} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success mt-3">Add Details</button>
                        </form>
                    </div>
                    
                    <div class="card-footer text-muted">
                    <Link to="/Table" class="btn btn-outline-success mt-3 ml-5">View All Vehicle</Link>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        form_data:(data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(Add) 