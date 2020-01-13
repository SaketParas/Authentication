import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from './../Redux/Action';
import { Link ,Redirect} from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: '',
            type: '',
            mileage: '',
            speed: '',
            cost: '',
            sales: '',
            id: ''
        }
    }
    componentDidMount() {
        this.props.Editdata.stored_data.map(e => {
            if (e.id == this.props.match.params.id) {
                this.setState({ model: e.model, type: e.type, mileage: e.mileage, speed: e.speed, cost: e.cost,sales: e.sales, id: e.id })
            }
        })
    }

    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    input_submit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.props.update(this.state)
        alert('sucessfull')
        this.props.history.push('/Table')
    }
    render() {
        return (
            <React.Fragment >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="card mt-5">
                                <div class="card-body">
                                    <h3>Edit company details</h3>
                                    <form onSubmit={this.input_submit}>
                                        <div class="row">
                                            <div class="col">
                                                Model Name :<input type="text" class="form-control" placeholder="Model Name" name="model" value={this.state.model} onChange={this.input_change} />
                                            </div>
                                            <div class="col">
                                                Vehicle Type :<input type="text" class="form-control" placeholder=" Vehicle Type" name="type" value={this.state.type} onChange={this.input_change} />
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col">
                                                Mileage:<input type="text" class="form-control" placeholder="Mileage" name="mileage" value={this.state.mileage} onChange={this.input_change} />
                                            </div>
                                            <div class="col">
                                                Top Speed :<input type="text" class="form-control" placeholder="Top Speed" name="speed" value={this.state.speed} onChange={this.input_change} />
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col">
                                                Cost :<input type="text" class="form-control" placeholder="Cost" name="cost" value={this.state.cost} onChange={this.input_change} />
                                            </div>
                                            <div class="col">
                                                sales in units for FY19-20:<input type="text" class="form-control" placeholder="sales in units for FY19-20" name="sales" value={this.state.sales} onChange={this.input_change} />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-outline-success mt-3">Update</button>
                                        <Link to="/Table" class="btn btn-outline-danger mt-3 ml-5">Cancle</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Editdata: state.comments
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        update: (send) => dispatch(edit(send))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Edit)