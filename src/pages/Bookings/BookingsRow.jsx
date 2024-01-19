import { MdDelete } from "react-icons/md";
const BookingsRow = ({ book, handleDelete, handleApprove }) => {
    const { customerName, date, email, img, service, _id, status } = book;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-ghost text-lg text-custom">
                        <MdDelete />
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{customerName}</div>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{date}</td>
            <th>
                {status === 'Approved' ? <button className="btn btn-ghost btn-xs" > Approved</button> : <button onClick={() => handleApprove(_id)} className="btn btn-ghost btn-xs">Pending</button>}

            </th>
        </tr >
    );
};

export default BookingsRow;