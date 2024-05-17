import Dashboard from './pages/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Teachers from './pages/teachers/Teachers'
import Subjects from './pages/subjects/Subjects'
import DefaultLayout from './_components/DefaultLayout'
import Accounts from './pages/accounts/Accounts'
import Events from './components/Events';
import Examlist from './components/Examlist';
import Fees from './components/Fees'
import Library from './components/Library'
import Holiday from './components/Holiday'
import Timetable from './components/Timetable'
import Settings from './components/Settings'
import AddStudentForm from './pages/students/AddStudents'
import EditStudentForm from './pages/students/EditStudents';
import StudentList from './pages/students/StudentList';
import StudentView from './pages/students/StudentView';

function App() {

  return (
    // here you replace these components with your actual components!
    <Routes>
      {/* main menu routes */}
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/teachers' element={<Teachers />} />

        <Route path='/subjects' element={< Subjects />} />
        <Route path='/accounts' element={< Accounts />} />
        <Route path='/addstudents' element={<AddStudentForm />}/>
        <Route path='/editstudents' element={<EditStudentForm />}/>
        <Route path='/studentlist' element={<StudentList />} />
        <Route path='/viewstudents' element={<StudentView />} />

        {/* managment menu routes */}
        <Route path='/events' element={< Events />} />
        <Route path='/examlist' element={< Examlist />} />
        <Route path='/fees' element={< Fees />} />
        <Route path='/library' element={< Library />} />
        <Route path='/holiday' element={< Holiday />} />
        <Route path='/accounts' element={< Accounts />} />
        <Route path='/timetable' element={< Timetable />} />
        <Route path='/settings' element={< Settings />} />
      </Route>
    </Routes>
  )
}
export default App

