import Dashboard from './pages/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Students from './pages/students/Students'
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
import DirectorList from './pages/directors/DirectorList'
import DirectorView from './pages/directors/DirectorView'
import DirectorAdd from './pages/directors/DirectorAdd';
import DirectorEdit from './pages/directors/DirectorEdit';
import DepartmentList from './pages/departments/DepartmentList'
import DepartmentView from './pages/departments/DepartmentView'
import DepartmentAdd from './pages/departments/DepartmentAdd'
import DepartmentEdit from './pages/departments/DepartmentEdit'

function App() {

  return (
    // here you replace these components with your actual components!
    <Routes>
      {/* main menu routes */}
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/students' element={<Students />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/directorList' element={<DirectorList />} />
        <Route path='/directorView' element={<DirectorView />} />
        <Route path='/directorEdit' element={<DirectorEdit />} />
        <Route path='/directorAdd' element={<DirectorAdd />} />
        <Route path='/departmentList' element={<DepartmentList />} />
        <Route path='/departmentView' element={<DepartmentView />} />
        <Route path='/departmentEdit' element={<DepartmentEdit />} />
        <Route path='/departmentAdd' element={<DepartmentAdd/>} />
        <Route path='/subjects' element={< Subjects />} />
        <Route path='/accounts' element={< Accounts />} />


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
