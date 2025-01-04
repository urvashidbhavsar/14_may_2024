import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './top.css'

const Toplaltert = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="" className='bg-dark text-white m-0 rounded-0' onClose={() => setShow(false)} dismissible>
                <div className='text-center d-flex gap-2 align-items-center justify-content-center'>
                    <div>Session of style - Exploror best of 2024</div>
                    <button className='btn btn-outline-light rounded-pill'>Shop Now</button>
                </div>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Toplaltert;