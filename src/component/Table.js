import React from 'react'

function Table() {
  return (
    <div style={{padding:"30px"}}>
        <table style={{width:"500px",margin:"auto"}} border ="1">
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>101</td>
            <td>Prerna</td>
            <td>Jaipur</td>
            </tr>
            <tr>
            <td>102</td>
            <td>Prerna</td>
            <td>Jaipur</td>
            </tr>
            <tr>
            <td>103</td>
            <td>Prerna</td>
            <td>Jaipur</td>
            </tr>
        </tbody>
        </table>
        
    </div>
  )
}

export default Table