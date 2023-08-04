import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export function SearchBar() {

    return (
        <>
            <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </Col>
                </Row>
            </Form>
        </>
    );
}
