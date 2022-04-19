/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Frame417(props) {
  const { user, overrides, ...rest } = props;
  const aboutOnClick = useNavigateAction({ type: "url", url: "/generalinput" });
  return (
    <View
      width="375px"
      height="67px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame417")}
    >
      <View
        width="60px"
        height="60px"
        position="absolute"
        top="4px"
        left="267px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "211817_search_strong_icon 1")}
      >
        <Icon
          width="45px"
          height="45px"
          viewBox={{ minX: 0, minY: 0, width: 45, height: 45 }}
          paths={[
            {
              d: "M32.8711 27.4219C34.6289 24.6562 35.6602 21.375 35.6602 17.8477C35.6602 7.99219 27.6797 0 17.8359 0C7.98047 0 0 7.99219 0 17.8477C0 27.7031 7.98047 35.6953 17.8242 35.6953C21.3984 35.6953 24.7266 34.6406 27.5156 32.8359L28.3242 32.2734L41.0508 45L45 40.9805L32.2852 28.2539L32.8711 27.4219ZM27.8203 7.875C30.4805 10.5352 31.9453 14.0742 31.9453 17.8359C31.9453 21.5977 30.4805 25.1367 27.8203 27.7969C25.1602 30.457 21.6211 31.9219 17.8594 31.9219C14.0977 31.9219 10.5586 30.457 7.89844 27.7969C5.23828 25.1367 3.77344 21.5977 3.77344 17.8359C3.77344 14.0742 5.23828 10.5352 7.89844 7.875C10.5586 5.21484 14.0977 3.75 17.8594 3.75C21.6211 3.75 25.1602 5.21484 27.8203 7.875Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector30762834")}
        ></Icon>
      </View>
      <View
        width="60px"
        height="60px"
        position="absolute"
        top="4px"
        left="158px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "3669170_home_ic_icon 1")}
      >
        <Icon
          width="50px"
          height="42.5px"
          viewBox={{ minX: 0, minY: 0, width: 50, height: 42.5 }}
          paths={[
            {
              d: "M20 42.5L20 27.5L30 27.5L30 42.5L42.5 42.5L42.5 22.5L50 22.5L25 0L0 22.5L7.5 22.5L7.5 42.5L20 42.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="16.67%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector30762836")}
        ></Icon>
        <Icon
          width="60px"
          height="60px"
          viewBox={{ minX: 0, minY: 0, width: 60, height: 60 }}
          paths={[]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector30762837")}
        ></Icon>
      </View>
      <View
        width="60px"
        height="60px"
        position="absolute"
        top="4px"
        left="49px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "4092564_profile_about_mobile ui_user_icon 2"
        )}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="6.25%"
          bottom="6.25%"
          left="12.5%"
          right="12.5%"
          onClick={() => {
            aboutOnClick();
          }}
          {...getOverrideProps(overrides, "about")}
        >
          <Icon
            width="26.25px"
            height="26.25px"
            viewBox={{ minX: 0, minY: 0, width: 26.25, height: 26.25 }}
            paths={[
              {
                d: "M13.125 26.25C15.7209 26.25 18.2585 25.4802 20.4169 24.038C22.5753 22.5959 24.2575 20.546 25.2509 18.1477C26.2443 15.7494 26.5042 13.1104 25.9978 10.5644C25.4914 8.01845 24.2413 5.67979 22.4058 3.84423C20.5702 2.00867 18.2316 0.75863 15.6856 0.252199C13.1396 -0.254232 10.5006 0.00568684 8.10228 0.999087C5.704 1.99249 3.65415 3.67475 2.21196 5.83315C0.769767 7.99154 0 10.5291 0 13.125C0 16.606 1.38281 19.9444 3.84422 22.4058C6.30564 24.8672 9.64404 26.25 13.125 26.25ZM13.125 3.75001C14.9792 3.75001 16.7918 4.29984 18.3335 5.32998C19.8752 6.36012 21.0768 7.82429 21.7864 9.53735C22.4959 11.2504 22.6816 13.1354 22.3199 14.954C21.9581 16.7725 21.0652 18.443 19.7541 19.7541C18.443 21.0652 16.7725 21.9581 14.954 22.3199C13.1354 22.6816 11.2504 22.4959 9.53734 21.7864C7.82429 21.0768 6.36011 19.8752 5.32997 18.3335C4.29984 16.7918 3.75 14.9792 3.75 13.125C3.75 10.6386 4.73772 8.25403 6.49588 6.49588C8.25403 4.73773 10.6386 3.75001 13.125 3.75001L13.125 3.75001Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="50%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "Vector30762840")}
          ></Icon>
          <Icon
            width="45px"
            height="22.5px"
            viewBox={{ minX: 0, minY: 0, width: 45, height: 22.5 }}
            paths={[
              {
                d: "M24.375 0L20.625 0C15.1549 0 9.90886 2.17298 6.04092 6.04092C2.17299 9.90886 4.996e-15 15.1549 0 20.625C0 21.1223 0.197544 21.5992 0.549175 21.9508C0.900806 22.3025 1.37772 22.5 1.875 22.5L43.125 22.5C43.6223 22.5 44.0992 22.3025 44.4508 21.9508C44.8025 21.5992 45 21.1223 45 20.625C45 15.1549 42.827 9.90886 38.9591 6.04092C35.0911 2.17298 29.8451 0 24.375 0ZM3.8625 18.75C4.32355 14.6262 6.28783 10.8168 9.38002 8.04979C12.4722 5.28273 16.4755 3.75197 20.625 3.75L24.375 3.75C28.5245 3.75197 32.5278 5.28273 35.62 8.04979C38.7122 10.8168 40.6764 14.6262 41.1375 18.75L3.8625 18.75Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="57.14%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector30762841")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
