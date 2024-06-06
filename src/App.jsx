import Dashboard from './pages/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Students from './pages/students/Students'
// import Teachers from './pages/teachers/Teachers'
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
import AddTeacher from './pages/teachers/AddTeacher'
import EditTeacher from './pages/teachers/EditTeacher'
import TeacherList from './pages/teachers/TeacherList'
import TeacherView from './pages/teachers/TeacherView'
import AddClass from './pages/classes/AddClass'
import EditClass from './pages/classes/EditClass'
import ClassList from './pages/classes/ClassList'
import ClassView from './pages/classes/ClassView'

function App() {

  return (
    <Routes>
      {/* main menu routes */}
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/students' element={<Students />} />
        {/* <Route path='/teachers' element={<Teachers />} /> */}
        <Route path='/subjects' element={< Subjects />} />
        <Route path='/accounts' element={< Accounts />} />

        {/* Teacher dropdown routes */}
        <Route path='/addteacher' element={<AddTeacher />} />
        <Route path='/edit-teacher' element={<EditTeacher />} />
        <Route path='/teacherlist' element={<TeacherList />} />
        <Route path='/teacherview' element={<TeacherView />} />

        {/* Class dropdown routes */}
        <Route path='/addclass' element={<AddClass />}></Route>
        <Route path='/editclass' element={<EditClass />}></Route>
        <Route path='/classlist' element={<ClassList />}></Route>
        <Route path='/classview' element={<ClassView />}></Route>





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
