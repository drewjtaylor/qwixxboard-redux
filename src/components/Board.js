import { Container, Col, Row } from "react-bootstrap";
import NumberBox from "./NumberBox";
import TotalsBox from "./TotalsBox";
import PenaltyBox from "./PenaltyBox";

import { useSelector, useDispatch } from "react-redux";
import { toggleBoxValue, resetBoard } from "../utils/scoreSlice";

const Board = () => {
    const state = useSelector((state) => state);
    const {score} = state;
    const {row1, row2, row3, row4, penalties} = score;
    const dispatch = useDispatch();


    function scoreRow(rowArray) { //function takes the array for a given row
        let score = 0;
        let numberofmarks = rowArray.reduce((prev, current) => prev + current);  //reducer supplies us with the total of "marks" (boxes that have a value of 1)
        while (numberofmarks > 0) {  //for however many have a "1", we add the total number of marks to the score for this row
            score += numberofmarks;
            numberofmarks--;
        };
        return score  // returning the final score
    }

    return (
    <Container className="light-gray-bg">
      <Row className="main-red p-2">
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 0}))} className='main-red-text'>
                <NumberBox value={row1[0]} display={row1[0]}/>
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 1}))} className='main-red-text'>
                <NumberBox value={row1[1]} display={row1[1]}/>
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 2}))} className='main-red-text'>
                <NumberBox value={row1[2]} display={row1[2]}/>
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 3}))} className='main-red-text'>
                <NumberBox value={row1[3]} display={row1[3]}/>
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 4}))} className='main-red-text'>
                <NumberBox value={row1[4]} display={row1[4]}/>
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 5}))} className='main-red-text'>
                <NumberBox value={row1[5]} display={row1[5]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => dispatch(toggleBoxValue({rowSpot: 'row1', numberIndex: 6}))} className='main-red-text'>
                <NumberBox value={row1[6]} display="8" />
            </div>
        </Col>
      </Row>

        <Row>
            <Col>Penalties</Col>
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

      <Row className="dark-gray-bg">
        <button onClick={() => dispatch(resetBoard())}>Reset Board</button>
      </Row>
    </Container>
  );
};

export default Board;
