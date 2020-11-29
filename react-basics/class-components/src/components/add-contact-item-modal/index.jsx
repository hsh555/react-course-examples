import React from 'react';
import './style.css';

class AddContactItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    handleShowModal = () => {
        this.setState({
            showModal: true
        });
    }

    handleHideModal = () => {
        this.setState({
            showModal: false
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let contactData = {
            name: e.target.childNodes[0].value,
            familyName: e.target.childNodes[1].value,
            phoneNumber: e.target.childNodes[2].value,
        }
        this.props.sendContactDataToParent(contactData);
        this.setState({
            showModal: false
        });
    }


    modalContent = () => {
        return (
            <div className="modal-add-contact-item">
                <div className="modal-inner">
                    <span className='modal-close' onClick={this.handleHideModal}>
                        <i className="fa fa-close"></i>
                    </span>
                    <div className="modal-content">
                        <h3 className="form-title">Add a new contact</h3>
                        <form onSubmit={this.handleOnSubmit}>
                            <input type="text" name="name" placeholder="name..." />
                            <input type="text" name="familyName" placeholder="family name..." />
                            <input type="text" name="phoneNumber" placeholder="phone Number..." />
                            <button>Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let { showModal } = this.state;
        return (
            <React.Fragment>
                <div className="add-new-contact-icon" onClick={this.handleShowModal}><i className="fa fa-plus"></i></div>
                {showModal && this.modalContent()}
            </React.Fragment>
        )
    }
}

export default AddContactItemModal;