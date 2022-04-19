/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { school, overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="120px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame1")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="194px"
        height="38px"
        position="absolute"
        top="13px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={school?.name}
        {...getOverrideProps(overrides, "School Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(92,102,112,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="38px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={school?.location}
        {...getOverrideProps(overrides, "Location")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(92,102,112,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="63px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${school?.division}${"/"}${school?.conference}`}
        {...getOverrideProps(overrides, "Division/Conference")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(92,102,112,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="88px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={school?.coach}
        {...getOverrideProps(overrides, "Coach")}
      ></Text>
      <Image
        width="136px"
        height="120px"
        position="absolute"
        top="0px"
        left="239px"
        padding="0px 0px 0px 0px"
        src={school?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
