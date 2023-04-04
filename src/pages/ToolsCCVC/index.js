import React, { useState } from 'react';
import * as xlsx from 'xlsx';

const ToolsCCVCPage = (props) => {
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
        xlsx.utils.sheet_add_aoa(worksheet, [['don_vi', 'don_vi_cap_2', '', 'ma_don_vi_cap_2', '', '', '', '', '', '', 'so_ho_so']], { origin: 'B1' });
        const json = xlsx.utils.sheet_to_json(worksheet);
        console.log(json);
        handleData(json);
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
    all_result.push({
      ma_don_vi: '000.00.00.K41',
      ten_don_vi: 'Văn phòng HĐND và Đoàn ĐBQH tỉnh Nghệ An',
      data: 49,
    });
    setResult(all_result);
    setIsLoading(false);
  };

  const handleTotalHS = (data) => {
    let count = 0;
    data.map((item) => (count = count + (Array.isArray(item.data) ? item.data.length : item.data)));
    return count;
  };

  return (
    <div>
      <div className='container'>
        {isLoading && (
          <div className='alert alert-danger' role='alert'>
            Đang thực hiện....
          </div>
        )}
        {!isLoading && !!result.length && (
          <div className='alert alert-success' role='alert'>
            Đã hoàn thành!
          </div>
        )}
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
                  <td className='table-bordered text-center'>{Array.isArray(item.data) ? item.data.length : item.data}</td>
                  <td className='table-bordered text-center'>{Array.isArray(item.data) ? item.data.filter((ele) => ele.so_ho_so > 0).length : item.data}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ToolsCCVCPage.propTypes = {};

export default ToolsCCVCPage;
