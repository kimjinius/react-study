import axios from 'axios';

const apiUrl = 'http://localhost:5000/sendJsonData';

// apiUrl 에 post요청을 보내고 해당 요청의 응답을 처리하는 비동기함수
export const postTest = async (text) => {
    try {
        console.log("postTest   " + text);
        
        const requestBody = {text: text,};

        // axios.post 메서드는 프로미스를 반환한다.
        // 프로미스 객체는 비동기 작업의 완료 또는 실패를 나타내는 객체입니다. 
        // 프로미스 객체 안에는 성공적인 경우에는 resolve 콜백 함수에 전달된 값이, 실패한 경우에는 reject 콜백 함수에 전달된 에러 객체가 들어 있습니다.
        // post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
        const response = await axios.post(apiUrl, requestBody);

        console.log("response   :", response);
        return response.data;
    } catch (error) {
        console.error("Error in postTest:", error);
        throw error; 
    }
};

