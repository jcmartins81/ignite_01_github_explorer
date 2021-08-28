interface RepositoryItemProps {
    repository: {
        id: string;
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem( props: RepositoryItemProps ) {
  const { name, description, html_url } = props.repository;
  return (
    <li>
      <strong>{name ?? "Default"}</strong>
      <p>{description}</p>
      <a href={html_url}>Acessar repositório</a>
    </li>
  );
}
