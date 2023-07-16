import { useState } from "react";
import Square from "./Square";


const Board = (props) => {
    
    const [tic, setTic] = useState(Array(9).fill(null))
    const [isTicked, setIsTicked] = useState(true)
    
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    const checkWinner = (Tics) =>{
        console.log('called')
        for(let a of arr){
         
            if(Tics[a[0]] && Tics[a[0]]===Tics[a[1]] && Tics[a[1]]===Tics[a[2]]){
                return Tics[a[0]]
            }
        }
        return 0;        

    }    
    
    
    const handleClick = (index) =>{
        const Tics = [...tic];
        
        if(!Tics[index]){
            Tics[index] = isTicked ? 'X' : 'O'
            setTic([...Tics])
            setIsTicked(!isTicked)
            
            setTimeout(()=>{
                const result = checkWinner(Tics)
                console.log(result)
                if(result){
                    setTic(Array(9).fill(null))
                    window.alert(`Congratulations! Player ${result} Won`)
                }
                
              

                const res = Tics.find(e=>e===null)
                if(res===undefined && !result){
                    setTic(Array(9).fill(null))
                    window.alert(`Match Tied!`)
                }


            },0)
        }

        
        
    }
    
    return (
        <div className="container">
            <div className="row">
                <Square value= {tic[0]} index='0' onClick = {handleClick}/>
                <Square value= {tic[1]} index='1' onClick = {handleClick}/>
                <Square value= {tic[2]} index='2' onClick = {handleClick}/>
            </div>
            <div className="row">
                <Square value= {tic[3]} index='3' onClick={handleClick}/>
                <Square value= {tic[4]} index='4' onClick = {handleClick}/>
                <Square value= {tic[5]} index='5' onClick = {handleClick}/>
            </div>
            <div className="row">
                <Square value= {tic[6]} index='6' onClick = {handleClick}/>
                <Square value= {tic[7]} index='7' onClick = {handleClick}/>
                <Square value= {tic[8]} index='8' onClick = {handleClick}/>
            </div>
        </div>
    );
}

export default Board;