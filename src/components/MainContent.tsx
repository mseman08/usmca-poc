import * as React from "react";

export interface MainContentProps {
  expanded: boolean;
  component: string | React.ReactElement<any>;
}

export default class MainContent extends React.Component<MainContentProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div
        style={{
          transition: "all .15s",
          padding: "0 20px",
          marginLeft: this.props.expanded ? "240px" : "64px",
          position: "relative",
          display: "flow-root"
        }}
      >
        {this.props.component}
      </div>
    );
  }
}
