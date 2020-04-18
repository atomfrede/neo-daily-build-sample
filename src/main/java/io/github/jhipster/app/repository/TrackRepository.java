package io.github.jhipster.app.repository;

import io.github.jhipster.app.domain.Track;

import org.neo4j.springframework.data.repository.Neo4jRepository;
import org.neo4j.springframework.data.repository.query.Query;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Neo4j repository for the Track entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TrackRepository extends Neo4jRepository<Track, String> {
}
