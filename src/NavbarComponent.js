import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const NavbarComponent = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchMovie = async (e) => {
    e.preventDefault();
    const API_KEY = "d7d630e0f32c6668d8c7a6fb3955a5b6";
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setSearchResults(data.results);
      navigate("/search");
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/" className="text-white" style={{ fontWeight: 'bold' }}>MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/top-rated" className="text-white">Top Rated</Nav.Link>
            <Nav.Link as={Link} to="/upcoming" className="text-white">Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            <FormControl
              type="search"
              placeholder="Search Movies"
              className="me-2"
              aria-label="search"
              value={query}
              onChange={changeHandler}
            />
            <Button variant="secondary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
