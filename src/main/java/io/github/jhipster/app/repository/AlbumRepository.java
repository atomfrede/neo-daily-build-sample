package io.github.jhipster.app.repository;

import io.github.jhipster.app.domain.Album;

import org.neo4j.springframework.data.repository.Neo4jRepository;
import org.neo4j.springframework.data.repository.query.Query;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Neo4j repository for the Album entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlbumRepository extends Neo4jRepository<Album, String> {
}
