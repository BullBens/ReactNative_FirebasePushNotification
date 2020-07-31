import {ImagePickerOptions} from 'react-native-image-picker';

export const imagePickerOptions: ImagePickerOptions = {
  title: 'Choose option',
  cancelButtonTitle: 'Cancel',
  // takePhotoButtonTitle:''
  // chooseFromLibraryButtonTitle:''
  // chooseWhichLibraryTitle:''
  mediaType: 'photo',
  quality: 0.24,
  storageOptions: {
    skipBackup: true, // If true, the photo will NOT be backed up to iCloud
    path: 'images', // If set, will save the image at Documents/[path]/ rather than the root Documents for iOS, and Pictures/[path]/ on Android.
    cameraRoll: false, // If true, the cropped photo will be saved to the iOS Camera Roll or Android DCIM folder.
    waitUntilSaved: false, // If true, will delay the response callback until after the photo/video was saved to the Camera Roll. If the photo or video was just taken, then the file name and timestamp fields are only provided in the response object when this AND cameraRoll are both true.
    privateDirectory: false, // If true, the photo will be saved to the apps private files directory (Android/data/your_package/files/Pictures)
  },
};
//
// title?: string;
// cancelButtonTitle?: string;
// takePhotoButtonTitle?: string;
// chooseFromLibraryButtonTitle?: string;
// chooseWhichLibraryTitle?: string;
// customButtons?: ImagePickerCustomButtonOptions[];
// cameraType?: 'front' | 'back';
// mediaType?: 'photo' | 'video' | 'mixed';
// maxWidth?: number;
// maxHeight?: number;
// quality?: number;
// videoQuality?: 'low' | 'medium' | 'high';
// durationLimit?: number;
// rotation?: number;
// allowsEditing?: boolean;
// noData?: boolean;
// storageOptions?: ImagePickerStorageOptions;
// permissionDenied?: ImagePickerPermissionDeniedOptions;
// tintColor?: number | string;

// type ImagePickerStorageOptions = {
// 	skipBackup?: boolean
// 	path?: string
// 	cameraRoll?: boolean
// 	waitUntilSaved?: boolean
// 	privateDirectory?: boolean
// }

// type ImagePickerPermissionDeniedOptions = {
// 	title: string
// 	text: string
// 	reTryTitle: string
// 	okTitle: string
// }
