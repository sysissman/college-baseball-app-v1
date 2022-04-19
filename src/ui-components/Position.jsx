/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import LHPButton from "./LHPButton";
import RHPButton from "./RHPButton";
import FirstBaseButton from "./FirstBaseButton";
import SecondBaseButton from "./SecondBaseButton";
import ThirdBaseButton from "./ThirdBaseButton";
import CButton from "./CButton";
import OFButton from "./OFButton";
import SSButton from "./SSButton";
export default function Position(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="667px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Position")}
    >
      <View
        width="324px"
        height="81px"
        position="absolute"
        top="9px"
        left="25px"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(29,118,223,1)"
        {...getOverrideProps(overrides, "Rectangle 13")}
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
        top="32px"
        left="132px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position"
        {...getOverrideProps(overrides, "Position31072882")}
      ></Text>
      <LHPButton
        width="102px"
        height="87px"
        position="absolute"
        top="143px"
        left="13px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LHP Button")}
      ></LHPButton>
      <RHPButton
        width="102px"
        height="87px"
        position="absolute"
        top="143px"
        left="136px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "RHP Button")}
      ></RHPButton>
      <FirstBaseButton
        width="102px"
        height="87px"
        position="absolute"
        top="143px"
        left="259px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FirstBaseButton")}
      ></FirstBaseButton>
      <SecondBaseButton
        width="102px"
        height="87px"
        position="absolute"
        top="290px"
        left="13px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SecondBaseButton")}
      ></SecondBaseButton>
      <ThirdBaseButton
        width="102px"
        height="87px"
        position="absolute"
        top="290px"
        left="136px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ThirdBaseButton")}
      ></ThirdBaseButton>
      <CButton
        width="102px"
        height="87px"
        position="absolute"
        top="437px"
        left="205px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "C Button")}
      ></CButton>
      <OFButton
        width="102px"
        height="87px"
        position="absolute"
        top="437px"
        left="64px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "OF Button")}
      ></OFButton>
      <SSButton
        position="absolute"
        top="43.48%"
        bottom="43.48%"
        left="69.07%"
        right="3.73%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SS Button")}
      ></SSButton>
    </View>
  );
}
