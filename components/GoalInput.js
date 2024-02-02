import {
   StyleSheet,
   View,
   TextInput,
   Button,
   Modal,
   Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
   const [enteredGoalText, setEnteredGoalText] = useState("");
   const goalInputHandler = (enteredText) => {
      setEnteredGoalText(enteredText);
   };

   const addGoalHandler = () => {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
   };

   return (
      <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
            <Image
               source={require("../assets/goal.png")}
               style={styles.image}
            />
            <TextInput
               placeholder="Your goals..."
               style={styles.textInput}
               onChangeText={goalInputHandler}
               value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button
                     title="Cancel"
                     onPress={props.onCancel}
                     color="#f31281"
                  />
               </View>
               <View style={styles.button}>
                  <Button
                     title="Add goal"
                     onPress={addGoalHandler}
                     color="#b180f0"
                  />
               </View>
            </View>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      padding: 16,
      martinTop: 20,
      backgroundColor: "#311b6b",
   },
   textInput: {
      borderWidth: 1,
      borderColor: "#e4d0ff",
      width: "100%",
      backgroundColor: "#e4d0ff",
      padding: 8,
      borderRadius: 16,
   },
   buttonContainer: {
      flexDirection: "row",
      marginTop: 16,
   },
   button: {
      width: 100,
      marginHorizontal: 8,
   },
   image: {
      width: 100,
      height: 100,
      margin: 20,
   },
});

export default GoalInput;
