import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { AgendaHomePage } from "./views/agendaHomePage";
import { Agenda_form} from "./views/agenda_form";
import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="*" element={<AgendaHomePage />} />
						<Route path="/agenda_form" element={<Agenda_form />} />								
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
