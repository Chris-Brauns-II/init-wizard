import React from "react"

const ArchitectureVisualization = ({ streams, producers, consumers }) => {
  return (
    <div>
      <h2>Streams</h2>
      <table>
        <tbody>
          {streams.map((stream, index) => (
            <tr key={index}>
              <td>
                {stream.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Producers</h2>
      <table>
        <tbody>
          {producers.map((stream, index) => (
            <tr key={index}>
              <td>
                {stream.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Consumers</h2>
      <table>
        <tbody>
          {consumers.map((stream, index) => (
            <tr key={index}>
              <td>
                {stream.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArchitectureVisualization;
