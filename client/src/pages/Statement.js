import React from 'react';
import { Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_TRANSACTIONSUSER } from "../utils/queries";

const Statement = () => {

    const { loading, data } = useQuery(QUERY_TRANSACTIONSUSER, {
        variables: { username:  Auth.getProfile().data.username },
    });    

    if (!Auth.loggedIn()) {
        return <Redirect to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="statement-container" >
            <h4>Transaction History for {Auth.getProfile().data.username} </h4>

            <div className="statement-grid">
                <span className="statement-item-head">Date</span>
                <span className="statement-item-head">Author</span>
                <span className="statement-item-head">Resource</span>
                <span className="statement-item-head">Donation to Author</span>
                <span className="statement-item-head">Fee amount</span>

                {data.transactionsUser.map((trx) => (
                    // <div>
                    <>
                        <span className="statement-item-line">{trx.dateCreated}</span>
                        <span className="statement-item-line">{trx.username}</span>
                        <span className="statement-item-line">{trx.resource_name}</span>
                        <span className="statement-item-line">${trx.amount}</span>
                        <span className="statement-item-line">${trx.fee}</span>
                    </>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default Statement;             
