import React from 'react';
import { Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_TRANSACTIONSUSER } from "../utils/queries";

const Statement = () => {

    const { loading, data } = useQuery(QUERY_TRANSACTIONSUSER, {
        variables: { username:  Auth.getProfile().data.username },
    });    

    let totalAmount = 0;
    let totalFee = 0;

    if (!Auth.loggedIn()) {
        return <Redirect to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (data){
        data.transactionsUser.forEach(trx => {
            totalAmount += parseFloat(trx.amount);
            totalFee += parseFloat(trx.fee);
        })            
    }

    return (
        <div className="statement-container" >
            <h4>Transaction History for {Auth.getProfile().data.username} </h4>

            <div className="statement-grid">
                <span className="statement-item-head">Date</span>
                <span className="statement-item-head">Author</span>
                <span className="statement-item-head">Resource</span>
                <span className="statement-item-head">Payment to Author</span>
                <span className="statement-item-head">Fee amount</span>

                {data.transactionsUser.map((trx) => (
                    // <div>
                    <>
                        <span className="statement-item-line">{trx.dateCreated}</span>
                        <span className="statement-item-line">{trx.username}</span>
                        <span className="statement-item-line">{trx.resource_name}</span>
                        <span className="statement-item-line">${trx.amount.toFixed(2)}</span>
                        <span className="statement-item-line">${trx.fee.toFixed(2)}</span>
                    </>
                    // </div>
                ))}

                <span className="statement-total">Total:</span>
                <span className="statement-total-amounts">${totalAmount.toFixed(2)}</span>
                <span className="statement-total-amounts">${totalFee.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Statement;             
