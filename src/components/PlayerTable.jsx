import Container from 'react-bootstrap/Container';
import { Table } from 'reactstrap';
import players from '../data/players.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from 'react';
import { Navbar, Form, Col, Row } from 'react-bootstrap';

function PlayerTable() {
  const [drawPairs, setDrawPairs] = useState(false);
  const [drawOdd, setDrawOdd] = useState(false);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (players && players.playersData.length > 0) {
      setData(players.playersData);
      setOriginalData(players.playersData);
    }
  }, []);

  const onDrawPairs = () => {
    setDrawPairs(!drawPairs);
  };

  const onDrawOdd = () => {
    setDrawOdd(!drawOdd);
  };

  const onSlice = (actionOne) => {
    const copyData = [...originalData];
    if (actionOne) {
      setData(copyData.slice(0, 10));
    } else {
      setData(copyData.slice(10, 20));
    }
    setSearchText('');
  };

  const handleSearchChange = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);
    if (text === '') {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(player =>
        player.name.toLowerCase().includes(text) ||
        player.position.toLowerCase().includes(text)
      );
      setData(filteredData);
    }
  };

  return (
    <>
      <Container id="container_aux" className='container_class' style={{ marginTop: "70px" }}>
        <Navbar className="justify-content-left">
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleSearchChange}
                  className=""
                />
              </Col>
              <Col xs="auto">
                <Button type="button">🔎</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            style={{ marginRight: '10px' }}
            onClick={onDrawPairs}
          >
            Draw pairs
          </Button>
          <Button
            variant="secondary"
            style={{ marginRight: '10px' }}
            onClick={onDrawOdd}
          >
            Draw odd
          </Button>
          <Button
            variant="secondary"
            style={{ marginRight: '10px' }}
            onClick={() => onSlice(true)}
          >
            Get 1 to 10
          </Button>
          <Button
            variant="secondary"
            onClick={() => onSlice(false)}
          >
            Get 11 to 20
          </Button>
        </ButtonGroup>
        <Table
          borderless
          responsive
          style={{ marginTop: "10px" }}
        >
          <thead className="table_th-color" >
            <tr >
              <th>#</th>
              <th style={{ width: '400px', textAlign: 'left' }}>PLAYER</th>
              <th >POSITION</th>
              <th >GOALS</th>
              <th >AGE</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'red' }}>
            {data && data.length > 0 ?
              data.map((player, index) => (
                <tr key={index} className={drawPairs && index % 2 === 0 ? "table-primary" :
                  drawOdd && index % 2 === 1 ? "table-success" : null}>
                  <td>{player.number}</td>
                  <td style={{ textAlign: 'left' }}>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.goals}</td>
                  <td>{player.age}</td>
                </tr>
              ))
              : <tr><td colSpan="5">No data</td></tr>
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default PlayerTable;
