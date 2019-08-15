import React, { Component } from "react";
import { connect } from "react-redux";
import BankBranch from "./BankBranch";
import Table from "react-bootstrap/Table";
import "../styles/index.css";
import { Link } from "react-router-dom";

class FavList extends Component {
  render() {
    return (
      <div>
        <h4 className="link">
          {" "}
          <Link to="/">Home</Link>{" "}
        </h4>
        <h3>Favourite Banks</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>FAV</th>
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
            {this.props.favBank.map((bank, index) => {
              return (
                <BankBranch key={index} bank={bank} favouriteButton={false} />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    favBank: state.favBank
  };
}

export default connect(
  mapStateToProps,
  null
)(FavList);
