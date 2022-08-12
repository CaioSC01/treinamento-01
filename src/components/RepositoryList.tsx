import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositorylist.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/rocketseat/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  //o ForEach é usado para para fazer algo ao repositorio pois ele não retorna algo
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
};
