import * as React from "react";
import CardBox from "./CardBox";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { events } = this.props;

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          rowGap: "1rem",
          height: "fit-content"
        }}
      >
        {events.map((event, idx) => (
          <CardBox
            key={event.id}
            event={event}
            conflict={this.props.conflictEvents}
            clickHandler={this.props.clickHandler}
            label={this.props.button}
          />
        ))}
      </div>
    );
  }
}

export default EventContainer;
