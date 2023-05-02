import React, { useState } from 'react'
import { selectUser } from '../State/Person.Slice'
import { useAppSelector } from '../Redux/store'
import { useEffect } from 'react'
import { RegisterProps } from './Register.model'
import { deleteUser, getAllPersonData, updateUser } from '../State/Person.action'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import RegisterForm from '../components/Register/RegisterComp'

const Result = () => {
    const [edit, setEdit] = useState<boolean>(false)

    const [personData, setPersonData] = useState<any>([])
    const dispatch = useDispatch()
    const userData = useAppSelector(selectUser)
    const [showModal, setShowModal] = useState(false)
    const [showUpdateModal, setUpdateShowModal] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<number>(0);
    const [updateItemId, setUpdateItemId] = useState<number>(0);
    console.log('userData :>> ', userData);

    useEffect(() => {
        dispatch(getAllPersonData())
    }, [])

    useEffect(() => {
        if (userData.getAllPersonInitialState?.data) {
            console.log('userData.getAllPersonInitialState?.data :>> ', userData.getAllPersonInitialState?.data);
            setPersonData(userData.getAllPersonInitialState?.data)
        }
    }, [userData.getAllPersonInitialState?.data])


    const handleDelete = (id: number) => {
        setDeleteItemId(id); // set the ID of the item to be deleted in state
        setShowModal(true); // show the modal
    };

    const handleDeleteConfirmed = () => {
        setShowModal(false); // hide the modal
        dispatch(deleteUser(deleteItemId)).then(() => {
            dispatch(getAllPersonData());
        });
    };


    const handleUpdate = (id: number) => {
        setEdit(true)
        setUpdateItemId(id);
        setUpdateShowModal(true)
    }
    const onSubmit = (values: RegisterProps) => {
        if (edit === true) {
            console.log();
            dispatch(updateUser({ ...values })).then(() => {
                dispatch(getAllPersonData())
            })
            setUpdateShowModal(false)
        } else {

        }
    };

    return (
        <>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-10">
                        <h2 className='my-5'>User Data Table</h2>
                        <table className='table table-striped table-dark'>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Password
                                    </th>
                                    <th>
                                        Confirm Password
                                    </th>
                                    <th>
                                        Mode of Contact
                                    </th>
                                    <th>
                                        Skills
                                    </th>
                                    <th>
                                        Phone Number
                                    </th>
                                </tr>
                            </thead>
                            {
                                personData.data?.map((item: RegisterProps, index: number) => {

                                    return (
                                        <React.Fragment key={index}>
                                            <tbody key={index}>
                                                <tr>
                                                    <td>
                                                        {item.id}
                                                    </td>
                                                    <td>
                                                        {item.email}
                                                    </td>
                                                    <td>
                                                        {item.password}
                                                    </td>
                                                    <td>
                                                        {item.mode_of_contact}
                                                    </td>
                                                    <td>
                                                        {item.confirm_password}
                                                    </td>
                                                    <td>
                                                        {item.skills}
                                                    </td>
                                                    <td>
                                                        {item.phone}
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-primary' onClick={() => handleDelete(item.id)}>Delete</button></td>
                                                    <td>
                                                        <button className='btn btn-primary' onClick={() => handleUpdate(item.id)}>Update</button></td>
                                                </tr>
                                            </tbody>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </table>
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete Item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                                <Button variant="primary" onClick={handleDeleteConfirmed}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showUpdateModal} onHide={() => setUpdateShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Items</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><RegisterForm id={updateItemId} onSubmit={onSubmit} /></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setUpdateShowModal(false)}>
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
