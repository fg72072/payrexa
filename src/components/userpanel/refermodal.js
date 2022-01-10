import { Modal,Button,InputGroup,FormControl } from "react-bootstrap";

function ReferModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Refer OBIEX Finance to your friends
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Referral Link</h5>
        <InputGroup className="mb-3">
            <FormControl
            aria-describedby="basic-addon2"
            value={"https://referral.payrexa.myvirtualland.com/TFAy"} readOnly/>
            <Button className="btn-custom-copy" id="button-addon2">
            Copy
            </Button>
        </InputGroup>
        <h5>Referral Code</h5>

        <InputGroup className="mb-3">
            <FormControl
            aria-describedby="basic-addon2"
            value={"248H6XKN"} readOnly/>
            <Button className="btn-custom-copy" id="button-addon2">
            Copy
            </Button>
        </InputGroup>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  export default ReferModal;