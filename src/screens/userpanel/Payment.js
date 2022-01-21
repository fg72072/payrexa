import PaymentDetail from "./PaymentDetail"

function Payment(props){
    return (
        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="mt-3 mb-3">Payment</h3>
                </div>
                <PaymentDetail/>
            </div>
        </div>
        </>
    )
}
export default Payment