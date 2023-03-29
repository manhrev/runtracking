import AsyncStorage from '@react-native-async-storage/async-storage'
import { HOST, KEY_ACCESS_TOKEN } from '../grpc'

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
      return {
        error: true,
        imageUrl: '',
      }
    }

    const body = await res.json()
    return {
      error: false,
      imageUrl: ('https://storage.googleapis.com' + body.pathname) as string,
    }
  }
}

export const restUploadImageClient = new RestClient(HOST)
