import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'form in React',
  link: 'https://github.com/unform/unform',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositório1</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}
