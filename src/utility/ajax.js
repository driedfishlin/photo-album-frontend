// >> 非同步請求模組
import axios from 'axios';

// SERVER SETTING
const baseURL = 'https://frame-of-the-state.herokuapp.com/';
// const baseURL = 'http://127.0.0.1:8000';

// 首頁用於呼叫多個照片縮圖
// order: 從第幾筆資料開始取（從 0 起算）,
// quantity: 此次呼叫要求的數量
// callback, errorHandle 為回呼函數
export const getPhotoList = (order, quantity, callback, errorHandle) => {
	axios({
		method: 'POST',
		baseURL: baseURL,
		url: '/api/photos',
		data: {
			order,
			quantity,
		},
	})
		.then(res => {
			const { responsePhotos, noMoreData } = res.data;
			callback(quantity, responsePhotos, noMoreData);
		})
		.catch(error => {
			console.log(error);
			errorHandle();
		});
};

// 用於請求大尺寸照片
// photoId 為照片在 DB 中的 ID
// errorHandle 為錯誤處理 callback
export const getPhotoData = (photoId, callback, errorHandle) => {
	axios({
		method: 'GET',
		baseURL: baseURL,
		url: `/api${photoId}`,
	})
		.then(res => {
			const data = res.data.photoData;
			callback(data);
		})
		.catch(error => {
			console.log(error);
			errorHandle();
		});
};
