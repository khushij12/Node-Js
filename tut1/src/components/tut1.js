import React,{useState} from 'react';

function Tut1(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>You Clicked button for {count} times.</p>
            <button onClick={() => {setCount(count+1)}}>Click</button>
        </div>
    );
}
export default Tut1;