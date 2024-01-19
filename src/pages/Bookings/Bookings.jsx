import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `https://globe-tour-server-raisul227.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);


    const handleDelete = (id) => {
        fetch(`https://globe-tour-server-raisul227.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            if (data.deletedCount > 0) {
                                const remaining = bookings.filter(book => book._id !== id);
                                setBookings(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        }
                    });
                }
            })
    };

    const handleApprove = (id) => {
        fetch(`https://globe-tour-server-raisul227.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(book => book._id !== id);
                    const approved = bookings.find(book => book._id === id);
                    approved.status = 'Approved';
                    const newBookings = [approved, ...remaining];
                    setBookings(newBookings);
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Services</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(book => <BookingsRow
                            key={book._id}
                            book={book}
                            handleDelete={handleDelete}
                            handleApprove={handleApprove}
                        ></BookingsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;