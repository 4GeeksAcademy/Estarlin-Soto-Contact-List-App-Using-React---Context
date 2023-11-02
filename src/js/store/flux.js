import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//declaro un array para llenarlos con los objetos obtenidos del GET
			agenda: [],

			//declaro un objeto para luego llenarlo con el valor de mis inputs
			inputs: {
				nameInput: "",
				emailInput: "",
				agenda_slug: "estarlin_agenda",
				addressInput: "",
				phoneInput: ""
			}

		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//hago un mi GET request para luego llenar mi array que lleva el nombre de agenda
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

			//delcaro las funciones para llenar mi objeto inputs con los valores ingresados en los inputs de los formularios
			setName: async (name) => {
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

					const data = {
						email: store.inputs.emailInput,
						agenda_slug: "estarlin_agenda",
						address: store.inputs.addressInput,
						phone: store.inputs.phoneInput,
						full_name: store.inputs.nameInput
					}
					if (data.full_name.length !== 0 || data.phone.length !== 0 || data.address.length !== 0 || data.email.length !== 0) {


						await fetch('https://playground.4geeks.com/apis/fake/contact', {
							method: "POST",
							headers: {
								"Content-type": "application/json"
							},
							body: JSON.stringify(data)
						}).then((res) => res.json())
							.then((json) => console.log(json))


					}
				}
				catch (e) {
					console.log("send form ERROR ===", e)
					alert("LLena todos los campos para poder seguir")
				}
			},

			deleteUser: async (i) => {
				try {
					let id = i
					await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, { method: "DELETE", })
					location.reload()

				} catch (e) {
					console.log("Delete User Fucntion ERROR===", e)
				}
			},

			editUser: async (ele, key) => {

				try {

					const store = getStore()

					const data = {
						email: store.inputs.emailInput,
						agenda_slug: "estarlin_agenda",
						address: store.inputs.addressInput,
						phone: store.inputs.phoneInput,
						full_name: store.inputs.nameInput
					}

					if (data.email.length == 0) {
						let email = store.agenda[key].email
						data.email = email

					}
					if (data.phone.length == 0) {
						let phone = store.agenda[key].phone
						data.phone = phone

					}
					if (data.full_name.length == 0) {
						let name = store.agenda[key].full_name
						data.full_name = name

					}
					if (data.address.length == 0) {
						let address = store.agenda[key].address
						data.address = address
					}
					let id = ele.id

					await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,
						{
							method: "PUT",
							headers: {
								'Content-type': 'application/json'
							},
							body: JSON.stringify(data)
						});



				}
				catch (e) {
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
