import React from "react";
import ContactItem from "../contact-item";
import Filter from "../filter";
import AddContactItemModal from "../add-contact-item-modal";

import styles from "./style.module.scss";

const mockApiData = [
    {
        name: "Mahsa",
        familyName: "Pahlevani",
        phoneNumber: "+98912123456",
        ID: 0,
    },
    {
        name: "Ali",
        familyName: "Malek",
        phoneNumber: "+98912123456",
        ID: 1,
    },
    {
        name: "Sara",
        familyName: "Eyvani",
        phoneNumber: "+98912123456",
        ID: 2,
    },
    {
        name: "Maral",
        familyName: "Eyvani",
        phoneNumber: "+98912123456",
        ID: 3,
    }
];

const fetchFromMockApiEndPoint = (shouldShowError = false) =>
    new Promise((resolvePromise, rejectPromise) =>
        setTimeout(() => {
            return !shouldShowError
                ? resolvePromise(mockApiData)
                : rejectPromise(new Error("Mock API failed"));
        }, 1500)
    );

const sampleContactData = {
    name: "Ali",
    familyName: "Malek",
    phoneNumber: "+98912123456",
    ID: 12,
};

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactsList: [],
            apiData: []
        };
    }
    componentDidMount() {
        // TODO:  start api fetch here
        console.log(1)
        fetchFromMockApiEndPoint().then((mockApiData) => {
            this.setState({
                contactsList: [...mockApiData],
                apiData: [...mockApiData]
            })
        }).catch();
    }

    handleFilter = (value) => {
        const reg = RegExp(value);
        const list = this.state.apiData.filter((item) =>
            (reg.test(item.name.toLowerCase()) === true) ||
            (reg.test(item.phoneNumber) === true)
        );

        this.setState(() => {
            return {
                contactsList: [...list]
            };
        });
    }

    sendContactDataToServer = (contactData) => {
        const contactId = this.state.apiData.length;
        contactData.ID = contactId;
        this.setState((prevState) => {
            return {
                apiData: [...prevState.apiData, contactData],
                contactsList: [...prevState.contactsList, contactData]
            }
        })
    }

    render() {
        const { contactsList } = this.state;
        return (
            <div className={styles.listWrapper}>
                <Filter passDataToParent={this.handleFilter} />
                {contactsList.map((item) => <ContactItem key={item.ID} contactData={item} />)}
                <AddContactItemModal sendContactDataToParent={this.sendContactDataToServer} />
            </div>
        );
    }
}

export default ContactList;
