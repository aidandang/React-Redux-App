import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CharacterCard from './CharacterCard';
// import redux components
import { connect } from 'react-redux';
import { getCharacters } from '../actions';
import PaginationBar from './PaginationBar';

// import hooks
import { useEffect } from 'react';

const mapStateToProps = state => ({
  characters: state.characters,
  pages: parseInt(state.pages),
  error: state.error,
  isFetching: state.isFetching
});

const Characters = props => {
  console.log(props.characters);

  useEffect(() => {
    props.getCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <Container className="mt-1 mb-5">
      <Row>
        <Col className="title m-5">
          <h1 className="display-4 text-center">THE RICK AND MORTY</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mb-1">
        </Col>
      </Row>
      <Row className="justify-content-center">
        {/* <PaginationBar pages={props.pages} itemLimit={5}/> */}
      </Row>
      <Row className="mt-3">
        {props.characters.length > 0
          ? props.characters.map(char => <CharacterCard character={char} key={char.created}/>) 
          : <div className='text-center'>Loading...</div>  
        }
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, { getCharacters })(Characters);