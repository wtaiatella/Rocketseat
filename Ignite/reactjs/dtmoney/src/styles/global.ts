import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
	
	--red: #e52e4d;
	--blue: #5429cc;

	--blue-light: #6933ff;

	--text-title: #363f5f;
	--text-body: #969cb3;

	--background: #f8f2f5;	
	--shape: #fff;
}


*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

// font-size standard: 16px for desktops
html{
	@media (max-width: 1080px) {
		//16 pix * 0,9375 = 15px
		font-size: 93.75%;
	}
	
	@media (max-width: 720px) {
		//16 pix * 0,875 = 15px
		font-size: 87.5%;
	}

}

body{
	background: var(--background);
	-webkit-font-smoothing: antialiased;
}

button {
	cursor: pointer;
}

[disabled]{
	opacity: 0.6;
	cursor: not-allowed;
}




`;
