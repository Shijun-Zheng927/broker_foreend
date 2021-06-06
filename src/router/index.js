import Router from 'vue-router'
import MainPage from '../view/MainPage.vue'
import LoginPage from '../view/LoginPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import Overview from '../components/Overview.vue'
import PersonalPage from '../view/PersonalPage.vue'
import UserInfo from '../components/UserInfo.vue'
import UserBanl from '../components/UserBanl.vue'
import MdPage from '../view/MdPage.vue'
import ShopPanel from '../components/ShopPanel.vue'
import ConsolePage from '../view/ConsolePage.vue'
import BucketPanel from '../components/BucketPanel.vue'
import BucketList from '../components/BucketList.vue'
import FileManager from '../components/FileManager.vue'
import UpFile from '../components/UpFile.vue'
import AdminLogin from '../view/AdminLogin.vue'
import BucketAbout from '../components/BucketAbout.vue'
import RwPolicy from '../components/RwPolicy.vue'
import BucketTag from '../components/BucketTag.vue'
import APIText from '../view/APIText.vue'
import APIOverview from '../components/APIOverview.vue'
import CreateBucket from '../components/APITexts/BucketText/CreateBucket.vue'
import DeleteBucket from '../components/APITexts/BucketText/DeleteBucket.vue'
import DeleteBucketPolicy from '../components/APITexts/BucketText/DeleteBucketPolicy.vue'
import DoesBucketExist from '../components/APITexts/BucketText/DoesBucketExist.vue'
import GetBucketAcl from '../components/APITexts/BucketText/GetBucketAcl.vue'
import GetBucketInfo from '../components/APITexts/BucketText/GetBucketInfo.vue'
import GetBucketLocation from '../components/APITexts/BucketText/GetBucketLocation.vue'
import GetBucketPolicy from '../components/APITexts/BucketText/GetBucketPolicy.vue'
import GetBucketQuota from '../components/APITexts/BucketText/GetBucketQuota.vue'
import GetBucketStorageClass from '../components/APITexts/BucketText/GetBucketStorageClass.vue'
import GetBucketStorageInfo from '../components/APITexts/BucketText/GetBucketStorageInfo.vue'
import ListAllBucket from '../components/APITexts/BucketText/ListAllBucket.vue'
import ListRequestBucket from '../components/APITexts/BucketText/ListRequestBucket.vue'
import SetBucketAcl from '../components/APITexts/BucketText/SetBucketAcl.vue'
import SetBucketInventory from '../components/APITexts/BucketText/SetBucketInventory.vue'
import SetBucketPolicy from '../components/APITexts/BucketText/SetBucketPolicy.vue'
import SetBucketQuota from '../components/APITexts/BucketText/SetBucketQuota.vue'
import SetBucketStoragePolicy from '../components/APITexts/BucketText/SetBucketStoragePolicy.vue'
import CheckPointDownload from '../components/APITexts/DownloadText/CheckPointDownload.vue'
import RangeDownload from '../components/APITexts/DownloadText/RangeDownload.vue'
import StreamDownload from '../components/APITexts/DownloadText/StreamDownload.vue'
import CloseBucketLog from '../components/APITexts/LogText/CloseBucketLog.vue'
import GetBucketLog from '../components/APITexts/LogText/GetBucketLog.vue'
import OpenBucketLog from '../components/APITexts/LogText/OpenBucketLog.vue'
import CopyObject from '../components/APITexts/ObjectText/CopyObject.vue'
import DeleteObject from '../components/APITexts/ObjectText/DeleteObject.vue'
import IfObjectExist from '../components/APITexts/ObjectText/IfObjectExist.vue'
import PagingList from '../components/APITexts/ObjectText/PagingList.vue'
import PagingListWithPrefix from '../components/APITexts/ObjectText/PagingListWithPrefix.vue'
import SimpleList from '../components/APITexts/ObjectText/SimpleList.vue'
import SimpleListWithNP from '../components/APITexts/ObjectText/SimpleListWithNP.vue'
import SimpleListWithNum from '../components/APITexts/ObjectText/SimpleListWithNum.vue'
import SimpleListWithPrefix from '../components/APITexts/ObjectText/SimpleListWithPrefix.vue'
import DeleteBucketTag from '../components/APITexts/TagText/DeleteBucketTag.vue'
import GetBucketTag from '../components/APITexts/TagText/GetBucketTag.vue'
import ListBucketByTag from '../components/APITexts/TagText/ListBucketByTag.vue'
import SetBucketTag from '../components/APITexts/TagText/SetBucketTag.vue'
import AbortMultipartUpload from '../components/APITexts/UploadText/AbortMultipartUpload.vue'
import AppendObjectFile from '../components/APITexts/UploadText/AppendObjectFile.vue'
import AppendObjectFileFirst from '../components/APITexts/UploadText/AppendObjectFileFirst.vue'
import AppendObjectStream from '../components/APITexts/UploadText/AppendObjectStream.vue'
import AppendObjectStreamFirst from '../components/APITexts/UploadText/AppendObjectStreamFirst.vue'
import CheckPointUpload from '../components/APITexts/UploadText/CheckPointUpload.vue'
import CompMultipartUpload from '../components/APITexts/UploadText/CompMultipartUpload.vue'
import CreateFolder from '../components/APITexts/UploadText/CreateFolder.vue'
import InitMultipartUpload from '../components/APITexts/UploadText/InitMultipartUpload.vue'
import ListMultipartUploads from '../components/APITexts/UploadText/ListMultipartUploads.vue'
import ListMultipartUploadsBP from '../components/APITexts/UploadText/ListMultipartUploadsBP.vue'
import ListPartsAll from '../components/APITexts/UploadText/ListPartsAll.vue'
import ListPartsByPaper from '../components/APITexts/UploadText/ListPartsByPaper.vue'
import MultipartUpload from '../components/APITexts/UploadText/MultipartUpload.vue'
import PutBytes from '../components/APITexts/UploadText/PutBytes.vue'
import PutFile from '../components/APITexts/UploadText/PutFile.vue'
import PutFileStream from '../components/APITexts/UploadText/PutFileStream.vue'
import PutStream from '../components/APITexts/UploadText/PutStream.vue'
import PutString from '../components/APITexts/UploadText/PutString.vue'
import SimpleListParts from '../components/APITexts/UploadText/SimpleListParts.vue'
import SimpleListMultipartUploads from '../components/APITexts/UploadText/SimpleListMultipartUploads.vue'
import APITemplate from '../components/APITemplate.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/MainPage',
      component: MainPage,
      redirect: '/MainPage/Overview',
      children: [
        {path: 'Overview', component: Overview},
        {path: 'ShopPanel', component: ShopPanel}
      ]
    },
    {
      path:'/',
      redirect:'/MainPage'
    },
    {
      path: '/LoginPage',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      component: RegisterPage
    },
    {
      path: '/PersonalPage',
      component: PersonalPage,
      redirect: '/PersonalPage/UserInfo',
      children: [
        {path: 'UserInfo', component: UserInfo},
        {path: 'UserBanl', component: UserBanl},
      ]
    },
    {
      path: '/ConsolePage',
      name: 'ConsolePage',
      component: ConsolePage,
      redirect: '/ConsolePage/BucketList',
      children: [
        {
          path: 'BucketPanel', 
          component: BucketPanel, 
          name: 'BucketPanel',
          redirect: '/ConsolePage/BucketPanel/BucketAbout',
          children: [
            {path: 'FileManager', component: FileManager, name: 'FileManager'},
            {path: 'UpFile', component: UpFile, name: 'UpFile'},
            {path: 'BucketAbout', component: BucketAbout, name: 'BucketAbout'},
            {path: 'RwPolicy', component: RwPolicy, name: 'RwPolicy'},
            {path: 'BucketTag', component: BucketTag, name: 'BucketTag'},
          ]
        },
        {path: 'BucketList', component: BucketList, name: 'BucketList'},
      ]
    },
    {
      path: '/MdPage',
      component: MdPage
    },
    {
      path: '/AdminLogin',
      component: AdminLogin,
    },
    {
      path: '/APIText',
      component: APIText,
      redirect: '/APIText/APIOverview',
      children: [
        {path: 'APIOverview', component: APIOverview},
        {path: 'APITemplate', component: APITemplate},
        {path: 'CreateBucket', component: CreateBucket},
        {path: 'DeleteBucket', component: DeleteBucket},
        {path: 'DeleteBucketPolicy', component: DeleteBucketPolicy},
        {path: 'DoesBucketExist', component: DoesBucketExist},
        {path: 'GetBucketAcl', component: GetBucketAcl},
        {path: 'GetBucketInfo', component: GetBucketInfo},
        {path: 'GetBucketLocation', component: GetBucketLocation},
        {path: 'GetBucketPolicy', component: GetBucketPolicy},
        {path: 'GetBucketQuota', component: GetBucketQuota},
        {path: 'GetBucketStorageClass', component: GetBucketStorageClass},
        {path: 'GetBucketStorageInfo', component: GetBucketStorageInfo},
        {path: 'ListAllBucket', component: ListAllBucket},
        {path: 'ListRequestBucket', component: ListRequestBucket},
        {path: 'SetBucketAcl', component: SetBucketAcl},
        {path: 'SetBucketInventory', component: SetBucketInventory},
        {path: 'SetBucketPolicy', component: SetBucketPolicy},
        {path: 'SetBucketQuota', component: SetBucketQuota},
        {path: 'SetBucketStoragePolicy', component: SetBucketStoragePolicy},
        {path: 'CheckPointDownload', component: CheckPointDownload},
        {path: 'RangeDownload', component: RangeDownload},
        {path: 'StreamDownload', component: StreamDownload},
        {path: 'CloseBucketLog', component: CloseBucketLog},
        {path: 'GetBucketLog', component: GetBucketLog},
        {path: 'OpenBucketLog', component: OpenBucketLog},
        {path: 'CopyObject', component: CopyObject},
        {path: 'DeleteObject', component: DeleteObject},
        {path: 'IfObjectExist', component: IfObjectExist},
        {path: 'PagingList', component: PagingList},
        {path: 'PagingListWithPrefix', component: PagingListWithPrefix},
        {path: 'SimpleList', component: SimpleList},
        {path: 'SimpleListParts', component: SimpleListParts},
        {path: 'SimpleListWithNP', component: SimpleListWithNP},
        {path: 'SimpleListWithNum', component: SimpleListWithNum},
        {path: 'SimpleListWithPrefix', component: SimpleListWithPrefix},
        {path: 'DeleteBucketTag', component: DeleteBucketTag},
        {path: 'GetBucketTag', component: GetBucketTag},
        {path: 'ListBucketByTag', component: ListBucketByTag},
        {path: 'SetBucketTag', component: SetBucketTag},
        {path: 'AbortMultipartUpload', component: AbortMultipartUpload},
        {path: 'AppendObjectFile', component: AppendObjectFile},
        {path: 'AppendObjectFileFirst', component: AppendObjectFileFirst},
        {path: 'AppendObjectStream', component: AppendObjectStream},
        {path: 'AppendObjectStreamFirst', component: AppendObjectStreamFirst},
        {path: 'CheckPointUpload', component: CheckPointUpload},
        {path: 'CompMultipartUpload', component: CompMultipartUpload},
        {path: 'CreateFolder', component: CreateFolder},
        {path: 'InitMultipartUpload', component: InitMultipartUpload},
        {path: 'ListMultipartUploads', component: ListMultipartUploads},
        {path: 'ListMultipartUploadsBP', component: ListMultipartUploadsBP},
        {path: 'ListPartsAll', component: ListPartsAll},
        {path: 'ListPartsByPaper', component: ListPartsByPaper},
        {path: 'MultipartUpload', component: MultipartUpload},
        {path: 'PutBytes', component: PutBytes},
        {path: 'PutFile', component: PutFile},
        {path: 'PutFileStream', component: PutFileStream},
        {path: 'PutStream', component: PutStream},
        {path: 'PutString', component: PutString},
        {path: 'SimpleListMultipartUploads', component: SimpleListMultipartUploads},
      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/LoginPage'||to.path === '/RegisterPage') {
//     next();
//   } else {
//     let token = window.sessionStorage.getItem("token");
 
//     if (!token) {
//       next('/LoginPage');
//     } else {
//       next();
//     }
//   }
// });
export default router