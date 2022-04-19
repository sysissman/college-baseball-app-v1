/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SSButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="102px"
      height="87px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SSButton")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(29,118,223,1)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="35.15625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="29.89%"
        bottom="29.89%"
        left="32.35%"
        right="32.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SS"
        {...getOverrideProps(overrides, "SS")}
      ></Text>
    </View>
  );
}
