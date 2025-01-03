import { useForm } from '@inertiajs/react'
import React from 'react'
import DangerButton from '../button/DangerButton';
import Swal from 'sweetalert2';

function ConfirmDeleteButton({ id, routeName }) {

    const { delete: destroy } = useForm();

    const handleDelete = () => {
        // if (window.confirm('Tem centeza que deseja deletar esse usuario?')) {
        //     destroy(route(routeName, id));
        // }

        Swal.fire({
            title: "There's a hundred",
            text: "You will not be able to reverse this action",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#3b82f6",
            confirmButtonText: "Yes, delete",
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route(routeName, id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The record was successfully deleted.",
                            icon: "success"
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while trying to delete the record.",
                            icon: "error"
                        });
                    }
                })
            }
        });
    }

    return (
        <>
            <DangerButton className='ms-1 text-sm' onClick={handleDelete}>
                Delete
            </DangerButton>
        </>
    )
}

export default ConfirmDeleteButton