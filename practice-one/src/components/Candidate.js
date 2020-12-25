import { Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'

function Candidate({ firstName, lastName }) {

    const sucessBtnHandler = () => {
        toast.success('Hi User...', {
            position: "top-center"
        })
    }

    const failureBtnHandler = () => {
        toast.error('Hi User...', {
            position: "top-center"
        })
    }

    return (

        <div style={{ background: "orange", padding: 10 }}>
            <p><h3>{firstName} </h3><h4>{lastName}</h4></p>
            <Button color="primary" onClick={sucessBtnHandler}>
                Hi {firstName}, Click Me to check the Sucess toast message
            </Button>
            <Button color="primary" onClick={failureBtnHandler}>
                Hi {firstName}, Click Me to check the Failure toast message
            </Button>
            <ToastContainer />
            <hr />
        </div>
    )
}

export default Candidate;