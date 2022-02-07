const url = "https://free-nba.p.rapidapi.com/players?page=0&search=";
let criaimgconf = document.createElement('img');
let criaimgdiv = document.createElement('img');

let entrada1 = document.getElementById('nomeJogador');
let fullName = document.getElementById('nomeCompleto');
let time = document.getElementById('timeAtual');
let conf = document.getElementById('conf');
let division = document.getElementById('division');

entrada1.addEventListener('focusout', busca,);

function LimpaTela(){
    fullName.textContent = '';
    time.textContent = '';
    conf.textContent = '';
    division.textContent = '';

    document.getElementById('coluna2').style.display = "none";
    document.getElementById('colunaerro').style.display = "none";
    document.getElementById('coluna3').style.display = "none";
    document.getElementById('coluna4').style.display = "none";
    document.getElementById('coluna5').style.display = "none";
}

async function busca(){
    let i = entrada1.value;
    if(i != '' && i.length > 1){
        try{
            let nome = i;
            let buscar = await fetch(url+nome,{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "adf7f296e0msh79e763400ec301dp101791jsn1238b7ceb75a"
            }
        })
        let info = await buscar.json();
        
        LimpaTela();
        preencheDados(info.data[0]);
        document.getElementById('futer').style = "margin-top: 0px"
    }
    catch(e){
        PreencheErro();
    }
}else {
    LimpaTela();
    alert('Não foi possível encontrar este jogador, tente novamente!')
    entrada1.value = '';
    document.getElementById('futer').style = "margin-top: 58vh;"
}
}

function PreencheErro(){
    LimpaTela();
    document.getElementById('colunaerro').style.display = "block";
    let er = document.createElement('div');
        er.classList.add('row');
        er.textContent = "Não temos este jogador no Banco de Dados, Lamentamos!"
        document.getElementById('colunaerro').appendChild(er);
        document.getElementById('futer').style = "margin-top: 58vh;"
}
function preencheDados(nba_dados){
    document.getElementById('coluna2').style.display = "block"
    document.getElementById('coluna3').style.display = "block"
    document.getElementById('coluna4').style.display = "block"
    document.getElementById('coluna5').style.display = "block"

    fullName.textContent = nba_dados.first_name + ' ' + nba_dados.last_name;
    time.textContent = nba_dados.team.full_name;
    conf.textContent = nba_dados.team.conference;
    fotoConf(nba_dados.team.conference);
    division.textContent = nba_dados.team.division;
    FotoDiv(nba_dados.team.division);
}


function fotoConf(conferencia){
let conf2 = document.getElementById('coluna4');
    switch(conferencia){
        case "West":
            criaimgconf.src = "assets/img/West.png";
            conf2.appendChild(criaimgconf);
            break;

        case "East":
            criaimgconf.src = "assets/img/East.png";
            conf2.appendChild(criaimgconf)
            break;

        default:
            criaimgconf.src = "assets/img/USA.png";
            conf2.appendChild(criaimgconf)
            break;
    }
}

function FotoDiv(divisao){
    let division2 = document.getElementById('coluna5');
    switch(divisao){
        case "Atlantic":
            criaimgdiv.src = "assets/img/Atlantic.png";
            division2.appendChild(criaimgdiv);
            break;

        case "Central":
            criaimgdiv.src = "assets/img/Central.png";
            division2.appendChild(criaimgdiv);
            break;

        case "Southeast":
            criaimgdiv.src = "assets/img/Southeast.png";
            division2.appendChild(criaimgdiv);
            break;

        case "Northwest":
            criaimgdiv.src = "assets/img/Northwest.png";
            division2.appendChild(criaimgdiv);
            break;

        case "Pacific":
            criaimgdiv.src = "assets/img/Pacific.png";
            division2.appendChild(criaimgdiv);
            break;

        case "Southwest":
            criaimgdiv.src = "assets/img/Southwest.png";
            division2.appendChild(criaimgdiv);
            break;

        default:
            criaimgdiv.src = "assets/img/USA.png";
            division2.appendChild(criaimgdiv);
            break;
    }

}
LimpaTela();