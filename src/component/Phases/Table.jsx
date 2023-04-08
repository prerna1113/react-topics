import React from 'react'

function Table() {
    var tableStyle={
        width:"300px", height:"200px"
    }
  return (
    <div style={{boxShadow:"0 0 10px black",width:"300px",margin:"auto"}} >
        <table style={tableStyle} border="2">
            <thead>
                <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>City</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                   <td>1</td>
                   <td>Prerna</td>
                   <td>Jaipur</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>Prerna</td>
                   <td>Jaipur</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>Prerna</td>
                   <td>Jaipur</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table