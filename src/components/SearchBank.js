import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { bankBranch } from "../actions";
import { connect } from "react-redux";

class SearchBank extends Component {
  constructor() {
    super();

    this.state = {
      city: ""
    };
  }

  search() {
    let { city } = this.state;
    const url = `https://vast-shore-74260.herokuapp.com/banks?city=${city}`;

    console.log("state", this.state, "url", url);

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.props.bankBranch(json);
      });
  }
  render() {
    return (
      <div>
        <h1>Search Banks</h1>
        <Form inline>
          <Form.Group>
            <Form.Label>Enter City: </Form.Label>{" "}
            <Form.Control
              type="text"
              style={{ textTransform: "uppercase" }}
              placeholder="MUMBAI"
              onChangeCapture={event =>
                this.setState({ city: event.target.value.toUpperCase() })
              }
              onClick={() => this.search()}
            />{" "}
          </Form.Group>
          <Button onClick={() => this.search()}>Search</Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { bankBranch }
)(SearchBank);
