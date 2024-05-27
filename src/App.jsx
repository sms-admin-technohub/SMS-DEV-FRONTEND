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
import DirectorList from './pages/directors/DirectorList'
import DirectorView from './pages/directors/DirectorView'
import DirectorAdd from './pages/directors/DirectorAdd';
import DirectorEdit from './pages/directors/DirectorEdit';
import AddTeachers from './pages/teachers/AddTeachers'
import EditTeacher from './pages/teachers/EditTeacher'
import TeacherList from './pages/teachers/TeacherList'
import TeacherView from './pages/teachers/TeacherView'
import AddClassroomType from './pages/classroom_type/AddClassroomType'
import EditClassroomType from './pages/classroom_type/EditClassroomType'
import ClassroomTypeList from './pages/classroom_type/ClassroomTypeList'
import ClassroomTypeView from './pages/classroom_type/ClassroomTypeView'
import AddClass from './pages/class/AddClass'
import EditClass from './pages/class/EditClass'
import ClassList from './pages/class/ClassList'
import ClassView from './pages/class/ClassView'
import AddClassRoomTable from './pages/classroom_table/AddClassRoomTable'
import EditClassroomTable from './pages/classroom_table/EditClassRoomTable'
import ClassroomTableList from './pages/classroom_table/ClassroomTableList'
import AddPeriod from './pages/periods/AddPeriod'
import EditPeriod from './pages/periods/EditPeriod'
import PeriodList from './pages/periods/PeriodList'
import PeriodView from './pages/periods/PeriodView'
import AddGuardian from './pages/guardian/AddGuardian'
import EditGuardian from './pages/guardian/EditGuardian'
import GuardianList from './pages/guardian/GuardianList'
import GuardianView from './pages/guardian/GuardianView'
import AddTerm from './pages/term/AddTerm'
import TermList from './pages/term/TermList'
import TermView from './pages/term/TermView'
import EditTerm from './pages/term/EditTerm'

function App() {

  return (
    // here you replace these components with your actual components!
    <Routes>
      {/* main menu routes */}
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/students' element={<Students />} />
        <Route path='/directorList' element={<DirectorList />} />
        <Route path='/directorView' element={<DirectorView />} />
        <Route path='/directorEdit' element={<DirectorEdit />} />
        <Route path='/directorAdd' element={<DirectorAdd />} />
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

        {/* Teacher routes  */}
        <Route path='/addteacher' element={<AddTeachers/>}/>
        <Route path='/editeacher' element={<EditTeacher/>}/>
        <Route path='/teacherlist' element={<TeacherList/>}/>
        <Route path='/teacherview' element={<TeacherView/>}/>

        {/* Classroom type routes  */}
        <Route path='/addclassroom' element={<AddClassroomType/>}/>
        <Route path='/editclassroom' element={<EditClassroomType/>}/>
        <Route path='/classroomlist' element={<ClassroomTypeList/>}/>
        <Route path='/classroomview' element={<ClassroomTypeView/>}/>

        {/* Classes routes  */}
        <Route path='/addclass' element={<AddClass/>}/>
        <Route path='/editclass' element={<EditClass/>}/>
        <Route path='/classlist' element={<ClassList/>}/>
        <Route path='/classview' element={<ClassView/>}/>

        {/* Classroom table routes  */}
        <Route path='/addclassroomtable' element={<AddClassRoomTable/>}/>
        <Route path='/editclassroomtable' element={<EditClassroomTable/>}/>
        <Route path='/classroomtablelist' element={<ClassroomTableList/>}/>
        <Route path='/classroomtableview' element={<ClassroomTableList/>}/>

        {/* Periods routes  */}
        <Route path='/addperiod' element={<AddPeriod/>}></Route>
        <Route path='/editperiod' element={<EditPeriod/>}></Route>
        <Route path='/periodlist' element={<PeriodList/>}></Route>
        <Route path='/periodview' element={<PeriodView/>}></Route>

        {/* Guardian routes  */}
        <Route path='addguardian' element={<AddGuardian/>}></Route>
        <Route path='editguardian' element={<EditGuardian/>}></Route>
        <Route path='guardianlist' element={<GuardianList/>}></Route>
        <Route path='guardianview' element={<GuardianView/>}></Route>

        {/* Term routes  */}
        <Route path='addterm' element={<AddTerm/>}></Route>
        <Route path='termlist' element={<TermList/>}></Route>
        <Route path='termview' element={<TermView/>}></Route>
        <Route path='editterm' element={<EditTerm/>}></Route>




      </Route>
    </Routes>

  )
}

export default App
