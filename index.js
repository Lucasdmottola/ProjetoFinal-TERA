let catalogo_usuarios = ['sandy', 'jneto', 'chico', 'bento'];
		let lista_senhas = ['brasil', 'Brasil', 'braSil', 'Br@sil'];
		let ctrl_login = 0;
		let ctrl_senha = 0;
		
		function verifica_usuario(){
			let xItem = document.getElementById("usuario").value;
			let xBusca = catalogo_usuarios.find(item => item === xItem);
			let xResposta = "";

			if(xBusca){
				xResposta = "Login Ok";
				ctrl_login = 1;
			} else {
				xResposta = "Erro! Login n�o encontrado";
				ctrl_login = 0;
			}
			
			console.log(xResposta);
		}
		
		function verifica_senha(){
			let xItem = document.getElementById("senha").value;
			let xBusca = lista_senhas.find(item => item === xItem);
			let xResposta = "";

			if(xBusca){
				xResposta = "Senha Ok";
				ctrl_senha = 1;
			} else {
				xResposta = "Erro! Senha n�o encontrada";
				ctrl_senha = 0;
			}
			
			console.log(xResposta);			
		}
		
		function acesso_ok(){
			if (ctrl_login + ctrl_senha > 1)
				console.log("formul�rio enviado");
			else 
				console.log("erro - reveja os dados de entrada");
		}

		// -------------- edição de cadastro de usuário ---------------- 

		function editar_dados() {
			if (ctrl_login && ctrl_senha) { // Verifica se o login e senha foram validados
				let index = catalogo_usuarios.indexOf(document.getElementById("usuario").value.trim());
				if (index >= 0) { // Verifica se o usuário existe no catálogo
					document.getElementById("usuario").readOnly = false;
					document.getElementById("senha").readOnly = false;
					document.getElementById("btnEditar").style.display = "none";
					document.getElementById("btnCancelar").style.display = "";
					console.log("Campos de login e senha habilitados para edição.");
				} else {
					console.log("Erro: Usuário não encontrado.");
				}
			} else {
				console.log("Erro: Realize a validação de login e senha antes de editar seus dados.");
			}
		}

		function cancelar_edicao() {
			document.getElementById("usuario").readOnly = true;
			document.getElementById("senha").readOnly = true;
			document.getElementById("btnEditar").style.display = "";
			document.getElementById("btnCancelar").style.display = "none";
			console.log("Edição de campos cancelada.");
		}


		