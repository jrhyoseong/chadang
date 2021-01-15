import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './AntCalendar.css'

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '[강남]12하1234' },
        { type: 'success', content: '[강남]12하1234' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: '[강남]12하1234.' },
        { type: 'success', content: '[강남]12하1234.' },
        { type: 'error', content: '[강남]12하1234.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: '[강남]12하1234' },
        { type: 'success', content: '[강남]12하1234' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}



function 앤트캘린더(props) {
    return (
        <div>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
        </div>
    )
}

export default 앤트캘린더
