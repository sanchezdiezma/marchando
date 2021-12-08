import {Component, useState} from 'react'
import RangeSlider from 'react-bootstrap-range-slider'

class Step extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.initialValue
        }
    }

    handleSlider = (e) => this.setState({value: e.target.value})

    render() {
        return (
            <RangeSlider
                value={this.state.value}
                onChange={this.handleSlider}
                step={this.props.step}
            />
        );
}
};

export default Step