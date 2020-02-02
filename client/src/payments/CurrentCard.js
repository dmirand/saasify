import React from 'react';
import _get from 'lodash/get';
import Card from 'react-bootstrap/Card';

export default class CurrentCard extends React.Component {
    render() {
        const {
            card
        } = this.props;

        const brand = _get(card, 'brand');
        const exp_month = _get(card, 'exp_month');
        const exp_year = _get(card, 'exp_year');
        const last4 = _get(card, 'last4');

        return (
            <Card>
              <Card.Body>
                <h4>Your card details</h4>
                <div>
                    <div>Brand</div>
                    <p>{brand}</p>
                    <div>Expiry Month</div>
                    <p>{exp_month}</p>
                    <div>Expiry Year</div>
                    <p>{exp_year}</p>
                    <div>Last 4</div>
                    <p>{last4}</p>
                </div>
              </Card.Body>
            </Card>
            
        );
    }
}
