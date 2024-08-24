import { apiGetData } from '@/helpers'
// 'https://dummyjson.com
export default class Services {
    base_path = 'users/'

    getData(target) {
        const url = `${target || this.base_path}?delay=2000`

        return  apiGetData(url)
    }

}
