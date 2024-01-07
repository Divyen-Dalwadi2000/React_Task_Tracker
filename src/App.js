import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddButton from './components/AddButton';
function App() {
  return (
    <div className="container">
      <Header title="Task-Tracker" />
      <TaskList list="Reading" />
      <TaskList list="Excercise"/>
      <TaskList completed={true} list="Coding"/>
      <TaskList list="Eat"/>
      <TaskList list="Prepare Notes"/>
        <AddButton />
    </div>
  );
}

export default App;

// …or create a new repository on the command line
// echo "# React_Task_Tracker" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Divyen-Dalwadi2000/React_Task_Tracker.git
// git push -u origin main

// …or push an existing repository from the command line`
// git remote add origin https://github.com/Divyen-Dalwadi2000/React_Task_Tracker.git
// git branch -M main
// git push -u origin main