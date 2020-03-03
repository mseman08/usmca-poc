import * as React from "react";

export interface HomeProps {}
export interface HomeState {}

export default class Home extends React.Component<HomeProps, HomeState> {
  public constructor(props: HomeProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    );
  }
}
