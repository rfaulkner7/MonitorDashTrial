package hiscox.adapted.repository;

import hiscox.adapted.model.Audit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository // tells spring to bootstrap the repository during component scan
public interface AuditRepository extends JpaRepository<Audit, Long>{
    // This interface automatically provides us with CRUD capabilities from Spring Data JPA's repository
    // which defines them

    @Query("SELECT a FROM Audit a WHERE a.serviceName = :service")
    List<Audit> findByService(@Param("service") String service);

    long countByServiceName(String serviceName);

    @Query(value = "select * from trial where trial.date between :previous and :currDate AND trial.service_name = :service",
    nativeQuery = true)
    List<Audit> findServiceBetweenDates(@Param("service") String service, @Param("previous") String previous, @Param("currDate") String currDate);

    @Query(value = "select * from trial where trial.date between :prev and :curr", nativeQuery = true)
    List<Audit> findAllBetweenDates(@Param("prev") String prev, @Param("curr") String curr);



}
