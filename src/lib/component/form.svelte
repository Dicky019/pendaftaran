<script lang="ts">

    import type {Inputan} from '$lib/model/input'

    // let id:string;
    // let type:string;
    // let placeholder:string;
    // let autocomplete:string;
    export let data:Inputan;
    
    console.log(data)
</script>

<label for={data.id} class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
	>{data.title}</label
>
<input
	id={data.id}
	type={data.type}
	placeholder={data.placeholder}
	autocomplete={data.autocomplete}
    value={data.title}
	class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md "
	required
/>
