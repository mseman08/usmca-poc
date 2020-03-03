import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import {
  PropertyPaneDescription,
  BasicGroupName,
  DescriptionFieldLabel
} from "UsmcaWebPartStrings";
import Usmca from "../../components/Usmca";

export interface IUsmcaWebPartProps {
  description: string;
}

export default class UsmcaWebPart extends BaseClientSideWebPart<
  IUsmcaWebPartProps
> {
  public render(): void {
    const element: JSX.Element = <Usmca />;

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: PropertyPaneDescription
          },
          groups: [
            {
              groupName: BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
