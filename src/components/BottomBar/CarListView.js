import {useState} from 'react'
import CarData from '../../data/CarData'
import { makeStyles } from '@material-ui/core/styles';
import './carFilter.css'
import CallIcon from '@material-ui/icons/Call';
import EditIcon from '@material-ui/icons/Edit'
import Modal from './Modal'
import Grid from '@material-ui/core/Grid'

function 카리스트뷰() {
    let [카데이터, 변동카데이터] = useState (CarData)
    return(
        <div className="CarListWrap">            
            <차량필터/>
           {
               카데이터.map((a,i)=>{return (<카정보컴포넌트 carlist={a} />)})
           }
        </div>
    )
}

export default 카리스트뷰

function 차량필터(props) {
    return (
            <div className="typefilter">
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
        <div className="carListWrap" >
            <Grid container direction="column" justify="space-evenly" alignItems="center" item xs={3}>
                <img src={props.carlist.carImg} alt="dd"/>   
                <p>{props.carlist.lisence_plate}</p>
            </Grid>
            <Grid container direction="column" justify="space-evenly" alignItems="flex-star"item xs={7} >
                <p>위치 : {props.carlist.location}</p>
                <p>소속 : {props.carlist.company}</p>
                <p>상태 : {props.carlist.carstate[0]}</p>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2} item xs={2} >
                <CallIcon fontSize='large' spacing={1} onClick={()=>{setBtn(true)} } />
                <ModalPage ttt={btn}/>
                <EditIcon fontSize='large' />
            </Grid>
           
        </div>
        <hr/>   
        </>
       
    )
}






