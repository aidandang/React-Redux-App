import React, { useState } from 'react';
import { Form, Input, Label, Button, Col, Row } from "reactstrap";
import queryString from 'query-string';

export default function FilterForm({ route }) {
  const { push } = route.history;
  const url = route.location.pathname;
  const [formData, setFormData] = useState({
    status: '',
    gender: '',
    species: '',
    name: '',
    type: ''
  })

  const queryHandler = (url, query) => {
    const keys = Object.keys(query).filter(key => query[key] !== '');
    const filterQuery= {};
    keys.forEach(key => filterQuery[key] = query[key]);
    return queryString.stringifyUrl({url: url, query: filterQuery})
  }

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const resetHandler = () => {
    setFormData({...formData,
      status: '',
      gender: '',
      species: '',
      name: '',
      type: ''
    });
  }

  return (
    <Form>
      <Row className="justify-content-center">
        <Col md={4} className="mt-2">
          <Label htmlFor="status">Status:</Label>
          <Input
            type="select" 
            name="status"
            value={formData.status}
            onChange={onInputChange}
          >
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </Input>
        </Col>
        <Col md={4} className="mt-2">
          <Label htmlFor="gender">Gender:</Label>
          <Input
            type="select"
            name="gender"
            value={formData.gender} 
            onChange={onInputChange}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </Input>
        </Col>
        <Col md={4} className="mt-2">
          <Label htmlFor="species">Species:</Label>
          <Input
            type="select"
            name="species"
            value={formData.species} 
            onChange={onInputChange}
          >
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Animal">Animal</option>
            <option value="Mytholog">Mytholog</option>
            <option value="Vampire">Vampire</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Disease">Disease</option>
            <option value="Parasiten">Parasite</option>
            <option value="unknown">unknown</option>
          </Input>
        </Col>
        <Col md={4} className="mt-2">
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text" 
            name="name"
            value={formData.name}
            onChange={onInputChange}
          >
          </Input>
        </Col>
        <Col md={4} className="mt-2">
          <Label htmlFor="type">Type:</Label>
          <Input
            type="text" 
            name="type"
            value={formData.type} 
            onChange={onInputChange}
          >
          </Input>
        </Col>
        <Col md={4} className="d-flex align-items-end mt-2 pt-2">
          <Button onClick={() => push(queryHandler(url, formData))}>Filter</Button>
          <Button onClick={() => resetHandler()} className="ml-4">Reset</Button>
        </Col>
      </Row>
    </Form>
  )
}