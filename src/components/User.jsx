// components/User.jsx
import React from 'react';
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';

const User = (props) => {
    return (
        <tr>
            <td>{props.sr}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>
                <button onClick={props.onEdit} className="text-blue-500">
                    <RiEdit2Line />
                </button>
                <button onClick={props.onDelete} className="text-red-500 ml-2">
                    <RiDeleteBin6Line />
                </button>
            </td>
        </tr>
    );
};

export default User;
