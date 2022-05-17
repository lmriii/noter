import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';


interface rawInput{
    title: any;
    date?: any;
    note: any;
}

 

//Note Recorder = Noter
export default function Noter() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');

    const inputStyle = {
        width: "350px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
        backgroundColor: "pink"
    };

    const outputStyle = {
        width: "350px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
        backgroundColor: "blue",
        whiteSpace: "pre-wrap"
    };

    return (
        <>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col text-center'>
                        <h1>
                            <Badge className='text-align-center text-info bg-dark'>
                                Enter Note Title
                            </Badge>
                        </h1>
                    </div>
                </div>
                
                <div className='row mt-4'>
                    <div className='col-md-6' >
                        <h4>
                            <Badge className='text-align-center text-danger bg-dark'>
                                Raw Input
                            </Badge>
                        </h4>
                        <div className='mark-input' style={{ width: "100%", height: "100%" }}>
                            <input
                                type="text"
                                className='input'
                                placeholder='Title'
                                style={{ width: "100%", backgroundColor: "skyBlue", boxShadow: "5px 5px" }}
                                onChange={e => { setTitle(e.target.value) }}
                            ></input>
                        </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <h4>
                            <Badge className='text-align-center text-info bg-dark'>
                                Preview
                            </Badge>
                        </h4>
                        <div style={{ whiteSpace: "pre-wrap", backgroundColor: "grey", boxShadow: "5px 5px", textAlign: "left", border: "solid", width: "100%" }} className='text-align-left'>
                            {title}
                        </div>
                    </div>

                </div>
                <div className='row mt-4'>
                    <div className='col-md-6' >
                        <h4>
                            <Badge className='text-align-center text-danger bg-dark'>
                                Date Taken
                            </Badge>
                        </h4>
                        <div className='mark-input' style={{ width: "100%", height: "100%" }}>
                            <input
                                type="date"
                                className='input'
                                placeholder='Date note was taken'
                                style={{ width: "100%", backgroundColor: "skyBlue", boxShadow: "5px 5px" }}
                                onChange={e => { setDate(e.target.value) }}
                            ></input>
                        </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <h4>
                            <Badge className='text-align-center text-info bg-dark'>
                                Preview
                            </Badge>
                        </h4>
                        <div style={{ whiteSpace: "pre-wrap", backgroundColor: "grey", boxShadow: "5px 5px", textAlign: "left", border: "solid", width: "100%" }} className='text-align-left'>
                            {date}
                        </div>
                    </div>

                </div>
                <div className='row mt-4'>
                    <div className='col text-center'>
                        <h1>
                            <Badge className='text-align-center text-info bg-dark'>
                                Enter Notes
                            </Badge>
                        </h1>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-6' >
                        <h4>
                            <Badge className='text-align-center text-danger bg-dark'>
                                Raw Input
                            </Badge>
                        </h4>
                        <div className='mark-input' style={{ width: "100%", height: "100%" }}>
                            <textarea
                                className='input'
                                placeholder='Enter notes here'
                                style={{ width: "100%", height: "100%", backgroundColor: "skyBlue", boxShadow: "5px 5px" }}
                                onChange={e => { setNote(e.target.value) }}
                            ></textarea>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ height: "600px" }}>
                        <h4>
                            <Badge className='text-align-center text-info bg-dark'>
                                Preview
                            </Badge>
                        </h4>
                        <div style={{ whiteSpace: "pre-wrap", backgroundColor: "grey", boxShadow: "5px 5px", textAlign: "left", border: "solid", width: "100%", height: "100%" }} className='text-align-left'>
                            {note}
                        </div>
                    </div>

                </div>
            </div>
        </>

    );


}