import * as React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Icon } from "office-ui-fabric-react";
import Home from "../views/home";
import NewCase from "../views/newCase";

export interface NavigationProps {
  onToggle: (expanded: boolean) => void;
  onSelection: (selection: any) => void;
}

export interface NavigationState {
  expanded: boolean;
}

export default class Navigation extends React.Component<
  NavigationProps,
  NavigationState
> {
  private sideNavNavigator: any;

  public constructor(props: NavigationProps) {
    super(props);

    this.state = {
      expanded: false
    };

    this.loadHome();
  }

  public render() {
    return (
      <SideNav
        style={{
          position: "sticky",
          maxWidth: "220px",
          top: "0px",
          left: "0px",
          float: "left",
          display: "inline-block"
        }}
      >
        <SideNav.Toggle aria-label="Menu Toggle" />
        <SideNav.Nav
          defaultSelected="Home"
          ref={e => (this.sideNavNavigator = e)}
        >
          <NavItem eventKey="Home" aria-label="Home">
            <NavIcon onClick={() => this.loadHome()}>
              <Icon iconName="Home" />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>

          <NavItem eventKey="FindCases" aria-label="Find Case">
            <NavIcon>
              <Icon iconName="FabricFolderSearch" />
            </NavIcon>
            <NavText>Find Case</NavText>
          </NavItem>

          <NavItem eventKey="CreateCase" aria-label="Create Case">
            <NavIcon onClick={() => this.loadCreateCase()}>
              <Icon iconName="FabricNewFolder" />
            </NavIcon>
            <NavText>Create Case</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
  private onToggle = (expanded: boolean) => {
    this.setState({ expanded }, () => {
      this.props.onToggle(expanded);
    });
  };

  private loadHome = () => {
    const selected = React.cloneElement(<Home />, {});

    this.props.onSelection(selected);
    if (this.state.expanded === true) this.onToggle(false);
  };

  private loadCreateCase = () => {
    const selected = React.cloneElement(<NewCase />, {});
    this.props.onSelection(selected);
    if (this.state.expanded === true) this.onToggle(false);
  };
}
