import React from 'react';

const Allorder = (props) => {
    const { _id, status, mail } = props.allorders;
    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{mail}</td>
                {
                    (status === "pending") ?
                        <>
                            <td className="fw-bold">{status}</td>
                            <td><button onClick={() => props.handelAcceptOrder(_id)} className="fw-bold bg-primary text-white">Accept</button> / <button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i className="fas fa-trash-alt"></i></button></td></>
                        :
                        <>
                            <td className="fw-bold text-success">{status}</td>
                            <td><button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i className="fas fa-trash-alt"></i></button></td>
                        </>
                }
            </tr>
        </>
    );
};

export default Allorder;