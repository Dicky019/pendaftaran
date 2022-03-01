<script lang="ts">
	import type { Inputan } from '$lib/model/input';
	import { db, auth } from '$lib/db/firebase';
	import { doc, setDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { session, getStores } from '$app/stores';

	onMount(() => {
        sessionStorage.setItem("user","Diki")
        console.log(sessionStorage.getItem("user"))
	});

	let firstname = '';
	let lastname = '';
	let noWa = '';
	let alamat = '';
	let kampus = '';

	const dataNoWa: Inputan = {
		title: 'no.Wa',
		id: 'noWa',
		type: 'tel',
		placeholder: '081-111-111',
		autocomplete: 'tel'
	};
	const dataAlamat: Inputan = {
		title: 'Alamat',
		id: 'alamat',
		type: 'text',
		placeholder: 'Btn Pao-Pao',
		autocomplete: 'new-password'
	};
	const dataKampus: Inputan = {
		title: 'Kampus',
		id: 'kampus',
		type: 'text',
		placeholder: 'Stmik',
		autocomplete: 'new-password'
	};
	const addUser = async () => {
		await setDoc(doc(db, 'test', 'diki'), {
			nama: {
				firstname,
				lastname
			},
			alamat,
			kampus,
			noWa
		});
		firstname = '';
		lastname = '';
		alamat = '';
		noWa = '';
		kampus = '';
	};
</script>

<div
	class="grid min-h-screen place-items-center bg-gray-200
	"
>
	<div class=" w-11/12 p-12 bg-white rounded-md sm:w-6/12 md:w-1/2 lg:w-4/12">
		<h1 class="text-xl font-semibold">
			Hello there 👋, <span class="font-normal">please fill in your information to continue</span>
		</h1>
		<form class="mt-6" on:submit|preventDefault={addUser}>
			<div class="flex justify-between gap-3">
				<span class="w-1/2">
					<label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase"
						>Firstname</label
					>
					<input
						bind:value={firstname}
						id="firstname"
						type="text"
						name="firstname"
						placeholder="John"
						autocomplete="given-name"
						class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"
						required
					/>
				</span>
				<span class="w-1/2">
					<label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase"
						>Lastname</label
					>
					<input
						bind:value={lastname}
						id="lastname"
						type="text"
						name="lastname"
						placeholder="Doe"
						autocomplete="family-name"
						class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"
						required
					/>
				</span>
			</div>
			<label for={dataNoWa.id} class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
				>{dataNoWa.title}</label
			>
			<input
				id={dataNoWa.id}
				placeholder={dataNoWa.placeholder}
				autocomplete={dataNoWa.autocomplete}
				bind:value={noWa}
				class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md "
				required
			/>
			<label for={dataAlamat.id} class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
				>{dataAlamat.title}</label
			>
			<input
				id={dataAlamat.id}
				placeholder={dataAlamat.placeholder}
				autocomplete={dataAlamat.autocomplete}
				bind:value={alamat}
				class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md "
				required
			/>
			<label for={dataKampus.id} class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
				>{dataKampus.title}</label
			>
			<input
				id={dataKampus.id}
				placeholder={dataKampus.placeholder}
				autocomplete={dataKampus.autocomplete}
				bind:value={kampus}
				class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md "
				required
			/>
			<button
				type="submit"
				class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-md"
			>
				Sign up
			</button>
			<!-- <p
				class="justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
			>
				Already registered?
			</p> -->
		</form>
	</div>
</div>
