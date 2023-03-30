import './App.css';
import * as xlsx from 'xlsx';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const readUploadFile = (e) => {
    console.log('aaaaaa');
    setIsLoading(true);
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        handleData(json);
        // console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const handleData = (data) => {
    let currentDept = null;
    let arr = {
      ma_don_vi: '',
      ten_don_vi: '',
      data: [],
    };
    let all_result = [];
    data.forEach((element) => {
      if (!element.don_vi_cap_2) {
        currentDept = element.__EMPTY;
        all_result.push(arr);
        arr = {
          ma_don_vi: '',
          ten_don_vi: '',
          data: [],
        };
        return;
      }
      arr.ma_don_vi = element.ma_don_vi_cap_2;
      arr.ten_don_vi = currentDept;
      arr.data.push(element);
    });
    all_result.shift();
    setResult(all_result);
    setIsLoading(false);
  };

  const handleTotalHS = (data) => {
    let count = 0;
    data.map((item) => (count = count + item.data.length));
    return count;
  };

  return (
    <div className='App'>
      {/* <label for="formFile" class="form-label">Default file input example</label> */}
      {isLoading && (
        <div class='alert alert-danger' role='alert'>
          Đang thực hiện....
        </div>
      )}
      {!isLoading && !!result.length && (
        <div class='alert alert-success' role='alert'>
          Đã hoàn thành!
        </div>
      )}
      <div className='container'>
        <div className='row my-3'>
          <div className='col-6'>
            <input className='form-control' type='file' name='upload' id='upload' onChange={readUploadFile} />
          </div>
        </div>
        <div>
          <h5 className='fw-bolder'>Thống kê chung</h5>
          <p>Tổng số hồ sơ trên hệ thống: {handleTotalHS(result)}</p>
        </div>
        <table className='table table-bordered border-black table-striped'>
          <thead>
            <tr>
              <th className='table-bordered text-center'>STT</th>
              <th className='table-bordered text-center'>Mã đơn vị</th>
              <th className='table-bordered text-center'>Tên Đơn vị</th>
              <th className='table-bordered text-center' style={{ width: 180 }}>
                Số lượng hồ sơ có trên hệ thống
              </th>
              <th className='table-bordered text-center' style={{ width: 160 }}>
                Số lượng file đính kèm 2C
              </th>
            </tr>
          </thead>
          <tbody>
            {result &&
              !!result.length &&
              result.map((item, index) => (
                <tr key={index}>
                  <td className='table-bordered text-center'>{index + 1}</td>
                  <td className='table-bordered text-start'>{item.ma_don_vi}</td>
                  <td className='table-bordered text-start'>{item.ten_don_vi}</td>
                  <td className='table-bordered text-center'>{item.data.length}</td>
                  <td className='table-bordered text-center'>{item.data.filter((ele) => ele.so_ho_so > 0).length}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
