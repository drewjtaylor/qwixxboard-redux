import { useState } from 'react';
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import NumberBox from "./NumberBox";
import TotalsBox from "./TotalsBox";
import PenaltyBox from "./PenaltyBox";
import LockBox from "./LockBox";
import DiceBlock from "./DiceBlock";

import { useSelector, useDispatch } from "react-redux";
import { toggleBoxValue, resetBoard } from "../utils/scoreSlice";

import { ActionCreators } from "redux-undo";


const Board = () => {
    const [diceValues, setDiceValues] = useState({
        bluedice: 1,
        yellowdice: 1,
        greendice: 1,
        reddice: 1,
        whitedice1: 1,
        whitedice2: 1
    });

    const random6 = () => Math.floor(Math.random()*6+1);

    const rolldice = () => {
        setDiceValues({
            bluedice: random6(),
            yellowdice: random6(),
            greendice: random6(),
            reddice: random6(),
            whitedice1: random6(),
            whitedice2: random6()
    })};

    const score = useSelector((state) => state.score.present); //Pull "score" object out of present version of store
    const {row1, row2, row3, row4, penalties} = score; //Pull each property out of score so we're not typing score.row1 everywhere
    const dispatch = useDispatch();  // Standard abstraction of useDispatch()

    const scoreRow = (rowArray) => { // function takes the array for a given row (such as "row1")
        let score = 0;
        let numberofmarks = (rowArray.reduce((prev, current) => prev + current)) + rowArray[10];  // reducer supplies us with the total of "marks" (boxes that have a value of 1) and adds the last box an extra time to account for the "lock" box
        while (numberofmarks > 0) {  // for however many have a "1", we add the total number of marks to the score for this row
            score += numberofmarks;
            numberofmarks--;
        };
        return score  // returning the final score for "rowArray"
    };

    return (
    <Container className="light-gray-bg my-2">
        <Row className="main-red p-2">
            {row1.map((current, index) => {
                    return <Col key={index}>
                        <div onClick = {() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: index}))} className='main-red-text'>
                            <NumberBox value={current} display={`${index+2}`} />
                        </div>
                    </Col>
                } 
            )}
            <Col>
                <div className='main-red-text' >
                    <LockBox value={row1[10]} />
                </div>
            </Col>
        </Row>

      <Row className="main-yellow p-2">
        {row2.map((current, index) => {
                    return <Col key={index}>
                        <div onClick = {() => dispatch(toggleBoxValue({rowSpot: 'row2', numberIndex: index}))} className='main-yellow-text'>
                            <NumberBox value={current} display={`${index+2}`} />
                        </div>
                    </Col>
                }
            )}
            <Col>
                <div className='main-yellow-text' >
                    <LockBox value={row2[10]}/>
                </div>
            </Col>
        </Row>

        <Row className="main-green p-2">
        {row3.map((current, index, arr) => {
            return <Col key={index}>
                <div onClick = {() => dispatch(toggleBoxValue({rowSpot: 'row3', numberIndex: index}))} className='main-green-text'>
                    <NumberBox value={current} display={`${arr.length-index+1}`} /> {/* Makes the numbers appear 12 -> 2 instead*/}
                </div>
            </Col>
        })}
            <Col>
                <div className='main-green-text' >
                    <LockBox value={row3[10]}/>
                </div>
            </Col>
        </Row>

        <Row className="main-blue p-2">
            {row4.map((current, index, arr) => {
                    return <Col key={index}>
                        <div onClick = {() => dispatch(toggleBoxValue({rowSpot: 'row4', numberIndex: index}))} className='main-blue-text'>
                            <NumberBox value={current} display={`${arr.length-index+1}`} />
                        </div>
                    </Col>
                    }
                )
            }
            <Col>
                <div className='main-blue-text' >
                    <LockBox value={row4[10]}/>
                </div>
            </Col>
        </Row>

        Score table:
        <Table className='score-table'>
            <tr>
                <td>1x</td>
                <td>2x</td>
                <td>3x</td>
                <td>4x</td>
                <td>5x</td>
                <td>6x</td>
                <td>7x</td>
                <td>8x</td>
                <td>9x</td>
                <td>10x</td>
                <td>11x</td>
                <td>12x</td>
            </tr>
            <tr>
                <td>1</td>
                <td>3</td>
                <td>6</td>
                <td>10</td>
                <td>15</td>
                <td>21</td>
                <td>28</td>
                <td>36</td>
                <td>45</td>
                <td>55</td>
                <td>66</td>
                <td>78</td>
            </tr>
        </Table>
        <Row>
            <Col>Penalties:</Col>
            <Col>
                <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'penalties', numberIndex: 0}))}>
                    <PenaltyBox value={penalties[0]}/>
                </div>
            </Col>
            <Col>
                <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'penalties', numberIndex: 1}))}>
                    <PenaltyBox value={penalties[1]}/>
                </div>
            </Col>
            <Col>
                <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'penalties', numberIndex: 2}))}>
                    <PenaltyBox value={penalties[2]}/>
                </div>
            </Col>
            <Col>
                <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'penalties', numberIndex: 3}))}>
                    <PenaltyBox value={penalties[3]}/>
                </div>
            </Col>
        </Row>

      <Row>
        <Col>
            Row 1:<TotalsBox value={scoreRow(row1)} />
        </Col>
        <Col>
            Row 2:<TotalsBox value={scoreRow(row2)} />
        </Col>
        <Col>
            Row 3:<TotalsBox value={scoreRow(row3)} />
        </Col>
        <Col>
            Row 4:<TotalsBox value={scoreRow(row4)} />
        </Col>
        <Col>Total: <TotalsBox value={scoreRow(row1) + scoreRow(row2) + scoreRow(row3) + scoreRow(row4) - (5*(penalties[0] + penalties[1] + penalties[2] + penalties[3]))}/></Col>
      </Row>

      <Row className="dark-gray-bg my-2">
        <button onClick={() => dispatch(resetBoard())}>Reset Board</button>
      </Row>
      <Row className="justify-content-center">
        <Col xs={1}>
            <div onClick={() => dispatch(ActionCreators.undo())}>
                <Button>Undo</Button>
            </div>
        </Col>
        <Col xs={1}>
            <div onClick={() => dispatch(ActionCreators.redo())}>
                <Button>Redo</Button>
            </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={1}>
            <div onClick={rolldice} className='pseudo-button mx-auto my-3'><Button>Roll the dice</Button></div>
        </Col>
      </Row>
      <Row>
        <Col>
            <DiceBlock color='red' value={diceValues.reddice}/>
        </Col>
        <Col>
            <DiceBlock color='yellow' value={diceValues.yellowdice}/>
        </Col>
        <Col>
            <DiceBlock color='green' value={diceValues.greendice}/>
        </Col>
        <Col>
            <DiceBlock color='blue' value={diceValues.bluedice}/>
        </Col>
        <Col>
            <DiceBlock color='white' value={diceValues.whitedice1}/>
        </Col>
        <Col>
            <DiceBlock color='white' value={diceValues.whitedice2}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
