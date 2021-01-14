//폴더관리 방법
//머테리얼 사용법
//이미지 불러오는 방법
//사진찍기 버튼 활성화
//토스트캘린더 활용 방법
import './reset.css';
import AppBar from './components/AppBar/AppBar'
import BottomBar from './components/BottomBar/BottomBar'
import Calendar from './components/Calendar'
import Floating from './components/Floating'
import CarListView from './components/BottomBar/CarListView'
import Modal from './components/BottomBar/Modal'


function App() {
  return (
    <div className="App">

      <header className="headerWrap">
        <AppBar></AppBar>

      </header>
      
      <nav className="navWrap">
        <BottomBar></BottomBar>
      
      </nav>

      <section >
        <acticle className="calendarWrap">
          
          
          <Calendar></Calendar>
          
        </acticle>
        <acticle className="floatingWrap">
          <Floating></Floating>
        </acticle >
      </section>
      {/* <button type="button" class="btn btn-success">Success</button> */}      
      <footer></footer>
      

       
      
    </div>
  );
}

export default App;

