import dayjs from 'dayjs'

// var uniqueNumber = 0

export default {
    formatStringDate(date, ISOdate = false) {
        if (date == null) return null
        const year = this.padTo2Digits(date.getFullYear())
        const month = this.padTo2Digits(date.getMonth() + 1)
        const day = this.padTo2Digits(date.getDate())
        const hour = this.padTo2Digits(date.getHours())
        const min = this.padTo2Digits(date.getMinutes())
        const sec = this.padTo2Digits(date.getSeconds())
        return ISOdate
            ? `${year}-${month}-${day}T${hour}:${min}:${sec}`
            : `${year}-${month}-${day} ${hour}:${min}:${sec}`
    },
    isObject(val) {
        if (typeof val === 'object' && val !== null) {
            return true
        } else {
            return false
        }
    },
    isString(val) {
        if (typeof val === 'string') {
            return true
        } else {
            return false
        }
    },
    padTo2Digits(num) {
        return String(num).padStart(2, '0')
    },
    updateObjValue(obj, val = null) {
        for (const key in obj) {
            obj[key] = val
        }
        return obj
    },
    format(date, format = 'YYYY-MM-DDTHH:mm:ss') {
        return dayjs(date).format(format)
    },
    dateNow() {
        const date = dayjs().format('YYYY-MM-DDTHH:mm:ss')
        return date
    },
    dateSubtract(val, type) {
        let decreaseDateFilter = dayjs()
        decreaseDateFilter = decreaseDateFilter.subtract(val, type)
        return decreaseDateFilter.format('YYYY-MM-DDTHH:mm:ss')
    },

    downloadFile(res, currentFilename = null) {
        if (!res) {
            return
        }
        const filename = currentFilename != null ? currentFilename : res?.filename
        const file = new File([res?.file], filename, { type: res?.type, lastModified: Date.now() })
        const file_url = URL.createObjectURL(file)
        const anchor = document.createElement('a')

        anchor.href = file_url
        anchor.download = filename
        document.body.appendChild(anchor)

        anchor.click()

        document.body.removeChild(anchor)
        URL.revokeObjectURL(file_url)
    },
    async sortAndGrouping(obj = { arr: [], groupBy: '', sortBy: '' }) {
        if (obj.arr.length == 0 || !obj) return []

        obj.arr.sort((a, b) => a[`${obj.groupBy}`].localeCompare(b[`${obj.groupBy}`]))

        const groupedAndSorted = obj.arr.reduce((acc, item) => {
            const key = item[`${obj.groupBy}`]

            if (!acc[key]) {
                acc[key] = []
            }

            acc[key].push(item)

            // Sort the items within each group by bureau_name
            acc[key].sort((a, b) => a[`${obj.sortBy}`].localeCompare(b[`${obj.sortBy}`]))

            return acc
        }, {})
        return Object.values(groupedAndSorted).flat()
    },

    async sortAndGroupingV2(obj = { arr: [], groupBy: '', sortBy: '' }) {
        if (obj.arr.length == 0 || !obj) return []

        obj.arr.sort((a, b) => a[`${obj.groupBy}`].localeCompare(b[`${obj.groupBy}`]))

        // Group by corporate
        const grouped = obj.arr.reduce((result, item) => {
            const key = item[`${obj.groupBy}`]
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(item)
            return result
        }, {})

        // Sort each group by index
        for (const key in grouped) {
            if (grouped.hasOwnProperty(key)) {
                grouped[key].sort((a, b) => a[`${obj.sortBy}`] - b[`${obj.sortBy}`])
            }
        }

        // Convert the grouped and sorted data back to an array
        obj.arr = Object.values(grouped).flat()

        return Object.values(obj.arr).flat()
    },

    generateUniqueNumber() {
        var date = Date.now()

        // If created at same millisecond as previous
        if (date <= this.generateUniqueNumber.previous) {
            date = ++this.generateUniqueNumber.previous
        } else {
            this.generateUniqueNumber.previous = date
        }
        return date
    },

    rangeDateInMinutes(start, end) {
        let startDate = new Date(start)
        let endDate = new Date(end)

        // Calculate the difference in milliseconds
        let differenceInMilliseconds = endDate - startDate

        // Convert milliseconds to minutes
        return differenceInMilliseconds / (1000 * 60)
    },

    // soonly convert to composable
    formResetDate({ form, number, unit }) {
        form.startDate = this.dateSubtract(number, unit)
        form.endDate = this.dateNow()

        return form
    },
}
