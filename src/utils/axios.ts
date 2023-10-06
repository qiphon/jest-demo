import axios from 'axios'

export const testApi = () => axios.get('https://suggest.taobao.com/sug?code=utf-8&q=mac')
export const testApi404 = () => axios.get('https://suggest1.taobao.com/sug?code=utf-8&q=mac')