import * as React from "react";
import styles from "./Usmca.module.scss";
import { IUsmcaProps } from "./IUsmcaProps";
import Navigation from "./navigation/index";
import MainContent from "./MainContent";

export interface IUsmcaProp {}

export interface IUsmcaState {
  selected: string | React.ReactElement<any>;
  expanded: boolean;
  title: string;
}

export default class Usmca extends React.Component<IUsmcaProp, IUsmcaState> {
  public constructor(props) {
    super(props);
    this.state = {
      selected: "Home",
      expanded: false,
      title: "ITA Employee Directory"
    };
  }

  public render(): React.ReactElement<IUsmcaProps> {
    return (
      <div className={styles.usmca}>
        <Navigation onToggle={this.onToggle} onSelection={this.onSelection} />
        <MainContent
          expanded={this.state.expanded}
          component={this.state.selected}
        />
      </div>
    );
  }

  private onToggle = (expanded: boolean) => {
    this.setState({ expanded: expanded });
  };

  private onSelection = (selection: any) => {
    this.setState({ selected: selection });
  };
}
