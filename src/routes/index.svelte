<script lang="ts">
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '$lib/db/firebase';
import { goto } from '$app/navigation';
import { session } from "$app/stores";

const provider = new GoogleAuthProvider();
const login = async () =>
		await signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);

				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user.displayName;
				// onLogin = true;
				// ...
				

				goto('/informasion')
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
</script>

<div
	class="grid min-h-screen place-items-center bg-blue-500
	"
>
	<img
		src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/11/12/2857352854.png"
		alt=""
		class="object-fill h-screen w-screen"
	>
	<button class="absolute w-6/12 p-2 sm:w-4/12 bg-black text-white md:text-2xl md:p-3 rounded-md md:w-3/12 "
	on:click={login}>
		Daftar
	</button>
	<!-- <h1>{auth.currentUser.displayName ?? ""}</h1> -->
</div>
