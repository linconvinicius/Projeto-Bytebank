import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 987456321);
diretor.cadastrarSenha("654321");
const gerente = new Gerente("Lincon", 5000, 123654789);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Denise", 789456123, "987654");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "654321");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "987654");
console.log(diretorEstaLogado, gerenteEstaLogado);
