import { useState } from "react";


const Examples = () =>{
    const [ counter , setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter + 1)
        console.log("updated value: "+counter)
    }
    const decrement =() =>{
        if(counter === 0) return;
        setCounter (counter - 1)
        console.log("updated value: "+counter)
    }

    return(

        <div className="py-4 mt-5 mb-5">
            <div className="row gy-4 gy-xl-4 gy-lg-4">
                <div className="col-12 col-lg-10 col-xl-10 mx-auto mt-4">
                    <h1 className="display-1 fw-bold">hello</h1>

                    <div className="container">
                        <p className="fs-3">{counter}</p>
                        <div className="py-3">
                            <div className="btn" onClick={increment}>+</div>
                            <div className="btn" onClick={decrement}>-</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Examples;