import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export function SearchBar({updateFilter}) {
    return (
        <div className="d-flex justify-content-end my-2">
            <Form inline> 
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    onChange={(e)=>updateFilter(e.target.value)}
                    />
            </Form>
        </div>
    );
}
