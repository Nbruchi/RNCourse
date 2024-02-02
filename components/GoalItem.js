import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
   return (
      <View style={styles.goalItem}>
         <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => {
               pressed && styles.pressedItem;
            }}
         >
            <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      padding: 8,
   },
   goalText: {
      color: "#fff",
   },
   pressedItem: {
      opacity: 0.5,
      color: "#ddd",
   },
});

export default GoalItem;
