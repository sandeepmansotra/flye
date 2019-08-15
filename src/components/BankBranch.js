import React, { Component } from "react";
import { connect } from "react-redux";
import { favBank } from "../actions";
import "../styles/index.css";

class BankBranch extends Component {
  constructor() {
    super();

    this.state = {
      favourited: false
    };
  }
  favourite(bank) {
    this.props.favBank(bank);
    this.setState({ favourited: true });
  }
  render() {
    let { bank } = this.props;
    return (
      <tr>
        {this.props.favouriteButton ? (
          this.state.favourited ? (
            <td className="star">&#9733;</td>
          ) : (
            <td className="star" onClick={() => this.favourite(bank)}>
              {" "}
              &#9734;
            </td>
          )
        ) : (
          <td />
        )}
        <td>{bank.bank_name}</td>
        <td>{bank.ifsc}</td>
        <td>{bank.branch}</td>
        <td>{bank.city}</td>
        <td>{bank.district}</td>
        <td>{bank.state}</td>
        <td>{bank.address}</td>
      </tr>
    );
  }
}

export default connect(
  null,
  { favBank }
)(BankBranch);
