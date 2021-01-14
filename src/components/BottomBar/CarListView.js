import {useState} from 'react'
import CarData from '../../data/CarData'
import { makeStyles } from '@material-ui/core/styles';
import './carFilter.css'
import CallIcon from '@material-ui/icons/Call';
import EditIcon from '@material-ui/icons/Edit'
import Modal from './Modal'


function 차량필터(props) {
    return (
            <div className="filter">
                <button>대기</button>
                <button>경차</button>
                <button>소형</button>
                <button>중형</button>
                <button>대형</button>
                <button>승합</button>
            </div>
    )
}

function ModalPage(props) {
    return (
      <Modal visible={props.ttt}>Hello</Modal>
    )
  }

function 카정보컴포넌트(props) {
    let [btn, setBtn] = useState(false);
    return(
        <>   
        <div className="carListWrap" tem xs={12} >
            <div  >
                <img src={props.carlist.carimg} alt="dd"/>   
                <p>{props.carlist.lisence_plate}</p>
            </div>
            <div>
                <p>{props.carlist.location}</p>
                <p>{props.carlist.model}</p>
                <p>{props.carlist.type}</p>
            </div>
            
            <CallIcon onClick={()=>{setBtn(true)} } />
            <EditIcon />
            <ModalPage ttt={btn}/>
        </div>
        <hr/>   
        </>
       
    )
}






function 카리스트뷰() {
    let [카데이터, 변동카데이터] = useState (CarData)
    return(
        <div className="CarListWrap">
            <Modal/>
            
            <차량필터/>
           {
               카데이터.map((a,i)=>{
                   return ( 
            <카정보컴포넌트 carlist={a} />
                   )
               })
           }
           
        </div>
    )
}

export default 카리스트뷰