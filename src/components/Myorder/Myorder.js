import React from 'react';

const Myorder = (props) => {
    const { _id, status, mail } = props.allorders;
    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{mail}</td>
                {
                    (status === "Approved") ?
                        <td className="fw-bold text-success">{status}</td> :
                        <td className="fw-bold">{status}</td>
                }
                <td><button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i className="fas fa-trash-alt"></i></button></td>


            </tr>
        </>
    );
};

export default Myorder;