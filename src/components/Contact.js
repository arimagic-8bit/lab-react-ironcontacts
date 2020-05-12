import React from 'react'

function Contact (props) {
    return(
        <tr>
            <td> <img src={props.pictureUrl} alt="" style={{width:100}}/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td>
                <button onClick={() => props.remove(props.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Contact
