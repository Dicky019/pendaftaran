import { initializeApp,getApps,getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, } from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBl2ZL-IdeiHulplNu1de-avhhzEWaBplo',
	authDomain: 'pendaftaran-kedai.firebaseapp.com',
	databaseURL: 'https://pendaftaran-kedai.firebaseio.com',
	projectId: 'pendaftaran-kedai',
	storageBucket: 'pendaftaran-kedai.appspot.com',
	messagingSenderId: '173578785882',
	appId: '1:173578785882:web:480769b7f8384545023463',
	measurementId: 'G-C1Y842BS5H'
};

let db;
let apps;
if (!getApps.length) {
apps =	initializeApp(config);
 }else {
	getApp(); // if already initialized, use that one
 }

db = getFirestore(apps)

var app = getAuth()

console.log("jalan")

export {db,app}