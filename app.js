function mostrar(){
    let secret = document.getElementById('conteudo')
    secret.innerHTML = `
                <div class="extratop">
                    <h2>Você Acessou o Conteúdo Extra!</h2>
                </div>
                <style>
                    .extratop {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 4rem;
                        font-weight: bold;
                        color: #ffd700; 
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 
                        -1px -1px 1px rgb(255, 255, 255);
                    }
                </style>
                <section class="caixaextra">
                    <video width="400px" height="450px" controls>
                        <source src="honrados/Lula e Bolsonaro Dançando ao Som de Casca de Bala.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/neymar.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/cavalo.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/nokotan.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/cr7.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/eminem.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/gym.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/gojomeme.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/cascadabala .mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/aranha.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/sigma.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/danca.mp4" type="video/mp4">
                    </video>
                    <video width="400px" height="450px" controls>
                        <source src="honrados/dev.mp4" type="video/mp4">
                    </video>


                </section>
    `
}
