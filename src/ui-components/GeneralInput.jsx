/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import {
  Flex,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function GeneralInput(props) {
  const { user, overrides, ...rest } = props;
  const [firstNameFieldValue, setFirstNameFieldValue] =
    useStateMutationAction("");
  const [lastNameFieldValue, setLastNameFieldValue] =
    useStateMutationAction("");
  const [heightFieldValue, setHeightFieldValue] = useStateMutationAction("");
  const [weightFieldValue, setWeightFieldValue] = useStateMutationAction("");
  const [aCTFieldValue, setACTFieldValue] = useStateMutationAction("");
  const [sATFieldValue, setSATFieldValue] = useStateMutationAction("");
  const [uGPAFieldValue, setUGPAFieldValue] = useStateMutationAction("");
  const [wGPAFieldValue, setWGPAFieldValue] = useStateMutationAction("");
  const [hSGradYearFieldValue, setHSGradYearFieldValue] =
    useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      first_name: firstNameFieldValue,
      last_name: lastNameFieldValue,
      height: heightFieldValue,
      weight: weightFieldValue,
      ACT: aCTFieldValue,
      SAT: sATFieldValue,
      UGPA: uGPAFieldValue,
      WGPA: wGPAFieldValue,
      HSGradYear: hSGradYearFieldValue,
    },
    model: User,
  });
  return (
    <View
      width="375px"
      height="667px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GeneralInput")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="171px"
        height="50px"
        position="absolute"
        top="228px"
        left="186px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Weight"
        {...getOverrideProps(overrides, "Weight")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="50px"
        position="absolute"
        top="143px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="First Name"
        {...getOverrideProps(overrides, "First Name")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="50px"
        position="absolute"
        top="143px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Last Name"
        {...getOverrideProps(overrides, "Last Name")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="50px"
        position="absolute"
        top="228px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Height"
        {...getOverrideProps(overrides, "Height")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="50px"
        position="absolute"
        top="313px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ACT"
        {...getOverrideProps(overrides, "ACT")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="50px"
        position="absolute"
        top="398px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Unweighted GPA&#xA;(4.0 scale)"
        {...getOverrideProps(overrides, "Unweighted GPA (4.0 scale)")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="171px"
        height="50px"
        position="absolute"
        top="397px"
        left="186px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Weighted GPA&#xA;(5.0 scale)"
        {...getOverrideProps(overrides, "Weighted GPA (5.0 scale)")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="49px"
        position="absolute"
        top="313px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SAT"
        {...getOverrideProps(overrides, "SAT")}
      ></Text>
      <View
        width="268px"
        height="67px"
        position="absolute"
        top="16px"
        left="42px"
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
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="32px"
        left="95px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="General Info"
        {...getOverrideProps(overrides, "General Info")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="509px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="HS Grad Year"
        {...getOverrideProps(overrides, "HS Grad Year")}
      ></Text>
      <Flex
        gap="0"
        position="absolute"
        top="605px"
        left="125px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(29,118,223,1)"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Submit"
          {...getOverrideProps(overrides, "Submit")}
        ></Text>
      </Flex>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="544px"
        left="16px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.HSGradYear}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={hSGradYearFieldValue}
        onChange={(event) => {
          setHSGradYearFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "HSGradYearField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="448px"
        left="186px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.WGPA}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={wGPAFieldValue}
        onChange={(event) => {
          setWGPAFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "WGPAField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="448px"
        left="16px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.UGPA}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={uGPAFieldValue}
        onChange={(event) => {
          setUGPAFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "UGPAField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="343px"
        left="187px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.SAT}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={sATFieldValue}
        onChange={(event) => {
          setSATFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "SATField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="343px"
        left="16px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.ACT}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={aCTFieldValue}
        onChange={(event) => {
          setACTFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "ACTField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="258px"
        left="186px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.weight}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={weightFieldValue}
        onChange={(event) => {
          setWeightFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "WeightField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="259px"
        left="16px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.height}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={heightFieldValue}
        onChange={(event) => {
          setHeightFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "HeightField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="173px"
        left="186px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.last_name}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={lastNameFieldValue}
        onChange={(event) => {
          setLastNameFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "LastNameField")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="173px"
        left="16px"
        direction="column"
        width="135px"
        padding="0px 0px 0px 0px"
        placeholder={user?.first_name}
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={firstNameFieldValue}
        onChange={(event) => {
          setFirstNameFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "FirstNameField")}
      ></TextField>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="509px"
        left="188px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position"
        {...getOverrideProps(overrides, "Position")}
      ></Text>
      <SelectField
        display="flex"
        gap="8px"
        position="absolute"
        top="544px"
        left="188px"
        direction="column"
        width="135px"
        height="40px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="Position"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        aria-selected={user?.Position}
        {...getOverrideProps(overrides, "SelectField")}
        value={value}
      onChange={(e) => setValue(e.target.value)}
        

      >
      <option value="LHP">LHP</option>
      <option value="RHP">RHP</option>
      <option value="1B">1B</option>
      <option value="2B">2B</option>
      <option value="3B">3B</option>
      <option value="SS">SS</option>
      <option value="OF">OF</option>
      <option value="C">C</option>
      </SelectField>
    </View>
  );
}
