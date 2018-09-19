import React from "react"
import { addConsumer, addProducer, addStream } from "../Redux/Actions/modelActions"
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button"

import ArchitectureVisualization from "./ArchitectureVisualization/ArchitectureVisualization"

const StructureBuilder = ({ dispatch, streams, producers, consumers }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="add-element">
                <Button onClick={(e) => { dispatch(addStream("Blash")) }} variant="outlined" color="primary">Add a Stream</Button>
              </div>
            </td>
            <td>
              <div className="add-element">
                <Button onClick={(e) => { dispatch(addProducer("Blash")) }} variant="outlined" color="primary">Add a Producer</Button>
              </div>
            </td>
            <td>
              <div className="add-element">
                <Button onClick={(e) => { dispatch(addConsumer("Blash")) }} variant="outlined" color="primary">Add a Consumer</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ArchitectureVisualization 
        streams={streams}
        producers={producers}
        consumers={consumers}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    producers: state.producers,
    consumers: state.consumers
  }
}

export default connect(mapStateToProps)(StructureBuilder);
