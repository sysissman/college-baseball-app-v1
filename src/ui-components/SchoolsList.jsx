/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { School } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Frame1 from "./Frame1";
import { Collection } from "@aws-amplify/ui-react";
export default function SchoolsList(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: School,
        }).items;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SchoolsList")}
    >
      {(item, index) => (
        <Frame1
          school={item}
          margin="1px 1px 1px 1px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Frame1>
      )}
    </Collection>
  );
}
