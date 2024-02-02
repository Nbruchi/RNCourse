import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
   const [courseGoals, setcourseGoals] = useState([]);
   const [modalIsVisible, setModalIsVisible] = useState(false);

   const addGoalHandler = (enteredGoalText) => {
      setcourseGoals((currentCourseGoals) => [
         ...currentCourseGoals,
         { text: enteredGoalText, id: Math.random().toString() },
      ]);
      endAddGoalHandler();
   };

   const startAddGoalHandler = () => {
      setModalIsVisible(true);
   };

   const deleteGoalHandler = (id) => {
      setcourseGoals((currentCourseGoals) => {
         return currentCourseGoals.filter((goal) => goal.id !== id);
      });
   };

   const endAddGoalHandler = () => {
      setModalIsVisible(false);
   };

   return (
      <>
         <StatusBar style="light" />
         <View style={styles.appContainer}>
            <Button
               title="Add new Goal"
               color="#a065ec"
               onPress={startAddGoalHandler}
            />
            <GoalInput
               onAddGoal={addGoalHandler}
               visible={modalIsVisible}
               onCancel={endAddGoalHandler}
            />
            <View style={styles.goalsContainer}>
               <FlatList
                  data={courseGoals}
                  renderItem={({ item }) => {
                     return (
                        <GoalItem
                           text={item.text}
                           onDeleteItem={deleteGoalHandler}
                           id={item.id}
                           key={item.id}
                        />
                     );
                  }}
                  keyExtractor={(item, index) => {
                     return item.id;
                  }}
                  alwaysBounceVertical={false}
               />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
      flex: 1,
   },
   goalsContainer: {
      flex: 3,
   },
});
