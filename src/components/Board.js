import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import NumberBox from "./NumberBox";
import TotalsBox from "./TotalsBox";

import { useSelector, useDispatch } from "react-redux";
import { toggleBoxValue, resetBoard } from "../utils/scoreSlice";

const Board = () => {
    const state = useSelector((state) => state);
    const {score} = state;
    const {row1, row2, row3, row4, penalties} = score;
    const dispatch = useDispatch();
    
    const [row1box1, setrow1box1] = useState(0);
    const [row1box2, setrow1box2] = useState(0);
    const [row1box3, setrow1box3] = useState(0);
    const [row1box4, setrow1box4] = useState(0);
    const [row1box5, setrow1box5] = useState(0);
    const [row1box6, setrow1box6] = useState(0);
    const [row1box7, setrow1box7] = useState(0);
    const [row1box8, setrow1box8] = useState(0);
    const [row1box9, setrow1box9] = useState(0);
    const [row1box10, setrow1box10] = useState(0);
    const [row1box11, setrow1box11] = useState(0);
    const [row1box12, setrow1box12] = useState(0);

    const [row2box1, setrow2box1] = useState(0);
    const [row2box2, setrow2box2] = useState(0);
    const [row2box3, setrow2box3] = useState(0);
    const [row2box4, setrow2box4] = useState(0);
    const [row2box5, setrow2box5] = useState(0);
    const [row2box6, setrow2box6] = useState(0);
    const [row2box7, setrow2box7] = useState(0);
    const [row2box8, setrow2box8] = useState(0);
    const [row2box9, setrow2box9] = useState(0);
    const [row2box10, setrow2box10] = useState(0);
    const [row2box11, setrow2box11] = useState(0);
    const [row2box12, setrow2box12] = useState(0);

    const [row3box1, setrow3box1] = useState(0);
    const [row3box2, setrow3box2] = useState(0);
    const [row3box3, setrow3box3] = useState(0);
    const [row3box4, setrow3box4] = useState(0);
    const [row3box5, setrow3box5] = useState(0);
    const [row3box6, setrow3box6] = useState(0);
    const [row3box7, setrow3box7] = useState(0);
    const [row3box8, setrow3box8] = useState(0);
    const [row3box9, setrow3box9] = useState(0);
    const [row3box10, setrow3box10] = useState(0);
    const [row3box11, setrow3box11] = useState(0);
    const [row3box12, setrow3box12] = useState(0);

    const [row4box1, setrow4box1] = useState(0);
    const [row4box2, setrow4box2] = useState(0);
    const [row4box3, setrow4box3] = useState(0);
    const [row4box4, setrow4box4] = useState(0);
    const [row4box5, setrow4box5] = useState(0);
    const [row4box6, setrow4box6] = useState(0);
    const [row4box7, setrow4box7] = useState(0);
    const [row4box8, setrow4box8] = useState(0);
    const [row4box9, setrow4box9] = useState(0);
    const [row4box10, setrow4box10] = useState(0);
    const [row4box11, setrow4box11] = useState(0);
    const [row4box12, setrow4box12] = useState(0);

    const reset = () => {
        setrow1box1(0);
        setrow1box2(0);
        setrow1box3(0);
        setrow1box4(0);
        setrow1box5(0);
        setrow1box6(0);
        setrow1box7(0);
        setrow1box8(0);
        setrow1box9(0);
        setrow1box10(0);
        setrow1box11(0);
        setrow1box12(0);
        setrow2box1(0);
        setrow2box2(0);
        setrow2box3(0);
        setrow2box4(0);
        setrow2box5(0);
        setrow2box6(0);
        setrow2box7(0);
        setrow2box8(0);
        setrow2box9(0);
        setrow2box10(0);
        setrow2box11(0);
        setrow2box12(0);
        setrow3box1(0);
        setrow3box2(0);
        setrow3box3(0);
        setrow3box4(0);
        setrow3box5(0);
        setrow3box6(0);
        setrow3box7(0);
        setrow3box8(0);
        setrow3box9(0);
        setrow3box10(0);
        setrow3box11(0);
        setrow3box12(0);
        setrow4box1(0);
        setrow4box2(0);
        setrow4box3(0);
        setrow4box4(0);
        setrow4box5(0);
        setrow4box6(0);
        setrow4box7(0);
        setrow4box8(0);
        setrow4box9(0);
        setrow4box10(0);
        setrow4box11(0);
        setrow4box12(0)
    }

    //Rows scores from state stored in array -- one for each row
    const row1Array = [row1[0], row1box2, row1box3, row1box4, row1box5, row1box6, row1box7, row1box8, row1box9, row1box10, row1box11, row1box12]
    const row2Array = [row2box1, row2box2, row2box3, row2box4, row2box5, row2box6, row2box7, row2box8, row2box9, row2box10, row2box11, row2box12]
    const row3Array = [row3box1, row3box2, row3box3, row3box4, row3box5, row3box6, row3box7, row3box8, row3box9, row3box10, row3box11, row3box12]
    const row4Array = [row4box1, row4box2, row4box3, row4box4, row4box5, row4box6, row4box7, row4box8, row4box9, row4box10, row4box11, row4box12]



    function scoreRow(rowArray) { //function takes the array for a given row
        let score = 0;
        let numberofmarks = rowArray.reduce((prev, current) => prev + current);  //reducer supplies us with the total of "marks" (boxes that have a value of 1)
        while (numberofmarks > 0) {  //for however many have a "1", we add the total number of marks to the score for this row
            score += numberofmarks;
            numberofmarks--;
        };
        return score  //returning the final score
    }

    const toggler = (value, setterFunction) => {
        if (value === 1) {
            setterFunction(0);
        } else {
            setterFunction(1);
        }
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
            <div onClick={() => toggler(row1box2, setrow1box2)} className='main-red-text'>
                <NumberBox value={row1[1]} display={row1[1]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box3, setrow1box3)} className='main-red-text'>
                <NumberBox value={row1[2]} display={row1[2]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box4, setrow1box4)} className='main-red-text'>
                <NumberBox value={row1[3]} display={row1[3]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box5, setrow1box5)} className='main-red-text'>
                <NumberBox value={row1[4]} display={row1[4]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box6, setrow1box6)} className='main-red-text'>
                <NumberBox value={row1[5]} display={row1[5]} />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box7, setrow1box7)} className='main-red-text'>
                <NumberBox value={row1[6]} display="8" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box8, setrow1box8)} className='main-red-text'>
                <NumberBox value={row1[7]} display="9" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box9, setrow1box9)} className='main-red-text'>
                <NumberBox value={row1[8]} display="10" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box10, setrow1box10)} className='main-red-text'>
                <NumberBox value={row1[9]} display="11" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box11, setrow1box11)} className='main-red-text'>
                <NumberBox value={row1[10]} display="12" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row1box12, setrow1box12)} className='main-red-text'>
                <NumberBox value={row1[11]} display="🔒" />
            </div>
        </Col>
      </Row>
      <Row className="main-yellow p-2">
        <Col>
            <div onClick={() => toggler(row2box1, setrow2box1)} className='main-yellow-text'>
                <NumberBox value={row2box1} display="2" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box2, setrow2box2)} className='main-yellow-text'>
                <NumberBox value={row2box2} display="3" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box3, setrow2box3)} className='main-yellow-text'>
                <NumberBox value={row2box3} display="4" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box4, setrow2box4)} className='main-yellow-text'>
                <NumberBox value={row2box4} display="5" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box5, setrow2box5)} className='main-yellow-text'>
                <NumberBox value={row2box5} display="6" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box6, setrow2box6)} className='main-yellow-text'>
                <NumberBox value={row2box6} display="7" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box7, setrow2box7)} className='main-yellow-text'>
                <NumberBox value={row2box7} display="8" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box8, setrow2box8)} className='main-yellow-text'>
                <NumberBox value={row2box8} display="9" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box9, setrow2box9)} className='main-yellow-text'>
                <NumberBox value={row2box9} display="10" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box10, setrow2box10)} className='main-yellow-text'>
                <NumberBox value={row2box10} display="11" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box11, setrow2box11)} className='main-yellow-text'>
                <NumberBox value={row2box11} display="12" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row2box12, setrow2box12)} className='main-yellow-text'>
                <NumberBox value={row2box12} display="🔒" />
            </div>
        </Col>
      </Row>
      <Row className="main-green p-2">
        <Col>
            <div onClick={() => toggler(row3box1, setrow3box1)} className='main-green-text'>
                <NumberBox value={row3box1} display="2" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box2, setrow3box2)} className='main-green-text'>
                <NumberBox value={row3box2} display="3" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box3, setrow3box3)} className='main-green-text'>
                <NumberBox value={row3box3} display="4" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box4, setrow3box4)} className='main-green-text'>
                <NumberBox value={row3box4} display="5" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box5, setrow3box5)} className='main-green-text'>
                <NumberBox value={row3box5} display="6" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box6, setrow3box6)} className='main-green-text'>
                <NumberBox value={row3box6} display="7" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box7, setrow3box7)} className='main-green-text'>
                <NumberBox value={row3box7} display="8" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box8, setrow3box8)} className='main-green-text'>
                <NumberBox value={row3box8} display="9" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box9, setrow3box9)} className='main-green-text'>
                <NumberBox value={row3box9} display="10" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box10, setrow3box10)} className='main-green-text'>
                <NumberBox value={row3box10} display="11" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box11, setrow3box11)} className='main-green-text'>
                <NumberBox value={row3box11} display="12" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row3box12, setrow3box12)}>
                <NumberBox value={row3box12} display="🔒" />
            </div>
        </Col>
      </Row>
      <Row className="main-blue p-2">
        <Col>
            <div onClick={() => toggler(row4box1, setrow4box1)} className='main-blue-text'>
                <NumberBox value={row4box1} display="2" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box2, setrow4box2)} className='main-blue-text'>
                <NumberBox value={row4box2} display="3" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box3, setrow4box3)} className='main-blue-text'>
                <NumberBox value={row4box3} display="4" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box4, setrow4box4)} className='main-blue-text'>
                <NumberBox value={row4box4} display="5" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box5, setrow4box5)} className='main-blue-text'>
                <NumberBox value={row4box5} display="6" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box6, setrow4box6)} className='main-blue-text'>
                <NumberBox value={row4box6} display="7" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box7, setrow4box7)} className='main-blue-text'>
                <NumberBox value={row4box7} display="8" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box8, setrow4box8)} className='main-blue-text'>
                <NumberBox value={row4box8} display="9" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box9, setrow4box9)} className='main-blue-text'>
                <NumberBox value={row4box9} display="10" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box10, setrow4box10)} className='main-blue-text'>
                <NumberBox value={row4box10} display="11" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box11, setrow4box11)} className='main-blue-text'>
                <NumberBox value={row4box11} display="12" />
            </div>
        </Col>
        <Col>
            <div onClick={() => toggler(row4box12, setrow4box12)}>
                <NumberBox value={row4box12} display="🔒" />
            </div>
        </Col>
      </Row>

        <Row>Penalties: </Row>

      <Row>
        <Col>
            Row 1:<TotalsBox value={scoreRow(row1Array)} />
        </Col>
        <Col>
            Row 2:<TotalsBox value={scoreRow(row2Array)} />
        </Col>
        <Col>
            Row 3:<TotalsBox value={scoreRow(row3Array)} />
        </Col>
        <Col>
            Row 4:<TotalsBox value={scoreRow(row4Array)} />
        </Col>
        <Col>Total: <TotalsBox value={scoreRow(row1Array) + scoreRow(row2Array) + scoreRow(row3Array) + scoreRow(row4Array)}/></Col>
      </Row>
      <Row className="dark-gray-bg">
        <button onClick={() => dispatch(resetBoard())}>Reset Board</button>
      </Row>
    </Container>
  );
};

export default Board;
