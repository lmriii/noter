import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
const marked = require('marked');




//Note Recorder = Noter
export default function Noter() {
    const [rawInput, setRawInput] = useState('');


    const markedOutput = () => {
        const getMarkDown = () => {
            const rawMark = marked(rawInput);
            return { __html: rawMark };
        };
        return (<div dangerouslySetInnerHTML={getMarkDown()}></div>);
    }



    console.log(rawInput, markedOutput)
    // console.log(marked(rawInput))
    const inputStyle = {
        width: "400px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
        backgroundColor: "pink"
    };

    const outputStyle = {
        width: "400px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
        backgroundColor: "#DCDCDC"
    };

    return (
        <>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col text-center'>
                        <h1>
                            <Badge className='text-align-center text-info bg-dark'>
                                Enter Notes and Preview
                            </Badge>
                        </h1>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-6'>
                        <h4>
                            <Badge className='text-align-center text-danger bg-dark'>
                                Raw Input
                            </Badge>
                        </h4>
                        <div className='mark-input' style={inputStyle}>
                            <textarea
                                className='input'
                                style={{ width: "100%", height: "100%" }}

                                onChange={e => { setRawInput(e.target.value) }}
                            ></textarea>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h4>
                            <Badge className='text-align-center text-info bg-dark'>
                                Preview
                            </Badge>
                        </h4>
                    </div>
                    <div style={outputStyle} >

                        {/* {markedOutput} */}
                    </div>
                </div>

            </div>
        </>

    );


}