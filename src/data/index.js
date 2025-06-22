import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabaseSync('mydatabase.db')

export function CriarTabelaAlunos() {
    db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS alunos (id INTEGER PRIMARY KEY NOT NULL, codigo TEXT NOT NULL, nome TEXT NOT NULL);
  `)
}

export default function Insere(codigo, nome) {
    db.execSync(`
    INSERT INTO alunos (codigo, nome) VALUES ("${codigo}", "${nome}")
    `)
    console.log(`Nome ${nome} como o código ${codigo} inseridos com sucesso!`)
}

export function getAlunos() {
    const lista = []
    const allRows = db.getAllSync('SELECT * FROM alunos');
    for (const row of allRows) {
        lista.push({ id: row.id, codigo: row.codigo, nome: row.nome })
    }
    return lista
}

export function apagarNome(alunoId) {
    return db.runSync('DELETE FROM alunos WHERE id = $id', { $id: alunoId })
}

export function editarNome(novoNome, alunoId) {
    return db.runSync('UPDATE alunos SET nome = ? WHERE id = ?', novoNome, alunoId)
}

export function apagarLista() {
    db.execSync(`
        DROP TABLE IF EXISTS alunos;
    `)
    return console.log('A lista foi apagada.')
}// 86