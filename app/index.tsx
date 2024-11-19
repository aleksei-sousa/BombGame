import { Text, View } from "react-native";
import Start from '../src/pages/start/index'
import Rules from "@/src/pages/rules";
import { StatusBar } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar color="white" backgroundColor='black' />
      {/* <Start/> */}
      <Rules/>
    </>

  );
}
