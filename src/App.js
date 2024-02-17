import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './FrontEnd/Components/Auth/Login';
import Signup from './FrontEnd/Components/Auth/Signup';
import Home from './FrontEnd/Components/Home/Home';
import AdminLogin from './Backend/Components/Auth/AdminLogin';
import AdminSignup from './Backend/Components/Auth/AdminSignup';
import Dashboard from './Backend/Components/Dashboard/Dashboard';
import Sidemenu from './Backend/Components/Layout/Sidemenu';
import AddClass from './Backend/Components/Class/AddClass';
import AddSubject from './Backend/Components/Subject/AddSubject';
import AddChapter from './Backend/Components/Chapter/AddChapter';
import AddQuestion from './Backend/Components/Questions/AddQuestion';
import ListClass from './Backend/Components/Class/ListClass';
import ManageSubject from './Backend/Components/Subject/ManageSubject';
import ManageChapter from './Backend/Components/Chapter/ManageChapter';
import ManageQuestion from './Backend/Components/Questions/ManageQuestion';
import ViewSingleQuestion from './Backend/Components/Questions/ViewSingleQuestion';
import Test from './FrontEnd/Components/Test/Test';
import Subject from './FrontEnd/Components/Test/Subject';
import Chapter from './FrontEnd/Components/Test/Chapter';
import Question from './FrontEnd/Components/Test/Question';
import ExamQuestion from './FrontEnd/Components/Test/Question/ExamQuestion';
import MainContext from './FrontEnd/Context/MainContext';
import QuestionSet from './FrontEnd/Components/Test/Question/QuestionSet';
import CreateQuesSet from './Backend/Components/Questions/CreateQuesSet';
import ExamInstraction from './FrontEnd/Components/Test/Question/ExamInstruction';
import TestOver from './FrontEnd/Components/Test/Question/TestOver';

function App() {
  return (

    <BrowserRouter>
      <MainContext>
        <Routes>


          {/* Admin */}

          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/admin_login' element={<AdminLogin />} ></Route>
          <Route path='/dashboard/admin_signup' element={<AdminSignup />}></Route>


          <Route element={<Sidemenu />}>
            <Route path='/dashboard/addClass' element={<AddClass />}></Route>
            <Route path='/dashboard/manage_class' element={<ListClass />}></Route>
            <Route path='/dashboard/addSubject' element={<AddSubject />}></Route>
            <Route path='/dashboard/manage_subject' element={<ManageSubject />}></Route>
            <Route path='/dashboard/addChapter' element={<AddChapter />}></Route>
            <Route path='/dashboard/manage_chapter' element={<ManageChapter />}></Route>
            <Route path='/dashboard/addQuestion' element={<AddQuestion />}></Route>
            <Route path='/dashboard/createQuesSet' element={<CreateQuesSet />}></Route>
            <Route path='/dashboard/manage_question' element={<ManageQuestion />}></Route>
            <Route path='/dashboard/manage_question/view/:id' element={<ViewSingleQuestion />}></Route>

          </Route>


          {/* Student */}

          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/test/class/:id' element={<Subject />}>
            
          </Route>
          <Route path='/test/class/subject/:id' element={<Chapter />}></Route>
          <Route path='/test/class/subject/chapter/set/:id' element={<QuestionSet />}></Route>

          <Route path='/test/class/subject/chapter/exam' element={<Question />}></Route>
          <Route path='/ExamInstractions' element={<ExamInstraction />}></Route>
          <Route path='/startExam' element={<ExamQuestion />}></Route>
          <Route path='/examOver' element={<TestOver />}></Route>


        </Routes>
      </MainContext>
    </BrowserRouter>

  );
}

export default App;
