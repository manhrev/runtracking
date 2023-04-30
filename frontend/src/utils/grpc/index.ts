import rpcAuthClient from './client/auth'

import rpcActivityClient from './client/activity'
import rpcNotificationClient from './client/notification'
import rpcPlanClient from './client/plan'
import rpcGroupClient from './client/group'
import rpcChatClient from './client/chat'
import { toast } from '../toast/toast'

export * from './abstract/gRPCClient'
export * from './abstract/types'
import * as Updates from 'expo-updates'
import rpcEventClient from './client/event'

const inDevelopmentMode = process.env.NODE_ENV === 'development'
const manifest = Updates.manifest?.extra?.expoGo

const onAuthError = (error: any, serviceName: any) => {
  toast.error({ message: 'An error occured!' })
}

export var HOST: string

// if (inDevelopmentMode) {
HOST = `http://${manifest?.debuggerHost?.split(':').shift()?.concat(':8080')}`
// } else {
// HOST = `https://gateway-jzg35jprna-as.a.run.app`
// }
console.log(process.env.NODE_ENV)
console.log("You're running on " + HOST)

const authConfig = {
  hostname: HOST,
  onError: onAuthError,
}

const activityConfig = {
  hostname: HOST,
  onError: onAuthError,
}

const notificationConfig = {
  hostname: HOST,
  onError: onAuthError,
}

const chatConfig = {
  hostname: HOST,
  onError: onAuthError,
}

export const activityClient = new rpcActivityClient(activityConfig)
export const chatClient = new rpcChatClient(chatConfig)
export const authClient = new rpcAuthClient(authConfig)
export const notificationClient = new rpcNotificationClient(notificationConfig)
export const planClient = new rpcPlanClient(notificationConfig)
export const groupClient = new rpcGroupClient(notificationConfig)
export const eventClient = new rpcEventClient(notificationConfig)
