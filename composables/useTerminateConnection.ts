import { abortConnection } from '~/helpers'

// put this code in beginning of page
export const useTerminateConnection = () => {
    abortConnection()
}
