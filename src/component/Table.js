import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.add.stored_data)
        this.state.final_data = this.props.add.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        //console.log(pagination_data);
        let show_user = this.props.add.stored_data.map(e => {
            return(
                <tr>
                    <th scope="row">{e.model}</th>
                    <td>{e.type}</td>
                    <td>{e.mileage}</td>
                    <td>{e.speed}</td>
                    <td>{e.cost}</td>
                    <td>{e.sales}</td>
                    <td>Mark</td>
                    <td>Otto</td>
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
                        2 days ago
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
export default connect(mapStateToProps)(Table) 