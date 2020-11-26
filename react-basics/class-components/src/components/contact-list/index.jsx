import React from "react";
import ContactItem from "../contact-item";
import Filter from "../filter";
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
        };
    }
    componentDidMount() {
        // TODO:  start api fetch here
        fetchFromMockApiEndPoint().then((mockApiData) => {
            this.setState({
                contactsList: [...mockApiData]
            }, () => this.contactsList = this.state.contactsList)
        })
    }

    handleFilter = (value) => {
        const reg = RegExp(value);
        const list = this.contactsList.filter((item) =>
            (reg.test(item.name.toLowerCase()) === true) ||
            (reg.test(item.phoneNumber) === true)
        );

        this.setState(() => {
            return {
                contactsList: [...list]
            };
        });
    }

    render() {
        const { contactsList } = this.state;
        return (
            <div className={styles.listWrapper}>
                <Filter passDataToParent={this.handleFilter} />
                {contactsList.map((item, index) => <ContactItem key={index} contactData={item} />)}
            </div>
        );
    }
}

export default ContactList;
