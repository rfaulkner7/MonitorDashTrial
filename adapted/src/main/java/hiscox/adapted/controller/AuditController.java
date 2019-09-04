package hiscox.adapted.controller;

import hiscox.adapted.exception.ResourceNotFoundException;
import hiscox.adapted.model.Audit;
import hiscox.adapted.model.ServiceCount;
import hiscox.adapted.repository.AuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NamedQuery;
import javax.validation.Valid;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController // combines spring's @Controller and @ResponseBody annotations, controller used to define controller
// and response body used to indicate that the return value of a method should be used as the response body of the
// request
@RequestMapping("/api") // declares that the url for all the apis in this controller will start with /api
public class AuditController {

    @Autowired
    AuditRepository auditRepository;

    int pagesize = 2;
    int start = 0;

    @GetMapping("/trial") // short form of @RequestMapping(value = "/trial", method = RequestMethod.GET)
    public List<Audit> getAllAudits(@RequestHeader(name = "auditID", required = false) String header) {
        System.out.println(header);
        start = 0;
        return auditRepository.findAll();
    }

    @GetMapping("/trial/{id}")
    public Audit getAuditById(@PathVariable(value = "id") Long auditId) { // used to bind a path variable with a method
        //parameter. Spring will return a 404 Not Found error whenever the audit doesn't exist b/c of our custom exception
        return auditRepository.findById(auditId)
                .orElseThrow(() -> new ResourceNotFoundException("Audit", "id", auditId));
    }

    @GetMapping("/trial/percentages")
    public List<ServiceCount> getServicePercentages() {
        ArrayList<ServiceCount> values = new ArrayList<>();
        ServiceCount one = new ServiceCount("Googoo", auditRepository.countByServiceName("googoo"));
        values.add(one);
        one = new ServiceCount("Yes", auditRepository.countByServiceName("yes"));
        values.add(one);
        one = new ServiceCount("Oof", auditRepository.countByServiceName("oof"));
        values.add(one);
        return values;
    }

//    @GetMapping("/trial/findByService/{service}")
//    public List<Audit> getAuditByService(@PathVariable(value = "service") String service) {
//        try {
//            return searchService.findByService(service);
//        }
//        catch (Exception e) {
//            System.out.print(e);
//        }
//        return null;
//    }

    @GetMapping("/trial/findByService/{service}")
    public List<Audit> findByService(@PathVariable(value = "service") String service) {
        try {
            return auditRepository.findByService(service);
        } catch (Exception e){
            throw new ResourceNotFoundException("Audit", "service_name", service);
        }
    }

    @GetMapping("/trial/findServiceByDateBetween/{service}/{start}/{end}")
    public List<Audit> findAllAfter(@PathVariable(value = "start") String start, @PathVariable(value = "end") String end, @PathVariable(value = "service") String service) throws ParseException {
        Date date = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -7);
        Date previous = cal.getTime();
        String prevDate = dateFormat.format(previous);
        String currDate = dateFormat.format(date);
        System.out.println(previous);
        System.out.println(date);
        return auditRepository.findServiceBetweenDates(service, prevDate, currDate);
    }

    @GetMapping("/trial/findAllByDateBetween/{prev}/{current}")
    public List<Audit> findAllByDateBetween(@PathVariable(value = "prev") String prev, @PathVariable(value = "current") String curr) {

        return auditRepository.findAllBetweenDates(prev, curr);
    }

//    @GetMapping("/trial/findPastWeek")
//    public List<Audit> findPastWeek() {
//        try {
//            return auditRepository.getAllPastWeek();
//        } catch (Exception e) {
//            throw new ResourceNotFoundException("Audit", "date", 7);
//        }
//    }

    @GetMapping("/trial/findByPage")
    public Page<Audit> findByPage() {
        Page<Audit> page = auditRepository.findAll(PageRequest.of(start, pagesize, Sort.by(Sort.Direction.ASC, "date")));
        start = start + 1;
        return page;
    }

}
