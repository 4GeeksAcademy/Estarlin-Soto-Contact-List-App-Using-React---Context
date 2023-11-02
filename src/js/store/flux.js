import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},

			],
			agenda: [],

			inputs: {
				nameInput: "",
				emailInput: "",
				agenda_slug: "estarlin_agenda",
				addressInput: "",
				phoneInput: ""
			}

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getAgenda: async () => {
				try {
					const store = getStore()
					await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/estarlin_agenda")
						.then(res => res.json())
						.then(data => {
							data.map((e) => store.agenda.push(e))
							setStore({ agenda: store.agenda })
						})

				} catch (e) { console.log("Error de Get agenda = ", e) }

			},

			setName : async (name, va) => {
				const store = getStore()
				store.inputs.nameInput = name
				await setStore({ name: store.inputs.nameInput })
				console.log(store.inputs)
			},

			setEmail: async (email) => {
				const store = getStore()
				store.inputs.emailInput = email
				await setStore({ email: store.inputs.emailInput })
				console.log(store.inputs)
			},


			setAddress: async (address) => {
				const store = getStore()
				store.inputs.addressInput = address
				await setStore({ address: store.inputs.addressInput })
				console.log(store.inputs)
			},
			setPhone: (phone) => {
				const store = getStore()
				store.inputs.phoneInput = phone
				setStore({ phone: store.inputs.phoneInput })
				console.log(store.inputs)

			},

			sendform: async () => {
				const store = getStore()
				try {
					if (store.inputs.nameInput != " ") {
						const data = {		
							email: store.inputs.emailInput,
							agenda_slug: "estarlin_agenda",
							address: store.inputs.addressInput,
							phone: store.inputs.phoneInput,
							full_name: store.inputs.nameInput
						}

						await fetch('https://playground.4geeks.com/apis/fake/contact', {
							method: "POST",
							headers: {
								"Content-type": "application/json"
							},
							body: JSON.stringify(data)
						}).then((res) => res.json())
							.then((json) => console.log(json))

						console.log(store.inputs.nameInput)
					} else {
						alert("LLena todos los campos para poder seguir")
						location.reload()
					}
				}
				catch (e) {
					console.log("send form ERROR ===", e)
				}
			},
			
			deleteUser : async (i) =>{
				try{
					let id = i
					await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {method: "DELETE",})
					location.reload()
					
				}catch(e){
					console.log("Delete User Fucntion ERROR===", e)
				}
			},

			editUser: async (ele, key) =>{
				
				try{

				const store = getStore()

				let data = {		
					email: store.inputs.emailInput,
					agenda_slug: "estarlin_agenda",
					address: store.inputs.addressInput,
					phone: store.inputs.phoneInput,
					full_name: store.inputs.nameInput
				}

				if( ele.email.length == 0){
					let email = store.agenda[key].email
					data.email = email
					console.log(store.agenda[key].email)
				}

				if( ele.phone.length == 0){
					let phone = store.agenda[key].phone
					data.phone= phone
					
				}

				if( ele.full_name.length == 0){
					let name = store.agenda[key].full_name
					data.full_name = name
					
				}

				if( ele.address.length == 0){
					let address = store.agenda[key].address
					data.address = address
					
				}
				let id = ele.id

		

				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,
				{method : "PUT", 
				 headers : {'Content-type': 'application/json'
				},
				body : JSON.stringify(data)
				});

				
				
				}
				catch(e){
					console.log("editUser Function Error ===", e)
				}
				
			}
			





			/*,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}*/
		}
	};
};

export default getState;
