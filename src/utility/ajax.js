import axios from 'axios';

// 首頁用於呼叫多個照片縮圖
// order: 從第幾筆資料開始取（從 0 起算）,
// quantity: 此次呼叫要求的數量
export const getPhotoList = (order, quantity, callback) => {
	axios({
		method: 'POST',
		baseURL: 'http://127.0.0.1:8000',
		url: '/api/photos',
		data: {
			order,
			quantity,
		},
	})
		.then(res => {
			const { responsePhotos } = res.data;
			callback(quantity, responsePhotos);
		})
		.catch(error => console.log(error));
};

// 用於請求大尺寸照片
// photoId 為照片在 DB 中的 ID
export const getPhotoData = (photoId, callback) => {
	axios({
		method: 'GET',
		baseURL: 'http://127.0.0.1:8000',
		url: `/api${photoId}`,
	})
		.then(res => {
			const data = res.data.photoData;
			callback(data);
		})
		.catch(error => console.log(error));
};
