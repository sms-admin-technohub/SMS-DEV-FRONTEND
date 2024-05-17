import Dashboard from './pages/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
// import Profiles from './pages/profiles/Profiles'
import AddStudentForm from './pages/students/AddStudents'
import Teachers from './pages/teachers/Teachers'
// import Tasks from './pages/tasks/Tasks'
import DefaultLayout from './_components/DefaultLayout'
import EditStudentForm from './pages/students/EditStudents'
// import LIst from './pages/students/LIst'
import Table from './components/Table'
import StudentView from './pages/students/StudentView'
import StudentList from './pages/students/StudentList'
function App() {

  return (
    // here you replace these components with your actual components!
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/profiles' element={<Profiles />} /> */}
        <Route path='/addstudents' element={<AddStudentForm />}/>
        <Route path='/editstudents' element={<EditStudentForm />}/>
        <Route path='/studentlist' element={<StudentList />} />
        <Route path='/Table' element={<Table />} />
        <Route path='/viewstudents' element={<StudentView />} />


        <Route path='/teachers' element={<Teachers />} />
        {/* <Route path='/tasks' element={< Tasks />} /> */}

      </Route>
    </Routes>

  )
}

export default App
