import React from 'react';
import styles from './style.module.css';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleOnChange = (e) => {
        let value = e.target.value.toLowerCase();

        const charsList = ['*', '+', '(', ')', '#', '[', ']', '\\', '|', '?'];
        for (let char of value) {
            if (charsList.includes(char)) {
                value = value.replace(char, `\\${char}`)
            } 
        }

        this.setState({
            inputValue: value
        }, () => this.props.passDataToParent(this.state.inputValue))
    }

    render() {
        return (
            <input type="text" className={styles.filterInput}
                placeholder="filter contacts..." onChange={this.handleOnChange} />
        );
    }
}

export default Filter;