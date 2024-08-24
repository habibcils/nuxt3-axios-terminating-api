export default {
  save(obj = {}, key = 'key') {
    try {
      const strObj = JSON.stringify(obj)
      localStorage.setItem(key, strObj)
    } catch (error) {
      throw new Error('Failed to save object to local storage')
    }
  },

  load(key = 'key') {
    try {
      const strObj = localStorage.getItem(key)
      return JSON.parse(strObj)
    } catch (error) {
      throw new Error('Failed to load object from local storage')
    }
  },

  saveStr(str = '', key = 'key') {
    try {
      localStorage.setItem(key, str)
    } catch (error) {
      throw new Error('Failed to save string to local storage')
    }
  },

  loadStr(key) {
    try {
      const str = localStorage.getItem(key)
      return str
    } catch (error) {
      throw new Error('Failed to load string from local storage')
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      throw new Error('Failed to remove obj from key')
    }
  },

  clear() {
    localStorage.clear()
  },
}
