import { StatusCode as grpcStatusCode } from 'grpc-web'
import rpcAuthClient from './client/auth'
import { Code as AuthCode } from '../../lib/auth/auth_code_pb'
import Constants from 'expo-constants'
import rpcActivityClient from './client/activity'
import rpcNotificationClient from './client/notification'
import rpcPlanClient from './client/plan'
import rpcGroupClient from './client/group'
import { toast } from '../toast/toast'

export * from './abstract/gRPCClient'
export * from './abstract/types'
import * as Updates from 'expo-updates';

const inDevelopmentMode = process.env.NODE_ENV === "development";
const manifest = Updates.manifest?.extra?.expoGo

const onAuthError = (error: any, serviceName: any) => {
  toast.error({ message: 'An error occured!' })
}

var HOST: string;

if(inDevelopmentMode){
  HOST = `http://${manifest?.debuggerHost
  ?.split(':')
  .shift()
  ?.concat(':8080')}`
}
else{
  HOST = `https://gateway-jzg35jprna-as.a.run.app`
}

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
export const activityClient = new rpcActivityClient(activityConfig)

export const authClient = new rpcAuthClient(authConfig)
export const notificationClient = new rpcNotificationClient(notificationConfig)
export const planClient = new rpcPlanClient(notificationConfig)
export const groupClient = new rpcGroupClient(notificationConfig)
