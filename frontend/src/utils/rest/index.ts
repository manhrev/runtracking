import AsyncStorage from '@react-native-async-storage/async-storage'
import { HOST, KEY_ACCESS_TOKEN } from '../grpc'
import restGoogleFitClient from './client/googleFit'
import restGoogleAuthClient from './client/googleAuth'

class RestClient {
  url: string = ''
  token: string = ''

  constructor(url: string) {
    this.url = url
    AsyncStorage.getItem(KEY_ACCESS_TOKEN).then(
      (accessToken) => {
        this.token = accessToken || ''
      },
      () => (this.token = '')
    )
  }

  async uploadImage(imageUri: string) {
    const data = new FormData()

    let filename = imageUri.split('/').pop() || ''

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`

    //@ts-ignore
    data.append('file', { uri: imageUri, name: filename, type })

    let res = await fetch(HOST + '/umage/upload-image', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${this.token}`,
      },
    })

    if (!res.ok) {
      console.log('upload image error', res.status, ' ', res.statusText)
      return {
        error: true,
        imageUrl: '',
      }
    }
    const body = await res.json()
    console.log(body)
    return {
      error: false,
      imageUrl: ('https://storage.googleapis.com' + body.pathname) as string,
    }
  }
}

const GOOGLE_FIT_BASE_URL = 'https://www.googleapis.com/fitness/v1/users/me'
const GOOGLE_AUTH_BASE_URL = 'https://www.googleapis.com/userinfo/v2'

export const restUploadImageClient = new RestClient(HOST)
export const googleFitClient = new restGoogleFitClient(GOOGLE_FIT_BASE_URL)
export const googleAuthClient = new restGoogleAuthClient(GOOGLE_AUTH_BASE_URL)
