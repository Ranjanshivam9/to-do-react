import React from 'react'


const MyButton = ({ text, text2, styling, abc, ul }) => {
    function doSomething(e) {
        if (!(abc === undefined || null)) {
            abc(e)
        }
    }
    return (
        <>
            <button onClick={(e) => doSomething(e)} className='button-text' style={styling}>{text}</button>
            <h1>text is {text2}</h1>
            {/* {ul.map((e) => {
                return (
                    <button key={e.id}>{e.text}</button>
                )
            })} */}
        </>
    )
}

MyButton.defaultProps = {
    text2: "This is default text",
}



export default MyButton