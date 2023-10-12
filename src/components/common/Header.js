import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { UserCircle } from "lucide-react-native";
import { colors } from "../../../Constants";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {headerText}
      </Text>

      <UserCircle size={24} color={colors.COLOR_TEXT} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
