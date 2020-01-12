import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove } from './../Redux/Action'
import { Link ,Redirect} from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            page: 1,
            per_page: 3,
        }
    }
    on_change = () => {
        let x = this.state.final_data.sort((a, b) => (a.sales - b.sales))
        this.setState({
            final_data: x
        })
    }
    on_change_desen = () => {
        let x = this.state.final_data.sort((a, b) => (b.sales - a.sales))
        this.setState({
            final_data: x
        })
    }
    handleDropDown = (e) => {
        e.preventDefault()
       this.setState({[e.target.name]:e.target.value})
    }
    handleDelete = (id) => {
        console.log(id);
        this.props.remove(id)
    }
    handle_change = (e) => {
        this.setState({ page: e })
    }

    render() {
        //console.log(this.props.add.stored_data)
        this.state.final_data = this.props.add.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        console.log(pagination_data);
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="btn btn-primary mr-1" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })
        let show_user =  pagination_data.reverse().map(e => {
            return(
                <tr>
                    <th scope="row">{e.model}</th>
                    <td>{e.type}</td>
                    <td>{e.mileage}</td>
                    <td>{e.speed}</td>
                    <td>{e.cost}</td>
                    <td>{e.sales}</td>
                    <td><Link to={`/edit/${e.id}`}>edit</Link></td>
                    <td><button onClick={() => this.handleDelete(e.id) }>Delete</button></td>
                </tr>
            )
        })
        return (
            <div>
                <div class="card text-center mt-5">
                    <div class="card-header">
                        <h3 class="text-primary">Vehicle Details</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Model Name</th>
                                    <th scope="col">Vehicle Type</th>
                                    <th scope="col">Mileage</th>
                                    <th scope="col">Top Speed</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">sales in units for FY19-20</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               {show_user}
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-muted">
                        {button}
                        <select className="form-control offset-2  btn btn-primary"style={{width:"120px"}} onChange={this.handleDropDown} name="per_page">
                                    <option value="" selected>Per Page</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                        </select>
                        <Link to="/Add" class="btn btn-outline-danger ml-5">Add Vehicle</Link>
                        <div className="mt-2">
                        Sales sort by : <button class="btn btn-outline-success" onClick={this.on_change}> High</button>
                        <button class="btn btn-outline-success ml-2" onClick={this.on_change_desen}>Low</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        remove: (send) => dispatch(remove(send))
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Table) 