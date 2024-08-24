import localStoreHelper from "./local.store.helper"
import jwt_decode from "jwt-decode"

export default {
    decodeUserToken() {
        try {
            const accessToken = localStoreHelper.loadStr('token')
            if (accessToken == null) {
                return null
            }
            const decoded = jwt_decode(accessToken)
            return decoded
        } catch (error) {
            return false
            
        }
    },

    getPayloadToken() {
        const decodedToken = this.decodeUserToken()
        if (decodedToken == null) {
            return null
        }
        
        return decodedToken
    },

    getUserFromPayload() {
        const payload = this.getPayloadToken()
        if (payload == null) {
            return null
        }

        return payload.identity
    },

    getExpiryUserToken() {
        const decodedToken = this.decodeUserToken()
        if (!decodedToken) {
            return null;
        }
        const { exp } = decodedToken

        return exp
    },

    isExpired() {
        const expiry = this.getExpiryUserToken()
        const dateNow = Date.now() / 1000

        return expiry <= dateNow
    },
}
