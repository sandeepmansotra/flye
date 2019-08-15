import React, { Component } from "react";
import { connect } from "react-redux";
import BankBranch from "./BankBranch";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "../styles/index.css";
import { Link } from "react-router-dom";

class BankList extends Component {
  constructor() {
    super();

    this.state = {
      num: ""
    };
  }

  render() {
    let { num } = this.state;
    return (
      <div>
        <br />{" "}
        <h4 className="link">
          <Link to="/fav">Favourites</Link>{" "}
        </h4>
        <Form inline>
          <Form.Label>No of rows : </Form.Label>{" "}
          <select
            type="number"
            onChange={event => this.setState({ num: event.target.value })}
            value="30"
          >
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="200">200</option>
            <option value="5000">All</option>
          </select>
        </Form>
        <h3>Banks List: </h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fav</th>
              <th>Bank Name</th>
              <th>IFSC Code</th>
              <th>Branch</th>
              <th>City</th>
              <th>District</th>
              <th>State</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.banks.slice(0, num || 20).map((bank, index) => {
              return (
                <BankBranch key={index} bank={bank} favouriteButton={true} />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(BankList);
