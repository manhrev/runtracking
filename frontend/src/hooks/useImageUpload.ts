import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { restUploadImageClient } from '../utils/rest'
import { toast } from '../utils/toast/toast'

export function useImageUpload(pickerOption?: ImagePicker.ImagePickerOptions) {
  const [image, setImage] = useState<string | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const option: ImagePicker.ImagePickerOptions = {
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      ...pickerOption,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    }
    let { assets } = await ImagePicker.launchImageLibraryAsync(option)

    if (assets) {
      setImage(assets[0].uri)
    }
  }

  const uploadImage = async () => {
    if (image) {
      setUploading(true)
      const res = await restUploadImageClient.uploadImage(image)
      setUploading(false)
      return res
    }
    return {
      error: false,
      imageUrl: '',
    }
  }

  const clearSelectedImage = () => {
    setImage(null)
  }

  return {
    selectedImage: image,
    pickImage,
    uploadImage,
    loading: uploading,
    clearSelectedImage,
  }
}
