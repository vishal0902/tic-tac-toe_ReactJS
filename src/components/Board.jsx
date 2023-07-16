import { useState } from "react";
import Square from "./Square";


const Board = (props) => {

    const [tic, setTic] = useState(Array(9).fill(null))
    const [isTicked, setIsTicked] = useState(true)
    const [isStarted, setIsStarted] = useState(false)
    const [matchStatus, setMatchStatus] = useState("")


    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = (Tics) => {
        console.log('called')
        for (let a of arr) {

            if (Tics[a[0]] && Tics[a[0]] === Tics[a[1]] && Tics[a[1]] === Tics[a[2]]) {
                return Tics[a[0]]
            }
        }
        return 0;

    }


    const handleClick = (index) => {
        const Tics = [...tic];

        if (!Tics[index]) {
            Tics[index] = isTicked ? 'X' : 'O'
            setTic([...Tics])
            setIsTicked(!isTicked)

            setTimeout(() => {
                const result = checkWinner(Tics)
                console.log(result)
                if (result) {
                    setTic(Array(9).fill(null))
                    setIsStarted(false)
                    setMatchStatus(`Congratulations! Player ${result} Won`)
                }



                const res = Tics.find(e => e === null)
                if (res === undefined && !result) {
                    setTic(Array(9).fill(null))
                    setIsStarted(false)
                    
                    setMatchStatus(`Match Tied!`)
                }


            }, 0)
        }



    }

    return (
        <>


            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >
                        <img src="tic_logo.png" alt="logo" style={{ maxHeight: '50px', maxWidth: '50px', marginRight: '10px', marginLeft: '5px' }} />
                        <span style={{fontSize:'25px'}}>Tic-Tac-Toe</span>
                    </a>
                </div>
            </nav>

            {
                matchStatus && 
                <div  style={{margin:'20px', display:'flex', flexDirection:'column', flexWrap:'wrap',  alignContent:'center' , maxWidth:'600px'}} className="myalert alert alert-success" role="alert">
                    <h2 >{matchStatus}</h2>
                </div>

            }
            {isStarted ?
                <>
                    <button onClick={() => { setTic(Array(9).fill(null)) }} style={{ marginBottom:'20px', marginLeft: '40px' }} type="button" className="btn btn-warning">Reset Game</button>
                    <div className="alert alert-info" style={{ marginLeft: '40px', maxWidth:'200px', display:'flex', flexDirection:'column', flexWrap:'wrap',  alignContent:'center' }}>{isTicked ? <h2>X's turn</h2> : <h2>O's turn</h2>}</div>
                    <div style={{maxWidth:'310px'}} className="container">
                        <div className="row">
                            <Square value={tic[0]} index='0' onClick={handleClick} />
                            <Square value={tic[1]} index='1' onClick={handleClick} />
                            <Square value={tic[2]} index='2' onClick={handleClick} />
                        </div>
                        <div className="row">
                            <Square value={tic[3]} index='3' onClick={handleClick} />
                            <Square value={tic[4]} index='4' onClick={handleClick} />
                            <Square value={tic[5]} index='5' onClick={handleClick} />
                        </div>
                        <div className="row">
                            <Square value={tic[6]} index='6' onClick={handleClick} />
                            <Square value={tic[7]} index='7' onClick={handleClick} />
                            <Square value={tic[8]} index='8' onClick={handleClick} />
                        </div>
                    </div></>
                : <button onClick={() => { setIsStarted(!isStarted);setMatchStatus(""); }} style={{ marginLeft: '40px' }} type="button" className="btn btn-warning">Start the Game</button>}


        </>
    );
}

export default Board;