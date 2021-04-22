interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

interface IRepositoryItemProps {
  repository: IRepository
}


export default function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="blank">Acessar repostório</a>
    </li>
  )
}