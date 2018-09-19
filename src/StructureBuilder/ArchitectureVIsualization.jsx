import React from "react"

const ArchitectureVisualization = (streams, producers, consumers) => {
  return (
    <table>
      <div>
        {streams.map(stream => {
          <tr>
            <td>
              {stream.name}
            </td>
          </tr>
        })}
      </div>
    </table>
  );
}