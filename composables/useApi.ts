import ApiTarget from '@/services/TestServices'

export default async function useLoadingIndicator(target = null) {
    const api = new ApiTarget()
    const loading = ref(true)
    let data = null

    try {
        await api.getData(target).then((res: any) => {
            console.log(res)
            data = res
        })
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false
        return data
    }
}
